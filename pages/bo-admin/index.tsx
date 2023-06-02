import React from 'react';
import { Input, Select, Form, Row, Button } from 'antd';
import {
  SimpleSearch,
  RepositoryFactory,
  BreadcrumbItem,
  useFetchTableData,
  AppBreadcrumb,
} from 'dsl-admin-base';
import { BOAdminTable } from 'components/pages/bo-admin/BOAdminTable';
import { Box, Text } from 'rebass';
import Link from 'next/link';
import { SearchOutlined } from '@ant-design/icons';
import { PAGES } from 'utils/constant';
import { useRouter } from 'next/router';

const { Option } = Select;

const statuses = [
  { id: 0, displayName: 'Active' },
  { id: 3, displayName: 'Disabled' },
];

export default function Index() {
  const router = useRouter();
  const { loading, data } = useFetchTableData(RepositoryFactory.get('user').get, PAGES.BO_ADMIN, {
    type: 'brandowner',
  });
  const boReq = useFetchTableData(RepositoryFactory.get('bo').get, PAGES.BO, { perPage: 1000 });

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Brand Owner',
      href: '/bo',
    },
    {
      label: 'Administrators',
      href: '/bo-admin',
    },
  ];

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
      <SimpleSearch initialValues={{ status: -1, brandOwnerId: 0 }}>
        <Form.Item name="searchText" label="&nbsp;">
          <Input style={{ width: 200 }} placeholder="SEARCH" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item name="brandOwnerId" label="Brand Owner">
          <Select style={{ width: 150 }}>
            <Option value={0}>All</Option>
            {(boReq.data?.brandOwners || []).map((o) => {
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
        <BOAdminTable
          users={(data?.users || []) as any}
          loading={loading}
          totalItems={data?.totalCount || 5}
        />
      </Box>
    </Box>
  );
}
