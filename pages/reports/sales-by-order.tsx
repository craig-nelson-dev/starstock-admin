import { Button, DatePicker, Form, Select } from 'antd';
import { SalesByOrderTable } from 'components/pages/reporting/sales-by-order-table';
import {
  AppBreadcrumb,
  BrandOwner,
  BreadcrumbItem,
  ByOrderRows,
  getListingQuery,
  SimpleSearch,
  useGetBrandOwnersQuery,
  useGetSalesByOrderQuery,
} from 'dsl-admin-base';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Box, Text } from 'rebass';

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Reports',
    href: '/reports',
  },
];

export const SalesByOrder: React.FC = () => {
  const router = useRouter();
  const params = getListingQuery(router.query);

  const { data: { getBrandOwner: { brandOwners = [] } = {} } = {} } = useGetBrandOwnersQuery({
    variables: {
      sortBy: 'name',
      sortOrder: 'asc',
      page: 1,
      perPage: 100,
    },
  });

  const {
    data: { getSalesReportByOrder: { rows = [] } = {} } = {},
    loading,
  } = useGetSalesByOrderQuery({
    variables: {
      input: {
        brandId: params.bo || 0,
        dateFrom: params.dateFrom || '',
        dateTo: params.dateTo || '',
      },
    },
  });

  const downloadCSV = () => {
    if (rows && rows.length) {
      let data: any = rows.reduce<string[][]>(
        (acc, cur) => [
          ...acc,
          [
            cur.accountNumber,
            cur.outletName,
            cur.orderNumber,
            cur.orderDate,
            cur.deliveryDate,
            cur.brandOwner,
            cur.productCode,
            cur.productName.replace(/,/g, ''),
            cur.price,
            cur.inputPrice,
            cur.platformFee,
            cur.logisticsFee,
            cur.qty.toString(),
            cur.lineTotal,
            cur.inputTotal,
            cur.platformTotal,
            cur.logisticsTotal,
          ],
        ],
        [],
      );

      data = [
        [
          'Account Number',
          'Outlet',
          'Order Reference',
          'Date',
          'Delivery Date',
          'Brand',
          'Product Code',
          'Product Name',
          'Price',
          'Input Price',
          'Platform Fee',
          'Logistics Fee',
          'Qty',
          'Line Total',
          'Input Total',
          'Platform Total',
          'Logistics Total',
        ],
        ...data,
      ];

      const csvContent =
        'data:text/csv;charset=utf-8,' + data.map((e: string[]) => e.join(',')).join('\n');
      const encodedUri = encodeURI(csvContent);
      window.open(encodedUri);
    }
  };

  return (
    <>
      <Head>
        <title>Orders</title>
      </Head>
      <Box>
        <Box>
          <Text variant="pageHeading">
            <AppBreadcrumb items={breadcrumbs} />
            <Box>
              <Button
                type="primary"
                className="text-caps"
                style={{ padding: '4px 24px' }}
                onClick={downloadCSV}
              >
                <Text letterSpacing="0.5px">Download CSV</Text>
              </Button>
            </Box>
          </Text>
        </Box>
        <SimpleSearch initialValues={{ status: 0, bo: 0, searchText: '' }} advanceSearch={false}>
          <Form.Item name="bo" label="Brand Owner">
            <Select style={{ width: 150 }}>
              <Select.Option value={0}>All</Select.Option>
              {(brandOwners as BrandOwner[]).map((o) => (
                <Select.Option key={o.id} value={o.id}>
                  {o.displayName}
                </Select.Option>
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
        </SimpleSearch>
        <Box variant="card">
          <SalesByOrderTable orders={rows as ByOrderRows[]} loading={loading} />
        </Box>
      </Box>
    </>
  );
};

export default SalesByOrder;
