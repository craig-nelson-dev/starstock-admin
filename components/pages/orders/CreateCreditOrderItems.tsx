import { Select, Input, Table, Modal, notification } from 'antd';
import { ColumnsType } from 'antd/es/table';
import {
  CreditReasonCodes,
  Currency,
  formatPrice,
  TaxCode,
  useCreateCreditMutation,
  useDataTable,
  DslOrderItemExtended,
} from 'dsl-admin-base';
import { CreateCreditSummary } from './CreateCreditSummary';
import { Flex, Box, Text } from 'rebass';
import { useEffect, useState } from 'react';
import { AddAdditionalItems } from './AddAdditionalItems';
import { SetIndividualPriceDialog } from './SetIndividualPriceDialog';
import { TreviPayReasonCodeInput } from './TreviPayReasonCodeInput';
import { SetAdditionalCreditDataDialog } from './AdditionalCreditDialog';

export interface PriceDetail {
  inputPrice: number;
  starStockFee: number;
  logisticsFee: number;
  taxRate: number;
  promoTaxMultiplier: number;
  totalDiscount: number;
  id?: number;
}

export interface OrderWithCreditType extends DslOrderItemExtended {
  priceDetail: PriceDetail;
}

interface ReasonItem {
  reasonId: number | null;
  reason: string;
}

interface CreditItem {
  brandOwnerId: number;
  orderItemId?: number;
  subtotal: number;
  tax: number;
  total: number;
  taxRate: number;
  taxCalculationType: string;
  reasons: ReasonItem[];
  qty: number;
}

interface AdditionalCreditItems {
  name: string;
  reasons: ReasonItem[];
  taxRate: number;
  price: number;
  brandOwner: number;
}

const getIndividualPrices = (rec: DslOrderItemExtended) => {
  const prices: PriceDetail = {
    totalDiscount: 0,
    inputPrice: 0,
    logisticsFee: 0,
    starStockFee: 0,
    taxRate: 0,
    promoTaxMultiplier: 0,
  };

  prices.inputPrice = rec.price ? rec.price / 100 : 0;

  rec?.pricing?.forEach((pricing) => {
    const { identifier, value, isTax } = pricing;
    prices[identifier as keyof PriceDetail] = value;

    if (isTax) {
      prices.taxRate = value;
    }
  });

  if (prices.starStockFee)
    prices.starStockFee = formatPrice(prices.inputPrice * (prices.starStockFee - 1));
  if (prices.logisticsFee) prices.logisticsFee = formatPrice(prices.logisticsFee);

  if (rec.discount) {
    prices.promoTaxMultiplier = rec.discount.promoTaxMultiplier || 1;
    prices.totalDiscount = (rec.price - rec.discount.unitPrice) / 100;
  } else {
    prices.totalDiscount = 0;
  }

  return prices;
};
export const getCreditUnitPrice = (rec: OrderWithCreditType) => {
  const priceDetail = rec.priceDetail;

  const price =
    (priceDetail.inputPrice || 0) +
    (priceDetail.starStockFee || 0) +
    (priceDetail.logisticsFee || 0);

  const linePriceExTax = price - priceDetail.totalDiscount;
  const taxTotal =
    price * priceDetail.taxRate -
    price -
    (priceDetail.totalDiscount * priceDetail.promoTaxMultiplier - priceDetail.totalDiscount);
  const linePriceIncludeTax = linePriceExTax + taxTotal;

  return {
    linePriceExTax,
    linePriceIncludeTax,
    taxTotal,
  };
};
const addToItems = (
  brandOwner: number,
  name: string,
  price: number,
  taxRate: number,
  items: CreditItem[],
  isCharge?: boolean,
) =>
  brandOwner &&
  name &&
  price &&
  items.push({
    brandOwnerId: brandOwner,
    subtotal: formatPrice(price) * 100 * (isCharge ? -1 : 1) || 0,
    total: Math.ceil(formatPrice(price) * (100 + taxRate) * (isCharge ? -1 : 1)) || 0,
    tax: Math.ceil(formatPrice(price) * taxRate * (isCharge ? -1 : 1)) || 0,
    taxCalculationType: 'percentage',
    taxRate: taxRate || 0,
    reasons: [
      {
        reasonId: null,
        reason: name,
      },
    ],
    qty: 1,
  });

const onSuccessMessage = () =>
  notification.success({
    message: 'Success',
    description: `Credit note was created successfully`,
  });
const onFailureMessage = (text?: string) =>
  notification.warn({
    message: 'Error',
    description: text || `Failed to create a credit note`,
  });

interface Props {
  items: DslOrderItemExtended[];
  orderId: number;
  totalItems: number;
  loading: boolean;
  triggerCreation?: boolean;
  setTriggerCreation?: any;
  taxCodes: TaxCode[];
}

export const OrderItemsTableInCreateCredit: React.FC<Props> = ({
  items,
  orderId,
  loading,
  triggerCreation,
  setTriggerCreation,
  taxCodes,
}) => {
  const [createCreditMutation] = useCreateCreditMutation();
  const [creditData, setCreditData] = useState<OrderWithCreditType[]>([]);
  useEffect(() => {
    setCreditData(
      items?.map((orderItem: DslOrderItemExtended) => ({
        ...orderItem,
        priceDetail: getIndividualPrices(orderItem),
      })),
    );
  }, [items]);

  const [creditQtys, setCreditsQty] = useState<Object>({});
  const [reasons, setReasons] = useState<Object>({});
  const [treviPayReasonCode, setTreviPayReasonCode] = useState('Non Applicable');
  const [dialogFeeData, setDialogFeeData] = useState<PriceDetail>({
    id: -1,
    inputPrice: 0,
    starStockFee: 0,
    logisticsFee: 0,
    totalDiscount: 0,
    taxRate: 0,
    promoTaxMultiplier: 0,
  });

  const [show, setShow] = useState(false);
  const onSetPrice = () => {
    const newOrderItems = creditData.map((item) => item);
    const index = newOrderItems.findIndex((item) => item.id === dialogFeeData.id);
    newOrderItems[index] = {
      ...newOrderItems[index],
      priceDetail: dialogFeeData,
    };

    setCreditData(newOrderItems);
    setShow(false);
  };

  const openDialog = (id: number) => {
    const index = creditData.findIndex((item) => item.id === id);
    const rec = creditData[index];
    const priceDetail = rec.priceDetail;

    setDialogFeeData({
      ...priceDetail,
      id: rec.id,
    });
    setShow(true);
  };

  const onCreditQtyChange = (orderId: number, creditQty: number) => {
    setCreditsQty((c: any) => ({
      ...c,
      [orderId]: creditQty,
    }));
  };
  const onReasonSelect = (orderId: number, selectedReasons: Number[]) => {
    setReasons((r: any) => ({
      ...r,
      [orderId]: selectedReasons,
    }));
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDialogFeeData({
      ...dialogFeeData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const [additionalCreditDialogData, setAdditionalCreditDialogData] = useState({
    price: 0,
    taxRate: 0,
  });
  const onAdditionalCreditDialogDataChange = (name: string, value: any) => {
    setAdditionalCreditDialogData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const baseColumns: ColumnsType<OrderWithCreditType> = [
    {
      title: 'code/name',
      dataIndex: 'code',
      key: 'code',
      sorter: true,
      width: 200,
      render: (_, rec) => {
        const isSelected = selectedRowKeys?.find((id) => id === rec.id);
        return (
          <Flex flexDirection="column">
            <Text variant="caps">{rec.code}</Text>
            <Text variant="caps">{rec.name}</Text>
            {isSelected ? (
              <Flex mt={2}>
                <Select
                  placeholder="Reason Code Select"
                  style={{ width: 256 }}
                  mode="multiple"
                  onChange={(value) => onReasonSelect(Number(rec.id), value as Number[])}
                >
                  {CreditReasonCodes.map((stt) => (
                    <Select.Option key={stt.value} value={stt.value} required>
                      <Text variant="caps">{stt.label}</Text>
                    </Select.Option>
                  ))}
                </Select>
              </Flex>
            ) : (
              <></>
            )}
          </Flex>
        );
      },
    },
    {
      title: 'Unit Price Paid Ex VAT',
      dataIndex: 'price',
      key: 'price',
      sorter: true,
      render: (_, orderItem) => {
        if (orderItem.discount) {
          return (
            <Box>
              <Text sx={{ mb: 1, textDecoration: 'line-through' }}>
                <Currency value={orderItem.price} />
              </Text>
              <Currency value={orderItem.discount.unitPrice} />
            </Box>
          );
        }

        return <Currency value={orderItem.price} />;
      },
    },
    {
      title: 'Qty purchased',
      dataIndex: 'qty',
      key: 'qty',
      sorter: true,
      render: (_, rec) => {
        return <Text>{rec?.qty || 1}</Text>;
      },
    },
    {
      title: 'Total Ex VAT',
      sorter: true,
      render: (_, orderItem) => {
        if (orderItem.discount) {
          return (
            <Box>
              <Text sx={{ mb: 1, textDecoration: 'line-through' }}>
                <Currency value={orderItem.price * orderItem.qty} />
              </Text>
              <Currency value={orderItem.discount.totalPrice} />
            </Box>
          );
        }

        return <Currency value={orderItem.price * orderItem.qty} />;
      },
    },
    {
      title: 'Credit qty',
      dataIndex: 'id',
      key: 'id',
      render: (_, orderItem) => {
        if (orderItem.price === 0) {
          return null;
        }
        return (
          <Input
            type="number"
            onChange={(e) => onCreditQtyChange(Number(orderItem.id), Number(e.target.value))}
            defaultValue={1}
            min={1}
          />
        );
      },
    },
    {
      title: 'Credit/charge unit price (Ex VAT)',
      dataIndex: 'price',
      key: 'price',
      sorter: true,
      render: (_, rec) => {
        const isSelected = selectedRowKeys?.find((id) => id === rec.id);
        if (!isSelected) return null;

        return (
          <Box
            onClick={() => openDialog(Number(rec.id))}
            sx={{ span: { textDecoration: 'underline' } }}
          >
            <Currency value={getCreditUnitPrice(rec).linePriceExTax * 100} />
          </Box>
        );
      },
    },
    {
      title: 'Credit Line Total(Ex VAT)',
      dataIndex: 'price',
      key: 'price',
      sorter: true,
      render: (_, rec) => {
        const isSelected = selectedRowKeys?.find((id) => id === rec.id);
        if (!isSelected) return null;

        const creditQty = (creditQtys as any)[String(rec.id)] || 1;
        return <Currency value={getCreditUnitPrice(rec).linePriceExTax * 100 * creditQty} />;
      },
    },
    {
      title: 'Credit/charge line total (inc VAT)',
      dataIndex: 'price',
      key: 'price',
      sorter: true,
      render: (_, rec) => {
        const isSelected = selectedRowKeys?.find((id) => id === rec.id);
        if (!isSelected) return null;

        const creditQty = (creditQtys as any)[String(rec.id)] || 1;
        return <Currency value={getCreditUnitPrice(rec).linePriceIncludeTax * 100 * creditQty} />;
      },
    },
  ];

  const [additionalCreditItems, setAdditionalCreditItems] = useState<AdditionalCreditItems[]>([]);
  const [charges, setCharges] = useState<AdditionalCreditItems[]>([]);
  const setAdditionalCreditItemsFn = (value: any) => setAdditionalCreditItems(value);
  const setChargesFn = (value: any) => setCharges(value);
  const { columns, selectedRowKeys, rowSelection, onchange } = useDataTable(baseColumns);

  const tableRowSelection = {
    ...rowSelection,
    getCheckboxProps: (item: DslOrderItemExtended) => ({
      disabled: item.price === 0,
      name: String(item.id),
    }),
  };

  useEffect(() => {
    if (triggerCreation) {
      const items: CreditItem[] = [];
      const selectedCreditData = creditData.filter((credit) => selectedRowKeys.includes(credit.id));
      let isValidCreditCreation = true;

      selectedCreditData?.forEach((credit) => {
        const { taxRate } = credit.priceDetail;
        const id = credit.id;
        const linePrice = getCreditUnitPrice(credit);
        const brandOwnerId = credit.associations?.vendor?.id;
        const creditQty = (creditQtys as any)[id] === undefined ? 1 : (creditQtys as any)[id];

        if (!(reasons as any)[id]) {
          isValidCreditCreation = false;
        }

        items.push({
          brandOwnerId: Number(brandOwnerId),
          orderItemId: Number(id),
          subtotal: Math.round(linePrice.linePriceExTax * 100),
          tax: Math.round(linePrice.taxTotal * 100),
          total: Math.round(linePrice.linePriceIncludeTax * 100),
          taxRate: Math.round(taxRate * 100 - 100),
          taxCalculationType: (credit as any).taxCalculationType,
          reasons: (reasons as any)[id]?.map((reasonId: String) => {
            const reason = CreditReasonCodes.find(({ value }) => Number(reasonId) === value);
            return {
              reasonId: reason?.value,
              reason: reason?.label,
            };
          }),
          qty: creditQty,
        });
      });

      additionalCreditItems?.forEach(({ brandOwner, name, price, taxRate }) => {
        addToItems(brandOwner, name, price, taxRate, items);
      });
      charges?.forEach(({ brandOwner, name, price, taxRate }) => {
        addToItems(brandOwner, name, price, taxRate, items, true);
      });

      if (isValidCreditCreation) {
        items.length &&
          createCreditMutation({
            variables: {
              input: {
                orderId: orderId,
                items,
                reason: treviPayReasonCode,
              },
            },
          })
            .then((result) => {
              if (result.data?.createCreditNote.success) onSuccessMessage();
              else onFailureMessage();
            })
            .catch(() => onFailureMessage());
      } else {
        onFailureMessage('Select reason for every credit item');
      }
    }
    setTriggerCreation(false);
  }, [triggerCreation, additionalCreditItems, charges, reasons, creditData, selectedRowKeys]);

  const [additionalCreditDialgShow, setAdditionalCreditDialgShow] = useState(false);
  const [additionalCreditDialogId, setAdditionalCreditDialogId] = useState({
    category: '',
    id: 0,
  });

  const onAdditionalCreditDialogSave = () => {
    if (additionalCreditDialogId.category === 'charge') {
      setCharges((data) => {
        data[additionalCreditDialogId.id] = {
          ...data[additionalCreditDialogId.id],
          ...additionalCreditDialogData,
        };
        return data;
      });
    } else {
      setAdditionalCreditItems((data) => {
        data[additionalCreditDialogId.id] = {
          ...data[additionalCreditDialogId.id],
          ...additionalCreditDialogData,
        };
        return data;
      });
    }
    setAdditionalCreditDialgShow(false);
  };

  return (
    <>
      <Table<OrderWithCreditType>
        className="clickable-row"
        onChange={onchange}
        rowSelection={tableRowSelection}
        columns={columns}
        dataSource={creditData}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
      />

      <Modal
        title="Edit Credit Unit Price"
        visible={show}
        onOk={onSetPrice}
        onCancel={() => setShow(false)}
        okText="Save"
      >
        <SetIndividualPriceDialog value={dialogFeeData} onInputChange={onInputChange} />
      </Modal>

      <Modal
        title="Edit Credit Unit Price"
        visible={additionalCreditDialgShow}
        onOk={onAdditionalCreditDialogSave}
        onCancel={() => setAdditionalCreditDialgShow(false)}
        okText="Save"
      >
        <SetAdditionalCreditDataDialog
          taxCodes={taxCodes}
          value={additionalCreditDialogData}
          onInputChange={onAdditionalCreditDialogDataChange}
        />
      </Modal>

      <AddAdditionalItems
        data={additionalCreditItems}
        setFn={setAdditionalCreditItemsFn}
        text="+ Add Additional Credit Item"
        onPriceClick={(clickedAdditionalCreditId: number) => {
          setAdditionalCreditDialgShow(true);
          setAdditionalCreditDialogData(additionalCreditItems[clickedAdditionalCreditId]);
          setAdditionalCreditDialogId({
            category: 'credit',
            id: clickedAdditionalCreditId,
          });
        }}
      />
      <AddAdditionalItems
        data={charges}
        setFn={setChargesFn}
        text="+ Add Charge"
        onPriceClick={(clickedAdditionalCreditId: number) => {
          setAdditionalCreditDialgShow(true);
          setAdditionalCreditDialogData(charges[clickedAdditionalCreditId]);
          setAdditionalCreditDialogId({
            category: 'charge',
            id: clickedAdditionalCreditId,
          });
        }}
      />

      <TreviPayReasonCodeInput
        reasonCode={treviPayReasonCode}
        setReasonCode={setTreviPayReasonCode}
      />

      <CreateCreditSummary
        selectedRowKeys={selectedRowKeys || []}
        orderItems={creditData || []}
        creditQtys={creditQtys || []}
        additionalCreditItems={additionalCreditItems || []}
        charges={charges || []}
      />
    </>
  );
};
