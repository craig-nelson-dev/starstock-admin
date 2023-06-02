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

export const ProductEffectControl: React.FC<Props> = ({ effects, onChange }) => {
  const [showProductPicker, setShowProductPicker] = useState(false);
  const productIds = effects.map((o) => o.freeStock?.entityId).filter((o) => o) as number[];

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
      key: 'qty',
      align: 'center',
      width: '30%',
      render: (id: number) => {
        const qty = effects.find((o) => o.freeStock?.entityId === id)?.freeStock?.qty;

        return (
          <Box sx={{ maxWidth: 100 }} mx="auto">
            <Form.Item
              initialValue={qty}
              name={`effect-freestock-${id}`}
              rules={[{ required: true, message: 'Qty is required' }]}
            >
              <Input
                placeholder=""
                type="number"
                onChange={(e) => onChangeQty(id, parseInt(e.target.value))}
              ></Input>
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

  const { columns } = useDataTable(baseColumns);

  const onChangeSelectedProducts = (items: DslProduct[]) => {
    const value: EffectInput[] = items.map((item) => {
      const existEffect = effects.find((o) => o.freeStock?.entityId === +item.id);
      if (existEffect) {
        return existEffect;
      }

      return {
        type: PromotionEffectType.FREE_STOCK,
        name: `${item.name} - free`,
        value: 1,
        freeStock: {
          qty: 1,
          entityId: +item.id,
        },
      };
    });
    onChange(value);
  };

  const onRemoveProduct = (id: number) => {
    onChange(effects.filter((o) => o.freeStock?.entityId !== id));
  };

  const onChangeQty = (productId: number, qty: number) => {
    const value = effects.map((effect) => {
      if (effect.freeStock?.entityId === productId) {
        effect.freeStock.qty = qty;
      }

      return effect;
    });

    onChange(value);
  };

  return (
    <Box mb="4" p="3" bg="lightGrey">
      <Row justify="space-between" align="middle">
        <Text variant="h4">Free Stock - All</Text>
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
