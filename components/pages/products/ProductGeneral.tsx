import { Checkbox, Form, Input, Radio, Select, Space } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import {
  BrandOwner,
  calculatePrice,
  CategoryTree,
  DslCategory,
  DslProduct,
  getCurrentPrice,
  ImageUpload,
  LogisticsFee,
  ProductDistributor,
  StatusValue,
  TaxCode,
} from 'dsl-admin-base';
import { AppContextComponent } from 'dsl-admin-base/lib/context';
import formatCurrency from 'dsl-admin-base/utils/currency';
import { useContext, useEffect, useState } from 'react';
import { Box, Text } from 'rebass';

const { TextArea } = Input;
const { Option } = Select;

interface Props {
  product?: DslProduct | null;
  categories: DslCategory[];
  taxCodes: TaxCode[];
  logisticsFees: LogisticsFee[];
  distributors: ProductDistributor[];
  onChangeLogFee: (value: number) => void;
  brands: BrandOwner[];
  onBrandChange: (id: number) => void;
}

export const ProductGeneral: React.FC<Props> = ({
  categories,
  taxCodes,
  product,
  logisticsFees,
  distributors,
  onChangeLogFee,
  brands = [],
  onBrandChange,
}) => {
  const {
    state: { fee },
  } = useContext(AppContextComponent);

  // TODO: assume product has only 1 price line assigned, change later
  const logisticsFeeId = product?.adminPricing?.pricing?.length
    ? product.adminPricing.pricing[0].logisticsFeeId || undefined
    : undefined;
  const currentPrice = getCurrentPrice(product);
  const [price, setPrice] = useState(currentPrice?.inputPrice);
  const [ssFee, setSSFee] = useState(currentPrice ? currentPrice.starStockFee : fee);
  const [logisticFee, setLogisticFee] = useState<number | undefined>(logisticsFeeId);
  const [volume, setVolume] = useState(product?.volume || 0);
  const [showMRRP, setShowMRRP] = useState(product?.flaggedPrice || false);

  const selectedLogisticFee = logisticsFees.find((o) => o.id === logisticFee);

  const productOptions = [
    {
      optionId: 'Installation',
      optionName: 'Display installation request',
    },
    {
      optionId: 'pump clip',
      optionName: 'Display pump clip request',
    },
    {
      optionId: 'featured',
      optionName: 'Featured product',
    },
    {
      optionId: 'hideLoggedOut',
      optionName: 'Hide from logged out users',
    },
  ];

  const priceTableHeadingStyle = {
    fontSize: 2,
    // textTransform: 'capitalize',
  };

  // TODO: calculate logisticfee base on fee type, for now consider it's only charge by volumne
  const logisticFeeAmount = logisticFee
    ? volume * (selectedLogisticFee?.fee || 0)
    : currentPrice?.logisticsFee || 0;

  const sellOutPrice = calculatePrice(price || 0, ssFee, logisticFeeAmount);

  const onSetFlaggedPrice = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      setShowMRRP(true);
    } else {
      setShowMRRP(false);
    }
  };

  useEffect(() => {
    onChangeLogFee(logisticFeeAmount);
  }, [logisticFeeAmount]);

  return (
    <Box sx={{ maxWidth: 765 }}>
      <Form.Item
        name="vendorId"
        label="Brand Owner"
        rules={[{ required: true, message: 'Brand Owner is required' }]}
      >
        <Select
          placeholder="SELECT"
          style={{ maxWidth: 500 }}
          onChange={(e) => onBrandChange(e as number)}
        >
          {brands.map((b) => (
            <Option value={b.id} key={b.id}>
              {b.displayName}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="distributorId"
        label="Distributor"
        rules={[{ required: true, message: 'Distributor is required' }]}
      >
        <Select placeholder="SELECT" style={{ maxWidth: 320 }}>
          {distributors.map((dist) => {
            return (
              <Option value={dist.id} key={dist.id}>
                {dist.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        name="code"
        label="Product Code"
        rules={[{ required: true, message: 'Product code is required' }]}
      >
        <Input style={{ maxWidth: 500 }}></Input>
      </Form.Item>
      <Form.Item
        name="name"
        label="Product Name"
        rules={[{ required: true, message: 'Product name is required' }]}
      >
        <Input></Input>
      </Form.Item>
      <Form.Item label="Description" name="longDescription">
        <TextArea rows={5}></TextArea>
      </Form.Item>
      <ImageUpload formItemName="mainImage" label="Main Image"></ImageUpload>
      <ImageUpload formItemName="additionalImages" label="Addtional Images" multiple></ImageUpload>
      <CategoryTree label="Categories" data={categories} required />
      <Form.Item name="popularity" label="Priority">
        <Input style={{ maxWidth: 182 }}></Input>
      </Form.Item>
      <Form.Item label="Volume">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Form.Item name="volume" noStyle initialValue={volume}>
            <Input
              style={{ maxWidth: 182 }}
              type="number"
              onChange={(e) => setVolume(parseFloat(e.target.value))}
            ></Input>
          </Form.Item>
          <Text sx={{ fontSize: 2, flexShrink: 0, ml: 2 }}>Litres</Text>
        </Box>
      </Form.Item>
      <Form.Item label="Weight">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Form.Item name="weight" noStyle>
            <Input placeholder="placeholder" style={{ maxWidth: 182 }}></Input>
          </Form.Item>
          <Text sx={{ fontSize: 2, flexShrink: 0, ml: 4 }}>KG</Text>
        </Box>
      </Form.Item>
      <Form.Item label="Price (£)*">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '166px 127px 240px 186px',
            rowGap: 2,
            columnGap: 3,
          }}
        >
          <Text sx={priceTableHeadingStyle}>Input Price (ex VAT)</Text>
          <Text sx={priceTableHeadingStyle}>StarStock Fee</Text>
          <Text sx={priceTableHeadingStyle}>Logistics Fee</Text>
          <Text sx={priceTableHeadingStyle}>Sell Out Price (ex VAT)</Text>
          <Form.Item
            name="price"
            style={{ margin: 0 }}
            rules={[{ required: true, message: 'Price is required' }]}
            initialValue={price}
          >
            <Input type="number" onChange={(e) => setPrice(parseFloat(e.target.value))}></Input>
          </Form.Item>
          <Box>
            <Form.Item name="starStockFee" noStyle initialValue={`${ssFee}%`}>
              <Input onChange={(e) => setSSFee(parseFloat(e.target.value))}></Input>
            </Form.Item>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ flex: 1 }}>
              <Form.Item noStyle name="logisticsFee" initialValue={logisticFee}>
                <Select
                  placeholder="SELECT"
                  onChange={(e) => setLogisticFee(e as number)}
                  allowClear
                >
                  {logisticsFees.map((fee) => {
                    return (
                      <Option value={fee.id} key={fee.id}>
                        {fee.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Box>
            <Box sx={{ maxWidth: 100, ml: 2 }}>
              <Input disabled value={formatCurrency(logisticFeeAmount * 100)}></Input>
            </Box>
          </Box>
          <Box>
            <Input value={formatCurrency(sellOutPrice * 100)} disabled></Input>
          </Box>
        </Box>
      </Form.Item>
      <Form.Item name="taxCodeId" label="VAT">
        <Select placeholder="SELECT" style={{ maxWidth: 320 }}>
          {taxCodes.map((tax) => {
            return (
              <Option value={tax.id} key={tax.id}>
                {tax.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item name="flaggedPrice" valuePropName="checked">
        <Checkbox onChange={onSetFlaggedPrice}>
          <Text as="span" sx={{ fontSize: 2 }}>
            Flag as promotional price
          </Text>
        </Checkbox>
      </Form.Item>
      {showMRRP && (
        <Form.Item name="mrrp" label="Usual RRP price(ex VAT)">
          <Input type="number" />
        </Form.Item>
      )}
      <Form.Item label="Options" name="options">
        <Checkbox.Group>
          <Space direction="vertical">
            {productOptions.map((option) => {
              return (
                <Checkbox key={option.optionId} value={option.optionId}>
                  <Text as="span" sx={{ fontSize: 2 }}>
                    {option.optionName}
                  </Text>
                </Checkbox>
              );
            })}
          </Space>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item label="Common Mispellings" name="searchWords">
        <Input.TextArea rows={4}></Input.TextArea>
      </Form.Item>
      <Form.Item label="Status" name="statusValue">
        <Radio.Group>
          <Radio value={StatusValue.ACTIVE}>Active</Radio>
          <Radio value={StatusValue.DISABLED}>Disabled</Radio>
        </Radio.Group>
      </Form.Item>
      <Text mb="3">
        Approval Status:{' '}
        <Text display="inline-block" fontWeight="bold">
          Approved
        </Text>
      </Text>
    </Box>
  );
};
