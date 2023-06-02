import React, { useMemo } from 'react';
import { Input, Form, Row, Button } from 'antd';
import {
  RepositoryFactory,
  SimpleSearch,
  BreadcrumbItem,
  useFetchTableData,
  AppBreadcrumb,
  usePageData,
  BrandOwner,
} from 'dsl-admin-base';
import PromotionsTable from 'components/pages/promotions/PromotionsTable';
import { VouchersTable } from 'components/pages/promotions/VouchersTable';
import { Box, Text } from 'rebass';
import { SearchOutlined } from '@ant-design/icons';
import { PAGES } from 'utils/constant';
import Link from 'next/link';
import { useRouter } from 'next/router';
import _ from 'lodash';

const PromotionRepository = RepositoryFactory.get('promotion');

export default function Index() {
  const router = useRouter();
  const { loading: loadingPromo, data } = useFetchTableData(
    PromotionRepository.get,
    PAGES.PROMOTIONS,
  );
  const isVoucherPage = router.pathname.startsWith('/vouchers');

  const { loading: loadingBrands, data: brands } = usePageData(() =>
    RepositoryFactory.get('bo').get({ page: 1, perPage: 1000, sortBy: 'name', sortOrder: 'asc' }),
  );

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: isVoucherPage ? 'vouchers' : 'Promotions',
      href: `/${PAGES.PROMOTIONS}`,
    },
  ];

  const items = useMemo(() => {
    let rs = data || [];

    if (isVoucherPage) {
      rs = rs.filter((o) => o.containsVoucherCode);
    } else {
      rs = rs.filter((o) => !o.containsVoucherCode);
    }

    return _.sortBy(rs, (o) => -o.id);
  }, [isVoucherPage, data]);

  const loading = loadingPromo || loadingBrands;
  const brandOwners = (brands?.brandOwners || []) as BrandOwner[];

  return (
    <Box>
      <Box>
        <Text variant="pageHeading">
          <Row>
            <Box>
              <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
            </Box>
          </Row>
          <Box>
            <Link href={`${router.pathname}/new`}>
              <Button type="primary" className="text-caps">
                Add NEW
              </Button>
            </Link>
          </Box>
        </Text>
      </Box>
      <SimpleSearch initialValues={{ bo: '' }}>
        <Form.Item name="searchText">
          <Box sx={{ width: 200 }}>
            <Input placeholder="Search" prefix={<SearchOutlined />} />
          </Box>
        </Form.Item>
      </SimpleSearch>
      <Box variant="card">
        {isVoucherPage ? (
          <VouchersTable
            promotions={items}
            loading={loading}
            totalItems={data?.length || 0}
            brandOwners={brandOwners}
          />
        ) : (
          <PromotionsTable
            promotions={items}
            loading={loading}
            totalItems={data?.length || 0}
            brandOwners={brandOwners}
          />
        )}
      </Box>
    </Box>
  );
}
