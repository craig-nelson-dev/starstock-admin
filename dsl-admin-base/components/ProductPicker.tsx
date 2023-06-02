import { Modal, Table, Form, Divider, Button, Space, Input, Row, Col, Pagination } from 'antd';
import { Box } from 'rebass';
import { RepositoryFactory } from '../repositories/RepositoryFactory';
import { DslProduct } from '../graphql/generated/graphql';
import { useDataTable } from '../hooks/data-table';
import { useEffect, useState, useRef } from 'react';
import { ColumnsType } from 'antd/es/table';
import { useDebouncedCallback } from 'use-debounce';
import { FormInstance } from 'antd/lib/form';
import uniqBy from 'lodash.uniqby';

const ProductRepository = RepositoryFactory.get('product');

export type ResolveErrorMessageFn = (args: {
  reason: 'MAX_SELECTED_PRODUCTS';
  props: { maxSelectedProducts?: number };
}) => string;

interface Props {
  visible?: boolean;
  onCancel?: () => void;
  onChange: (items: DslProduct[]) => void;
  selectedProducts: DslProduct[];
  maxSelectedProducts?: number;
  resolveErrorMessage?: ResolveErrorMessageFn;
}

const baseColumns: ColumnsType<DslProduct> = [
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    sorter: true,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'product',
    sorter: true,
  },
];

export const ProductPicker: React.FC<Props> = ({
  visible,
  onCancel,
  onChange,
  selectedProducts,
  maxSelectedProducts,
  resolveErrorMessage,
}) => {
  const [products, setProducts] = useState<DslProduct[]>();
  const [totalItems, setTotalItems] = useState(0);
  const formInstance = useRef<FormInstance>(null);
  const [formValues, setFormValues] = useState<any>({});
  const [page, setPage] = useState(1);
  const [perPage, setPerpage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const {
    columns,
    rowSelection,
    selectedRowKeys,
    sortConfig,
    onchange,
    clearSelectedRows,
    addSelectedRowsKey,
  } = useDataTable(baseColumns, false);

  const onFormchange = useDebouncedCallback(async () => {
    if (formInstance.current) {
      const values = await formInstance.current.validateFields();
      setFormValues(values);
    }
  }, 400).callback;

  useEffect(() => {
    if (visible === false) {
      clearSelectedRows();
    }
  }, [visible]);

  useEffect(() => {
    if (visible == true && selectedProducts && selectedProducts.length != 0) {
      addSelectedRowsKey(selectedProducts.map((p) => p.id));
    }
  }, [selectedProducts, visible]);

  useEffect(() => {
    if (didHitMaxAmountOfSelectedProducts(selectedRowKeys)) {
      const errMsg = resolveErrorMessage
        ? resolveErrorMessage({ reason: 'MAX_SELECTED_PRODUCTS', props: { maxSelectedProducts } })
        : `This upsell section has a limit of ${maxSelectedProducts} products.`;
      setError(errMsg);
    } else {
      setError(undefined);
    }
  }, [selectedRowKeys]);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const data = await ProductRepository.get({
          currentPage: page,
          perPage,
          ...sortConfig,
          ...formValues,
        });
        setProducts(data?.products);
        setTotalItems(data?.total || 0);
      } catch (e) {}
      setLoading(false);
    };
    fetchProductData();
  }, [formValues, sortConfig, page, perPage]);

  const onPerPageChange = (...args: any) => {
    setPage(1);
    setPerpage(args[1]);
  };

  const clearSearch = () => {
    formInstance.current?.resetFields();
    onFormchange();
  };

  const didHitMaxAmountOfSelectedProducts = (selectedProducts: React.Key[]) => {
    return maxSelectedProducts ? maxSelectedProducts < selectedProducts.length : false;
  };

  const addProducts = (close?: boolean) => {
    const x = (products || []).filter((product) => selectedRowKeys.includes(product.id)) || [];
    onChange(uniqBy([...x, ...selectedProducts], (o) => o.id));

    if (close && onCancel) {
      onCancel();
    }
  };

  return (
    <Modal visible={visible} onCancel={onCancel} title="Add Products" footer={null} width="1024px">
      <Box sx={{ maxHeight: 'calc(100vh - 280px)', overflowY: 'auto', overflowX: 'hidden', p: 1 }}>
        <Form
          layout="vertical"
          ref={formInstance}
          initialValues={{ category: '', status: '' }}
          onValuesChange={onFormchange}
        >
          <Row gutter={15}>
            <Col xs={12}>
              <Form.Item label="Search" name="searchText">
                <Input></Input>
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Row gutter={15}>
                <Col span={12}>
                  <Form.Item label=" " name="clearBtn">
                    <Button
                      type="default"
                      style={{ fontSize: '14px', border: '0px' }}
                      onClick={clearSearch}
                    >
                      <u>Clear All</u>
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
        <Divider></Divider>
        <Box sx={{ mb: 3 }}>
          <Pagination
            showSizeChanger
            current={page}
            total={totalItems}
            onChange={setPage}
            onShowSizeChange={onPerPageChange}
          ></Pagination>
        </Box>
        <Table<DslProduct>
          onChange={onchange}
          size="middle"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={products}
          pagination={false}
          rowKey="id"
          loading={loading}
          showSorterTooltip={false}
        />
      </Box>
      <Divider></Divider>
      <Box sx={{ justifyContent: 'flex-end', display: 'flex', mt: 4 }} variant="customAntDesign">
        <Space size={10}>
          {error && <Form.ErrorList errors={[<p>{error}</p>]} />}
          <Button type="default" onClick={onCancel} className="text-caps">
            Cancel
          </Button>
          <Button
            disabled={didHitMaxAmountOfSelectedProducts(selectedRowKeys)}
            type="primary"
            onClick={() => {
              addProducts(true);
            }}
            className="text-caps"
          >
            Add products
          </Button>
        </Space>
      </Box>
    </Modal>
  );
};
