import { Button } from 'antd';
import { AdGroupTable } from 'components/pages/content/AdGroupTable';
import {
  AdGroup,
  AppBreadcrumb,
  BreadcrumbItem,
  getListingQuery,
  PAGES,
  RepositoryFactory,
  useFetchTableData,
} from 'dsl-admin-base';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Box, Text } from 'rebass';

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Banners & Ads',
    href: '/banners-ads',
  },
];

export const BannersAds: React.FC = () => {
  const router = useRouter();
  const params = getListingQuery(router.query);

  const { data: { groups = [], totalCount = 0 } = {}, loading } = useFetchTableData(
    RepositoryFactory.get('content').getAdGroups,
    PAGES.BO,
    params,
  );

  return (
    <>
      <Head>
        <title>Banners &amp; Ads</title>
      </Head>
      <Box>
        <Box>
          <Text variant="pageHeading">
            <AppBreadcrumb items={breadcrumbs} />
            <Box>
              <Link href={`${router.pathname}/new`}>
                <Button type="primary" className="text-caps" style={{ padding: '4px 24px' }}>
                  <Text letterSpacing="0.5px">Add New</Text>
                </Button>
              </Link>
            </Box>
          </Text>
        </Box>

        <Box variant="card">
          <AdGroupTable
            items={(groups as AdGroup[]) || []}
            totalItems={totalCount as number}
            loading={loading}
          />
        </Box>
      </Box>
    </>
  );
};

export default BannersAds;
