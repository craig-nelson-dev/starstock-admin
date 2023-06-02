import React from 'react';
import { Input, Form, Button, Select } from 'antd';
import {
  SimpleSearch,
  BreadcrumbItem,
  AppBreadcrumb,
  useFetchTableData,
  RepositoryFactory,
  PAGES,
  Recommendation,
  getListingQuery,
} from 'dsl-admin-base';
import { Box, Text } from 'rebass';
import { SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { RecommendationTable } from 'components/pages/recommendations/RecommendationsTable';
import { useRouter } from 'next/router';

const { Option } = Select;

const statuses = [
  { id: 0, displayName: 'Active' },
  { id: 6, displayName: 'Closed' },
];

const parseQuery = (params: any) => {
  const { pagination, sort, search, ...rest } = params;
  return {
    search,
    pagination,
    sort: {
      by: sort?.by || 'createdOn',
      direction: sort?.direction,
    },
    filters: { ...rest },
  };
};

export default function Index() {
  const router = useRouter();
  const params = parseQuery(getListingQuery(router.query));

  const boReq = useFetchTableData(RepositoryFactory.get('bo').get, PAGES.BO, {
    perPage: 1000,
    status: 1,
  });
  const recommendationsReq = useFetchTableData(
    RepositoryFactory.get('recomendations').get,
    PAGES.RECOMMENDATIONS,
    params,
  );

  const loading = false;

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Messages',
      href: '/tax',
    },
  ];

  return (
    <Box>
      <Box>
        <Text variant="pageHeading">
          <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
          <Link href="/recommendations/new">
            <Button type="primary" className="text-caps">
              Add Message
            </Button>
          </Link>
        </Text>
      </Box>
      <SimpleSearch initialValues={{ status: -1, brandOwner: '0' }} advanceSearch={false}>
        <Form.Item name="search" label="&nbsp;">
          <Input style={{ width: 200 }} placeholder="SEARCH" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item name="brandOwner" label="Brand Owner">
          <Select style={{ width: 150 }}>
            <Option value={'0'}>All</Option>
            {(boReq.data?.brandOwners || [])
              .sort((a, b) => {
                const strA: string = a?.displayName as string;
                const strB: string = b?.displayName as string;

                return strA.localeCompare(strB);
              })
              .filter((bo) => bo?.id.toString() != '2')
              .map((o) => {
                if (!o) return <></>;
                return <Option value={o.id}>{o.displayName}</Option>;
              })}
          </Select>
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select style={{ width: 200 }}>
            <Option value={-1}>All</Option>
            {statuses.map((s) => (
              <Option value={s.id}>{s.displayName}</Option>
            ))}
          </Select>
        </Form.Item>
      </SimpleSearch>
      <Box variant="card">
        <RecommendationTable
          items={(recommendationsReq.data?.recommendations as Recommendation[]) || []}
          loading={loading}
          totalItems={recommendationsReq.data?.totalCount || 0}
        />
      </Box>
    </Box>
  );
}
