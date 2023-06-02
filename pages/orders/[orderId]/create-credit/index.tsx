import { Button, Space } from 'antd';
import { OrderItemsTableInCreateCredit } from 'components/pages/orders/CreateCreditOrderItems';
import { OrderTopBanner } from 'components/pages/orders/OrderTopBanner';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  DslOrder,
  RepositoryFactory,
  usePageData,
  AppSpin,
} from 'dsl-admin-base';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMemo } from 'react';
import { Box, Text } from 'rebass';

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Order',
    href: '/orders',
  },
];

const OrderRepository = RepositoryFactory.get('order');

const CreateCredit: React.FC = () => {
  const router = useRouter();
  const query = router.query;

  const { data, loading: loadingOrder } = usePageData(
    () => OrderRepository.getOrderWithPromotion(Number(query.orderId)),
    ['id'],
    [],
  );

  const order = data?.order;

  const orderTitle = useMemo(() => `${order?.reference || ''}` || '', [order]);
  const { loading: loadingTaxcodes, data: taxCodes } = usePageData(() =>
    RepositoryFactory.get('taxCode').get({ page: '1', perPage: '100' }),
  );

  const breadcrumbsRender: BreadcrumbItem[] = useMemo(() => {
    return [
      ...breadcrumbs,
      {
        label: orderTitle,
        href: `/orders/${query.orderId}`,
      },
      {
        label: 'Create Credit',
        href: '',
      },
    ];
  }, [orderTitle]);

  const [triggerCreation, setTriggerCreation] = useState(false);

  const cancelCreditCreation = () => {
    router.push(`/orders/${query.orderId}`);
  };
  const createCreditNote = () => {
    setTriggerCreation(true);
  };

  const loading = loadingOrder || loadingTaxcodes;

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
          <Button className="text-caps" onClick={cancelCreditCreation}>
            Cancel
          </Button>
          <Button type="primary" className="text-caps" onClick={createCreditNote}>
            Create
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
              Select the items to credit:
            </Text>
            <OrderItemsTableInCreateCredit
              orderId={Number(query.orderId)}
              items={orderITems}
              taxCodes={taxCodes?.taxCodes || []}
              loading={loading}
              totalItems={orderITems.length}
              triggerCreation={triggerCreation}
              setTriggerCreation={setTriggerCreation}
            />
          </Box>
        </>
      )}
    </>
  );
};

export default CreateCredit;
