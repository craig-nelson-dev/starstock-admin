import { SearchOutlined } from '@ant-design/icons';
import { DatePicker, Form, Input, Select } from 'antd';
import { OrdersTable } from 'components/pages/orders/OrdersTable';
import {
  AppBreadcrumb,
  BrandOwner,
  BreadcrumbItem,
  getListingQuery,
  RepositoryFactory,
  SimpleSearch,
  useFetchTableData,
} from 'dsl-admin-base';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Box, Text } from 'rebass';
import { PAGES } from 'utils/constant';

const { Option } = Select;

const statuses = [
  { id: 9, displayName: 'Processing' },
  { id: 8, displayName: 'Complete' },
];

export default function Index() {
  const router = useRouter();
  const params = getListingQuery(router.query);
  const [bo, setBo] = useState<BrandOwner[]>([]);

  const { loading, data } = useFetchTableData(RepositoryFactory.get('order').get, PAGES.ORDERS);
  const boReq = useFetchTableData(RepositoryFactory.get('bo').get, PAGES.BO, params);

  useEffect(() => {
    if (boReq.data?.brandOwners) {
      const filtered = boReq.data?.brandOwners.filter((b) => b) as BrandOwner[];
      setBo(filtered);
    }
  }, [data]);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Orders',
      href: '/Orders',
    },
  ];

  return (
    <>
      <Head>
        <title>Orders</title>
      </Head>
      <Box>
        <Box>
          <Text variant="pageHeading">
            <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
          </Text>
        </Box>
        <SimpleSearch initialValues={{ status: '', bo: '', searchText: '' }} advanceSearch={false}>
          <Form.Item name="searchText" label="&nbsp;">
            <Input style={{ width: 200 }} placeholder="SEARCH ORDERS" prefix={<SearchOutlined />} />
          </Form.Item>
          <Form.Item name="status" label="Status">
            <Select style={{ width: 100 }}>
              <Option value={''}>All</Option>
              {statuses.map((o) => (
                <Option key={o.id} value={o.id}>
                  {o.displayName}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="bo" label="Brand Owner">
            <Select style={{ width: 150 }}>
              <Option value={''}>All</Option>
              {bo.map((o) => (
                <Option key={o.id} value={o.id}>
                  {o.displayName}
                </Option>
              ))}
            </Select>
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
          <Form.Item label="Order Value">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Form.Item name="totalFrom">
                <Input type="number" placeholder="From" style={{ width: 80 }} />
              </Form.Item>
              <Box sx={{ mx: 1 }}>-</Box>
              <Form.Item name="totalTo">
                <Input type="number" placeholder="To" style={{ width: 80 }} />
              </Form.Item>
            </Box>
          </Form.Item>
        </SimpleSearch>
        <Box variant="card">
          <OrdersTable
            orders={data?.adminOrders || []}
            loading={loading}
            totalItems={data?.totalCount || 0}
          />
        </Box>
      </Box>
    </>
  );
}
