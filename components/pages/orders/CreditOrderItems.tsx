import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { CreditNoteItem, Currency, DslOrderItem, DslProduct, useDataTable } from 'dsl-admin-base';
import { CreditSummary } from './CreditSummary';
import { Flex, Box, Text } from 'rebass';

type QuantityProduct = DslProduct & { qty: number };
export type TableType = DslOrderItem | QuantityProduct;

export const getProductTotal = (rec: QuantityProduct) => rec.price.total * rec.qty;

interface Props {
  orders: TableType[];
  orderId: number;
  totalItems: number;
  loading: boolean;
  creditNoteItems: CreditNoteItem[];
}

export const OrderItemsTableInCredit: React.FC<Props> = ({ loading, creditNoteItems, orders }) => {
  const baseColumns: ColumnsType<CreditNoteItem> = [
    {
      title: 'code/name',
      dataIndex: 'code',
      key: 'code',
      sorter: true,
      width: 200,
      render: (_, rec) => {
        const order = orders.find(({ id }) => id === rec.orderItemId);
        return (
          <Flex flexDirection="column">
            <Text variant="caps">{order?.code || ''}</Text>
            <Text variant="caps">{order?.name || ''}</Text>
            <Flex mt={2} flexDirection="row">
              {rec.reasons?.map((reason) => (
                <Text key={reason} mr={2}>
                  {reason}
                </Text>
              ))}
            </Flex>
          </Flex>
        );
      },
    },
    {
      title: 'Unit Price Paid Ex VAT',
      dataIndex: 'price',
      key: 'price',
      sorter: true,
      render: (_, rec) => {
        const order = orders.find(({ id }) => id === rec.orderItemId);
        if (!order) return null;

        if (typeof order.price == 'number') {
          return <Currency value={order.price} />;
        }
        if (typeof order.price != 'number') {
          return <Currency value={order.price.total} />;
        }
      },
    },
    {
      title: 'Qty purchased',
      dataIndex: 'qty',
      key: 'qty',
      sorter: true,
      render: (_, rec) => {
        const order = orders.find(({ id }) => id === rec.orderItemId);
        if (!order) return null;

        return <Text>{order.qty || 1}</Text>;
      },
    },
    {
      title: 'Total Ex VAT',
      sorter: true,
      render: (_, rec) => {
        const order = orders.find(({ id }) => id === rec.orderItemId);
        if (!order) return null;

        if (typeof order.price == 'number' && 'qty' in order) {
          return <Currency value={order.price * order.qty} />;
        }
        if (order && 'seoDescription' in order) {
          return <Currency value={getProductTotal(order)} />;
        }
      },
    },
    {
      title: 'Credit qty',
      dataIndex: 'id',
      key: 'id',
      render: (_, rec) => {
        return <Text>{rec.qty || 1}</Text>;
      },
    },
    {
      title: 'Credit/charge unit price (Ex VAT)',
      dataIndex: 'price',
      key: 'price',
      sorter: true,
      render: (_, rec) => {
        return (
          <Box>
            <Currency value={rec.subtotal} />
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
        return <Currency value={rec.subtotal * (rec.qty || 1)} />;
      },
    },
    {
      title: 'Credit/charge line total (inc VAT)',
      dataIndex: 'price',
      key: 'price',
      sorter: true,
      render: (_, rec) => {
        return <Currency value={rec.total * (rec.qty || 1)} />;
      },
    },
  ];
  const { columns, onchange } = useDataTable(baseColumns);
  return (
    <>
      <Table<CreditNoteItem>
        className="clickable-row"
        onChange={onchange}
        columns={columns}
        dataSource={creditNoteItems}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
      />
      <CreditSummary creditNoteItems={creditNoteItems} orders={orders} />
    </>
  );
};
