import React, { useCallback, useState } from 'react';
import { Input, Select, Form, Space, Button } from 'antd';
import {
  SimpleSearch,
  RepositoryFactory,
  BreadcrumbItem,
  useFetchTableData,
  AppBreadcrumb,
  AdvancedSearch,
} from 'dsl-admin-base';
import { Box } from 'rebass';
import { SearchOutlined } from '@ant-design/icons';
import { ProductsSearchForm } from 'components/pages/products/ProductsSearchForm';
import { PAGES } from 'utils/constant';
import ProductsApproval from 'components/pages/products/ProductsApproval';

const ProductRepository = RepositoryFactory.get('product');

export default function Index() {
  const { loading, data } = useFetchTableData(ProductRepository.getProductApproval, PAGES.PRODUCTS);
  const [selectedRow, setSelectedRow] = useState<number[]>([]);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Products',
      href: '/products',
    },
    {
      label: 'View Products',
      href: '',
    },
  ];

  const toggleRow = useCallback(
    (rows) => {
      setSelectedRow(rows);
    },
    [setSelectedRow],
  );

  const approveRows = useCallback(() => {
    ProductRepository.approveProducts(selectedRow);
  }, [selectedRow, ProductRepository]);
  const rejectRows = useCallback(() => {
    ProductRepository.rejectProducts(selectedRow);
  }, [selectedRow, ProductRepository]);

  return (
    <Box>
      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        <Space>
          <Button className="text-caps large-width" onClick={rejectRows}>
            Reject
          </Button>
          <Button type="primary" className="text-caps large-width" onClick={approveRows}>
            Approve
          </Button>
        </Space>
      </Box>
      <SimpleSearch initialValues={{ category: undefined, status: '' }}>
        <Form.Item name="searchText" label="&nbsp;">
          <Input style={{ width: 200 }} placeholder="SEARCH PRODUCTS" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item name="brandOwner" label="Brand Owner">
          <Select style={{ width: 200 }}></Select>
        </Form.Item>
      </SimpleSearch>
      <AdvancedSearch
        type="Products_Approval"
        savedSearches={[]}
        repository={ProductRepository as any}
      >
        <ProductsSearchForm></ProductsSearchForm>
      </AdvancedSearch>
      <Box variant="card">
        <ProductsApproval
          products={data?.products || []}
          loading={loading}
          totalItems={data?.total || 0}
          onSelectRowKeys={toggleRow}
        />
      </Box>
    </Box>
  );
}
