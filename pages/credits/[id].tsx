import { OrderItemsTableInCredit } from 'components/pages/orders/CreditOrderItems';
import { CreditTopBanner } from 'components/pages/credits/CreditTopBanner';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  DslOrder,
  DslOrderItem,
  RepositoryFactory,
  usePageData,
  AppSpin,
  CreditNote,
} from 'dsl-admin-base';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Box } from 'rebass';

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Credits',
    href: '/credits',
  },
];

const OrderRepository = RepositoryFactory.get('order');
const CreditsRepository = RepositoryFactory.get('credits');

const CreateCredit: React.FC = () => {
  const router = useRouter();
  const query = router.query;
  const creditNoteId = Number(query.id);

  const { data: creditNoteData, loading: creditDataLoading } = usePageData(
    () => CreditsRepository.getById(creditNoteId),
    ['id'],
    [],
  );

  // if (creditNoteData?.orderId === undefined) return null;

  const { data: orderData, loading: orderDataLoading } = usePageData(
    () => OrderRepository.getOrderDetail(creditNoteData?.orderId),
    ['id'],
    [creditNoteData],
  );
  const orderTitle = useMemo(() => `${orderData?.reference || ''}` || '', [orderData]);

  const breadcrumbsRender: BreadcrumbItem[] = useMemo(() => {
    return [
      ...breadcrumbs,
      {
        label: orderTitle,
        href: `/credits/${creditNoteId}`,
      },
    ];
  }, [orderTitle]);

  const orderItems = useMemo(() => {
    let items: DslOrderItem[] = [];

    if (orderData?.orderBody) {
      for (let orderBody of orderData.orderBody) {
        items = items.concat(orderBody.orderItems || []);
      }
    }

    return items;
  }, [orderData]);

  const creditNoteItems = useMemo(() => {
    return creditNoteData?.items || [];
  }, [creditNoteData]);

  return (
    <>
      <Head>
        <title>
          Order: {orderData?.reference} - {orderData?.outletName}
        </title>
      </Head>

      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbsRender}></AppBreadcrumb>
      </Box>
      {creditDataLoading || orderDataLoading ? (
        <AppSpin />
      ) : (
        <>
          <CreditTopBanner
            creditNote={creditNoteData as CreditNote}
            order={orderData as DslOrder}
          />
          <Box variant="card" mt="4">
            {creditNoteData && (
              <OrderItemsTableInCredit
                orderId={creditNoteData.orderId}
                orders={orderItems}
                creditNoteItems={creditNoteItems}
                loading={orderDataLoading}
                totalItems={creditNoteData?.items?.length || 0}
              />
            )}
          </Box>
        </>
      )}
    </>
  );
};

export default CreateCredit;
