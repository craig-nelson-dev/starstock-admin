import { Button, Space, Menu } from 'antd';
import { OrderItemsTable } from 'components/pages/orders/OrderItems';
import { OrderPromotion } from 'components/pages/orders/OrderPromotion';
import { OrderTopBanner } from 'components/pages/orders/OrderTopBanner';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  DslOrder,
  RepositoryFactory,
  usePageData,
  AppSpin,
  SettingDropdown,
} from 'dsl-admin-base';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Box, Text } from 'rebass';

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Order',
    href: '/orders',
  },
];

const OrderRepository = RepositoryFactory.get('order');

const Order: React.FC = () => {
  const router = useRouter();
  const query = router.query;

  const { data, loading } = usePageData(
    () => OrderRepository.getOrderWithPromotion(Number(query.orderId)),
    ['id'],
    [],
  );

  const order = data?.order;

  const orderTitle = useMemo(() => `${order?.reference || ''}` || '', [data]);

  const breadcrumbsRender: BreadcrumbItem[] = useMemo(() => {
    return [
      ...breadcrumbs,
      {
        label: orderTitle,
        href: '',
      },
    ];
  }, [orderTitle]);

  const menu = [
    {
      label: 'View Invoice',
      value: 'view-invoice',
      onClick: () => {
        router.push(`${query.orderId}/invoice`);
      },
    },
    {
      label: 'Create Credit',
      value: 'create-credit',
      onClick: () => {
        router.push(`${query.orderId}/create-credit`);
      },
    },
  ];

  const settingMenu = (
    <Menu>
      {(menu || []).map((item) => {
        return (
          <Menu.Item key={item.value as string} onClick={item.onClick}>
            {item.label}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const orderITems = data ? data.items.concat(data.freeStockItems) : [];

  return (
    <>
      <Head>
        <title>
          Order: {order?.reference} - {order?.outletName}
        </title>
      </Head>

      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbsRender}></AppBreadcrumb>
        <Space>
          <SettingDropdown big overlay={settingMenu}></SettingDropdown>
          <Button type="primary" className="text-caps">
            Save
          </Button>
        </Space>
      </Box>
      {loading ? (
        <AppSpin />
      ) : (
        <>
          <OrderTopBanner order={order as DslOrder} parentView />
          <Box variant="card" mt="4">
            <Text fontSize={16} mb="2">
              Order Items
            </Text>
            <OrderItemsTable items={orderITems} loading={loading} />
          </Box>
          <OrderPromotion order={order as DslOrder} />
        </>
      )}
    </>
  );
};

export default Order;
