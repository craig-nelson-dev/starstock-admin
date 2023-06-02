import React from 'react';
import { Input, Form, DatePicker } from 'antd';
import {
  SimpleSearch,
  RepositoryFactory,
  BreadcrumbItem,
  useFetchTableData,
  AppBreadcrumb,
} from 'dsl-admin-base';
import { AbandonedBasketTable } from 'components/pages/abandoned-basket/ABTable';
import { Box, Text } from 'rebass';
import { SearchOutlined } from '@ant-design/icons';
import { PAGES } from 'utils/constant';

export default function Index() {
  const { loading, data } = useFetchTableData(
    RepositoryFactory.get('ab').get,
    PAGES.ABANDONED_BASKET,
  );

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Baskets',
      href: '/abandoned-basket',
    },
  ];

  return (
    <Box>
      <Box>
        <Text variant="pageHeading">
          <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        </Text>
      </Box>
      <SimpleSearch initialValues={{ status: 0, ab: 0 }} advanceSearch={false}>
        <Form.Item name="searchText" label="&nbsp;">
          <Input style={{ width: 264 }} placeholder="Search Baskets" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item label="Created">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Form.Item name="createdFrom">
              <DatePicker
                placeholder="From"
                style={{ width: 130 }}
                format="DD/MM/YYYY"
              ></DatePicker>
            </Form.Item>
            <Box sx={{ mx: 1 }}>-</Box>
            <Form.Item name="createdTo">
              <DatePicker placeholder="To" style={{ width: 130 }} format="DD/MM/YYYY"></DatePicker>
            </Form.Item>
          </Box>
        </Form.Item>
        <Form.Item label="Updated">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Form.Item name="updatedFrom">
              <DatePicker
                placeholder="From"
                style={{ width: 130 }}
                format="DD/MM/YYYY"
              ></DatePicker>
            </Form.Item>
            <Box sx={{ mx: 1 }}>-</Box>
            <Form.Item name="updatedTo">
              <DatePicker placeholder="To" style={{ width: 130 }} format="DD/MM/YYYY"></DatePicker>
            </Form.Item>
          </Box>
        </Form.Item>
      </SimpleSearch>
      <Box variant="card">
        <AbandonedBasketTable
          baskets={data?.carts || []}
          loading={loading}
          totalItems={data?.total || 5}
        />
      </Box>
    </Box>
  );
}
