import { PODTopBanner } from 'components/pages/pod/PODTopBanner';
import { PODItemsTable } from 'components/pages/pod/PODItemsTable';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  DslOrder,
  RepositoryFactory,
  usePageData,
  AppSpin,
} from 'dsl-admin-base';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Box } from 'rebass';

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: 'pod',
    href: '/pod',
  },
];

const PODDetails: React.FC = () => {
  const router = useRouter();
  const query = router.query;

  const { data, loading } = usePageData(
    () => RepositoryFactory.get('order').getOrderDetail(Number(query.orderId)),
    ['id'],
    [],
  );

  const breadcrumbItems: BreadcrumbItem[] = useMemo(() => {
    return [
      ...breadcrumbs,
      {
        label: data ? `Order ${data.reference || ''} - ${data.outletName}` : '',
        href: '',
      },
    ];
  }, [data]);

  const podItems = useMemo(() => {
    return data?.orderBody?.find((o) => o.actualDeliveryDate)?.deliveredItems || [];
  }, [data]);

  return (
    <>
      <Box variant="breadcrumbHeader">
        <AppBreadcrumb items={breadcrumbItems}></AppBreadcrumb>
      </Box>
      {loading ? (
        <AppSpin />
      ) : (
        <>
          <PODTopBanner order={data as DslOrder} />
          <Box sx={{ pt: 5, pb: 3 }}>POD items:</Box>
          <PODItemsTable items={podItems} />
        </>
      )}
    </>
  );
};

export default PODDetails;
