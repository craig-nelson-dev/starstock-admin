import React from 'react';
import { Input, Form, DatePicker } from 'antd';
import {
  SimpleSearch,
  RepositoryFactory,
  BreadcrumbItem,
  useFetchTableData,
  AppBreadcrumb,
} from 'dsl-admin-base';
import { CreditsTable } from 'components/pages/credits/CreditsTable';
import { Box, Text } from 'rebass';
import { SearchOutlined } from '@ant-design/icons';
import { PAGES } from 'utils/constant';

export default function Index() {
  const { loading, data } = useFetchTableData(RepositoryFactory.get('credits').get, PAGES.CREDITS);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Credit Notes',
      href: '/credits',
    },
  ];

  return (
    <Box>
      <Box>
        <Text variant="pageHeading">
          <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        </Text>
      </Box>
      <SimpleSearch initialValues={{ status: 0 }} advanceSearch={false}>
        <Form.Item name="search" label="&nbsp;">
          <Input style={{ width: 200 }} placeholder="SEARCH" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item label="Date range">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Form.Item name="dateFrom">
              <DatePicker
                placeholder="From"
                style={{ width: 130 }}
                format="DD/MM/YYYY"
                className="text-caps"
              ></DatePicker>
            </Form.Item>
            <Box sx={{ mx: 1 }}>-</Box>
            <Form.Item name="dateTo">
              <DatePicker
                placeholder="To"
                style={{ width: 130 }}
                format="DD/MM/YYYY"
                className="text-caps"
              ></DatePicker>
            </Form.Item>
          </Box>
        </Form.Item>
      </SimpleSearch>
      <Box variant="card">
        <CreditsTable
          items={data?.notes || []}
          loading={loading}
          totalItems={data?.totalCount || 0}
        />
      </Box>
    </Box>
  );
}
