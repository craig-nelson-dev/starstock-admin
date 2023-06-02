import { InvoiceTopBanner } from 'components/pages/invoices/InvoiceTopBanner';
import { InvoiceItemsPrint } from 'components/pages/invoices/InvoiceItems';
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
import { useMemo } from 'react';
import { Box, Flex } from 'rebass';
import { InvoiceOrderPromotion } from 'components/pages/invoices/InvoiceOrderPromotion';
import { InvoicePayment } from 'components/pages/invoices/InvoicePayment';
import { InvoiceTotal } from 'components/pages/invoices/InvoiceTotal';
import { InvoiceFooter } from 'components/pages/invoices/InvoiceFooter';

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Order',
    href: '/orders',
  },
];

const OrderRepository = RepositoryFactory.get('order');

const Invoice: React.FC = () => {
  const router = useRouter();
  const query = router.query;

  const { data, loading } = usePageData(
    () => OrderRepository.getOrderWithPromotion(Number(query.orderId)),
    ['id'],
    [],
  );

  const order = data?.order;

  const orderTitle = useMemo(() => `${order?.reference || ''}` || '', [order]);

  const breadcrumbsRender: BreadcrumbItem[] = useMemo(() => {
    return [
      ...breadcrumbs,
      {
        label: orderTitle,
        href: `/orders/${query.orderId}`,
      },
      {
        label: 'Invoice',
        href: '',
      },
    ];
  }, [orderTitle]);

  const orderItems = data ? data.items.concat(data.freeStockItems) : [];

  return (
    <>
      <Head>
        <title>
          Order: {order?.reference} - {order?.outletName}
        </title>
      </Head>

      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbsRender}></AppBreadcrumb>
      </Box>
      {loading ? (
        <AppSpin />
      ) : (
        <>
          <Flex flexDirection="column" pb={9} pt={4}>
            {data && <InvoiceTopBanner order={order as DslOrder} />}

            <Flex flexDirection="column">
              {data && <InvoiceItemsPrint items={orderItems} />}

              {data && order?.promotions?.length && <InvoiceOrderPromotion order={order} />}

              <Box width="100%" ml={0} mt={0} py={3}>
                <Flex flexDirection="row" justifyContent="space-between">
                  {data && <InvoicePayment order={order as DslOrder} />}
                  {data && (
                    <InvoiceTotal order={order as DslOrder} discountDetail={data.discountDetail} />
                  )}
                </Flex>
              </Box>
            </Flex>
            <InvoiceFooter />
          </Flex>
        </>
      )}
    </>
  );
};

export default Invoice;
