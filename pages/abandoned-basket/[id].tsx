import React from 'react';
import {
  BreadcrumbItem,
  AppBreadcrumb,
  Date as DateDisplay,
  usePageData,
  RepositoryFactory,
  AppSpin,
} from 'dsl-admin-base';
import { Box, Text } from 'rebass';
import { Card, Space } from 'antd';
import { OrderItemsTable } from 'components/pages/orders/OrderItems';
import { useRouter } from 'next/router';
// import { OrderPromotion } from 'components/pages/orders/OrderPromotion';

export default function Index() {
  const router = useRouter();
  const { loading, data } = usePageData(
    () =>
      RepositoryFactory.get('ab').getDetails({
        id: router.query.id ? parseInt(router.query.id.toString()) : 1,
      }),
    ['id'],
    [],
  );

  const outletName = data?.outlet?.name || 'N/A';

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Baskets',
      href: '/abandoned-basket',
    },
    {
      label: outletName,
      href: '',
    },
  ];

  if (loading) {
    return <AppSpin></AppSpin>;
  }

  return (
    <Box>
      <Box>
        <Text variant="pageHeading">
          <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        </Text>
      </Box>
      <Card style={{ backgroundColor: '#ececec' }} bordered={false}>
        <Space direction="vertical">
          <Text>Outlet: {outletName}</Text>
          <Text>
            User: {`${data?.user?.title} ${data?.user?.firstName} ${data?.user?.lastName}`}
          </Text>
          <Text>
            Created: <DateDisplay value={data?.createdOn || ''} />
          </Text>
          <Text>
            Updated: <DateDisplay value={data?.updatedOn || ''} />
          </Text>
          <Text>No of Items: {data?.products?.length}</Text>
        </Space>
      </Card>
      <Box variant="card" mt="4">
        <Text fontSize={16} mb="2">
          Basket Items
        </Text>
        <OrderItemsTable items={[]} loading={false} />
      </Box>
      {/* <OrderPromotion
        hidePromotion={true}
        order={}
      /> */}
    </Box>
  );
}
