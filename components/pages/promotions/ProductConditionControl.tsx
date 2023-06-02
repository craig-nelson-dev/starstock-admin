import { Box, Text } from 'rebass';
import { Row, Space, Table, Button, Form, Input, Menu } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { DeleteOutlined } from '@ant-design/icons';
import {
  useDataTable,
  Condition,
  usePageData,
  RepositoryFactory,
  DslProduct,
  ProductPicker,
  SettingDropdown,
} from 'dsl-admin-base';
import { useMemo, useState, useEffect } from 'react';

interface Props {
  condition: Condition;
  onChange: (condition: Condition) => void;
  onRemove: (id: number) => void;
}

export const ProductConditionControl: React.FC<Props> = ({ condition, onChange, onRemove }) => {
  const [showProductPicker, setShowProductPicker] = useState(false);

  const productIds = condition?.in || [];

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

  useEffect(() => {
    onChange({ ...condition, products: products } as Condition);
  }, [products]);

  const baseColumns: ColumnsType<DslProduct> = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '40%',
    },
    // {
    //   title: 'Qty',
    //   dataIndex: 'qty',
    //   key: 'qty',
    //   align: 'center',
    //   width: '30%',
    //   render: () => {
    //     return (
    //       <Box sx={{ maxWidth: 100 }} mx="auto">
    //         <Input placeholder="" type="number"></Input>
    //       </Box>
    //     );
    //   },
    // },
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
    onChange({ ...condition, in: productIds.filter((o) => o != id) });
  };

  const { columns } = useDataTable(baseColumns);

  const onChangeSelectedProducts = (items: DslProduct[]) => {
    onChange({ ...condition, in: items.map((o) => +o.id) });
  };

  const onClickMenu = (key: string) => {
    if (key === 'delete') {
      onRemove(condition.id);
    }
  };

  const menu = (
    <Menu onClick={(e) => onClickMenu(e.key as string)}>
      <Menu.Item key="delete">Remove condition</Menu.Item>
    </Menu>
  );

  return (
    <Box mb="4" p="3" bg="lightGrey">
      <Row justify="space-between" align="middle">
        <Text variant="h4">products</Text>
        <Space>
          <Button type="primary" onClick={() => setShowProductPicker(true)}>
            Add Products
          </Button>
          <SettingDropdown overlay={menu}></SettingDropdown>
          <ProductPicker
            onCancel={() => setShowProductPicker(false)}
            selectedProducts={products}
            onChange={onChangeSelectedProducts}
            visible={showProductPicker}
          />
        </Space>
      </Row>
      <Box sx={{ mb: 3, mt: 3, display: 'flex' }}>
        <Text sx={{ display: 'inline-block', mr: 3, fontSize: 2, pt: 1 }}>Qty</Text>
        <Form.Item name="qty" rules={[{ required: true, message: 'Qty is required' }]}>
          <Input type="number" style={{ width: 100 }} />
        </Form.Item>
      </Box>
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
