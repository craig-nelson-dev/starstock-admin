import React from 'react';
import { Input, Form, Button } from 'antd';
import {
  SimpleSearch,
  RepositoryFactory,
  BreadcrumbItem,
  useFetchTableData,
  AppBreadcrumb,
} from 'dsl-admin-base';
import { TaxesTable } from 'components/pages/taxes/TaxesTable';
import { Box, Text } from 'rebass';
import { SearchOutlined } from '@ant-design/icons';
import { PAGES } from 'utils/constant';
import Link from 'next/link';

export default function Index() {
  const { loading, data } = useFetchTableData(RepositoryFactory.get('taxCode').get, PAGES.TAXES);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Tax Rates',
      href: '/tax',
    },
  ];

  return (
    <Box>
      <Box>
        <Text variant="pageHeading">
          <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
          <Link href="/taxes/new">
            <Button type="primary" className="text-caps">
              add tax rate
            </Button>
          </Link>
        </Text>
      </Box>
      <SimpleSearch initialValues={{ status: 0 }} advanceSearch={false}>
        <Form.Item name="search" label="&nbsp;">
          <Input style={{ width: 200 }} placeholder="SEARCH" prefix={<SearchOutlined />} />
        </Form.Item>
      </SimpleSearch>
      <Box variant="card">
        <TaxesTable
          items={data?.taxCodes || []}
          loading={loading}
          totalItems={data?.totalCount || 0}
        />
      </Box>
    </Box>
  );
}
