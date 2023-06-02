import React from 'react';
import { Form, Select, Button } from 'antd';
import {
  SimpleSearch,
  RepositoryFactory,
  BreadcrumbItem,
  useFetchTableData,
  AppBreadcrumb,
  StatusValue,
} from 'dsl-admin-base';
import { LogisticFeeTable } from 'components/pages/logistic-fee/LogisticFeeTable';
import { Box, Text } from 'rebass';
import { PAGES } from 'utils/constant';
import Link from 'next/link';

const { Option } = Select;

export default function Index() {
  const { loading, data } = useFetchTableData(
    RepositoryFactory.get('logisticFee').get,
    PAGES.LOGISTIC_FEE,
  );

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'logistics fees',
      href: '/logistic-fee',
    },
  ];

  return (
    <Box>
      <Box>
        <Text variant="pageHeading">
          <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
          <Link href="/logistic-fee/new">
            <Button type="primary" className="text-caps">
              add fee
            </Button>
          </Link>
        </Text>
      </Box>
      <SimpleSearch initialValues={{ status: '' }} advanceSearch={false}>
        <Form.Item name="status" label="Status">
          <Select style={{ width: 200 }}>
            <Option value="">All Statuses</Option>
            <Option value={StatusValue.ACTIVE}>Active</Option>
            <Option value={StatusValue.DISABLED}>Disabled</Option>
          </Select>
        </Form.Item>
      </SimpleSearch>
      <Box variant="card">
        <LogisticFeeTable
          items={data?.fees || []}
          loading={loading}
          totalItems={data?.totalCount || 0}
        />
      </Box>
    </Box>
  );
}
