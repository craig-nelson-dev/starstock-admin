import React from 'react';
import { Input, Select, Form, Button, Row } from 'antd';
import {
  SimpleSearch,
  RepositoryFactory,
  BreadcrumbItem,
  useFetchTableData,
  AppBreadcrumb,
  AdvancedSearch,
  StatusValue,
  usePageData,
} from 'dsl-admin-base';
import ProductsTable from 'components/pages/products/ProductsTable';
import { OptionItem } from 'models/option';
import { Box, Text } from 'rebass';
import { SearchOutlined } from '@ant-design/icons';
import { ProductsSearchForm } from 'components/pages/products/ProductsSearchForm';
import { PAGES } from 'utils/constant';
import { useRouter } from 'next/router';
import Link from 'next/link';

const { Option } = Select;
const ProductRepository = RepositoryFactory.get('product');
const statusOptions = [
  {
    label: 'Status',
    value: '',
  },
  {
    label: 'Active',
    value: StatusValue.ACTIVE,
  },
  {
    label: 'Disabled',
    value: StatusValue.DISABLED,
  },
];

export default function Index() {
  const router = useRouter();
  const { loading, data } = useFetchTableData(ProductRepository.get, PAGES.PRODUCTS);

  const { data: brands } = usePageData(() =>
    RepositoryFactory.get('bo').get({ page: 1, perPage: 100, sortBy: 'name', sortOrder: 'asc' }),
  );

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Products',
      href: '/products',
    },
  ];

  return (
    <Box>
      <Box>
        <Text variant="pageHeading">
          <Row>
            <Box>
              <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
            </Box>
          </Row>
          <Box>
            <Link href={`${router.pathname}/new`}>
              <Button type="primary" className="text-caps" style={{ padding: '4px 24px' }}>
                <Text letterSpacing="0.5px">Add Product</Text>
              </Button>
            </Link>
          </Box>
        </Text>
      </Box>
      <SimpleSearch initialValues={{ category: undefined, status: '' }}>
        <Form.Item name="searchText" label="&nbsp;">
          <Input style={{ width: 200 }} placeholder="SEARCH PRODUCTS" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select style={{ width: 200 }}>
            {statusOptions.map((status: OptionItem) => {
              return (
                <Option value={status.value as string} key={status.value as string}>
                  {status.label}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item name="brandOwnerID" label="Brand Owner">
          <Select style={{ width: 200 }} allowClear>
            {brands?.brandOwners.map((bo) => {
              return <Option value={bo?.id as number}>{bo?.displayName}</Option>;
            })}
          </Select>
        </Form.Item>
      </SimpleSearch>
      <AdvancedSearch type="Products" savedSearches={[]} repository={ProductRepository as any}>
        <ProductsSearchForm></ProductsSearchForm>
      </AdvancedSearch>
      <Box variant="card">
        <ProductsTable
          products={data?.products || []}
          loading={loading}
          totalItems={data?.total || 0}
        />
      </Box>
    </Box>
  );
}
