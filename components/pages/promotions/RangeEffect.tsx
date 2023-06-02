import { Box, Text } from 'rebass';
import { Row, Space, Table, Button, Input, Form } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { DeleteOutlined } from '@ant-design/icons';
import {
  useDataTable,
  EffectInput,
  usePageData,
  RepositoryFactory,
  DslProduct,
  ProductPicker,
  PromotionEffectType,
} from 'dsl-admin-base';
import { useMemo, useState } from 'react';

interface Props {
  effects: EffectInput[];
  onChange: (effects: EffectInput[]) => void;
}

export const RangeEffect: React.FC<Props> = ({ effects, onChange }) => {
  const [showProductPicker, setShowProductPicker] = useState(false);
  const range = effects.find((o) => o.type === PromotionEffectType.RANGE)?.rangeSelect || [];
  const productIds = range.map((o) => o.entityId);

  const { data, loading } = usePageData(
    () => {
      return Promise.all(
        productIds.map((o) => RepositoryFactory.get('product').getProductDetail(o)),
      );
    },
    [],
    [productIds.join(',')],
  );

  const products = useMemo(() => {
    return (data || []).filter((o) => o);
  }, [data]) as DslProduct[];

  const baseColumns: ColumnsType<DslProduct> = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '40%',
    },
    {
      title: 'Qty',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      width: '30%',
      render: (id: number) => {
        const defaultValue = range.find((o) => o.entityId === id)?.qty;
        return (
          <Box sx={{ maxWidth: 100 }} mx="auto">
            <Form.Item
              name={`${PromotionEffectType.RANGE}-${id}`}
              initialValue={defaultValue}
              rules={[{ required: true, message: 'Qty is required' }]}
            >
              <Input placeholder="" type="number"></Input>
            </Form.Item>
          </Box>
        );
      },
    },
    {
      title: '',
      align: 'right',
      dataIndex: 'id',
      render: (id: number) => {
        return (
          <Box sx={{ fontSize: '1.25rem', cursor: 'pointer' }} onClick={() => onRemoveProduct(id)}>
            <DeleteOutlined />
          </Box>
        );
      },
    },
  ];

  const onRemoveProduct = (id: number) => {
    onChange([
      {
        type: PromotionEffectType.RANGE,
        name: 'range deal',
        value: 0,
        rangeSelect: productIds.filter((o) => o !== id).map((o) => ({ entityId: o, qty: 0 })),
      },
    ]);
  };

  const { columns } = useDataTable(baseColumns);

  const onChangeSelectedProducts = (items: DslProduct[]) => {
    onChange([
      {
        type: PromotionEffectType.RANGE,
        name: 'range deal',
        value: 0,
        rangeSelect: items.map((item) => ({ entityId: +item.id, qty: 0 })),
      },
    ]);
  };

  return (
    <Box mb="4" p="3" bg="lightGrey">
      <Row justify="space-between" align="middle">
        <Text variant="h4">free stock - range</Text>
        <Space>
          <Button type="primary" onClick={() => setShowProductPicker(true)}>
            Add Products
          </Button>
          <ProductPicker
            onCancel={() => setShowProductPicker(false)}
            selectedProducts={products}
            onChange={onChangeSelectedProducts}
            visible={showProductPicker}
          />
        </Space>
      </Row>
      <Table<DslProduct>
        className="grey-table"
        columns={columns}
        dataSource={products}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
        expandIconColumnIndex={4}
      />
    </Box>
  );
};
