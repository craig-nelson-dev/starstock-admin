import { SearchOutlined } from '@ant-design/icons';
import { DatePicker, Form, Input } from 'antd';
import { PODTable } from 'components/pages/pod/PODTable';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  RepositoryFactory,
  SimpleSearch,
  useFetchTableData,
} from 'dsl-admin-base';
import Head from 'next/head';
import { Box, Text } from 'rebass';
import { PAGES } from 'utils/constant';

export default function Index() {
  const { loading, data } = useFetchTableData(RepositoryFactory.get('order').get, PAGES.POD, {
    isPodPage: true,
  });

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'POD',
      href: '/pod',
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
        <SimpleSearch initialValues={{ status: 0, bo: 0, searchText: '' }} advanceSearch={false}>
          <Form.Item name="searchText" label="&nbsp;">
            <Input style={{ width: 200 }} placeholder="SEARCH" prefix={<SearchOutlined />} />
          </Form.Item>
          <Form.Item label="POD date range">
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
          <PODTable
            items={data?.adminOrders || []}
            loading={loading}
            totalItems={data?.totalCount || 0}
          />
        </Box>
      </Box>
    </>
  );
}
