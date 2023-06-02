import React from 'react';
import { Input, Select, Form, Row, Button } from 'antd';
import {
  SimpleSearch,
  RepositoryFactory,
  BreadcrumbItem,
  useFetchTableData,
  AppBreadcrumb,
} from 'dsl-admin-base';
import CategoriesTable from 'components/pages/categories/CategoriesTable';
import { OptionItem } from 'models/option';
import { Box, Text } from 'rebass';
import { SearchOutlined } from '@ant-design/icons';
import { CATEGORY_STATUSES } from 'utils/constant';
import { PAGES } from 'utils/constant';
import { useRouter } from 'next/router';
import Link from 'next/link';

const { Option } = Select;
const CategoryRepository = RepositoryFactory.get('category');
const statusOptions = [
  {
    label: 'Status',
    value: '',
  },
  ...CATEGORY_STATUSES,
];

export default function Index() {
  const router = useRouter();
  const { loading, data } = useFetchTableData(CategoryRepository.get, PAGES.CATEGORIES);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Categories',
      href: '/categories',
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
                <Text letterSpacing="0.5px">Add Category</Text>
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
      </SimpleSearch>
      <Box variant="card">
        <CategoriesTable categories={data || []} loading={loading} totalItems={0} />
      </Box>
    </Box>
  );
}
