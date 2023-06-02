import { Box, Text } from 'rebass';
import { Row, Space, Select, InputNumber, Table } from 'antd';
import { EffectInput, PromotionEffectType, DslProduct } from 'dsl-admin-base';
import { ColumnsType } from 'antd/lib/table';

const { Option } = Select;

interface Props {
  effects: EffectInput[];
  onChange: (effects: EffectInput[]) => void;
  products: DslProduct[];
}

const baseColumns: ColumnsType<DslProduct> = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '40%',
  },
];

export const LineDiscountEffect: React.FC<Props> = ({ effects, onChange, products }) => {
  const value = effects.length ? (effects[0].value || 0) / 100 : 0;

  const onValueChange = (value: number) => {
    onChange([
      {
        type: PromotionEffectType.LINE_DISCOUNT,
        value: value * 100,
        name: 'line-discount',
      },
    ]);
  };

  return (
    <Box mb="4" p="3" bg="lightGrey">
      <Row justify="space-between" align="middle">
        <Text variant="h4">Discount - Line</Text>
        <Space></Space>
      </Row>
      <Box sx={{ pt: 3, mb: 4 }}>
        <Space>
          <Select style={{ width: 300 }} value="fixedAmount">
            <Option value="fixedAmount">Discount by a fixed amount</Option>
          </Select>
          <Text sx={{ ml: 3 }}>£</Text>
          <InputNumber
            type="number"
            defaultValue={value}
            onChange={(e) => onValueChange((e || 0) as number)}
          />
        </Space>
      </Box>
      <Table<DslProduct>
        className="grey-table"
        columns={baseColumns}
        dataSource={products}
        pagination={false}
        rowKey="id"
      />
    </Box>
  );
};
