import React, { useState, useEffect } from 'react';
import { Input, Form, Row, Button } from 'antd';
import {
  SimpleSearch,
  RepositoryFactory,
  BreadcrumbItem,
  AppBreadcrumb,
  useFetchTableData,
  BrandOwner,
  getListingQuery,
} from 'dsl-admin-base';
import { BOTable } from 'components/pages/bo/BOTable';
import { Box, Text } from 'rebass';
import { SearchOutlined } from '@ant-design/icons';
import { PAGES } from 'utils/constant';
import Link from 'next/link';
import { useRouter } from 'next/router';

// const { Option } = Select;

// const statuses = [
//   { id: 1, displayName: 'Active' },
//   { id: 4, displayName: 'Disabled' },
// ];

export default function Index() {
  const router = useRouter();

  const params = getListingQuery(router.query);
  const [bo, setBo] = useState<BrandOwner[]>([]);
  const [total, setTotal] = useState(0);
  const { data, loading } = useFetchTableData(RepositoryFactory.get('bo').get, PAGES.BO, params);

  useEffect(() => {
    if (data?.brandOwners) {
      const filtered = data?.brandOwners.filter((b: any) => b) as BrandOwner[];
      setBo(filtered);
    }
    if (data?.totalCount) {
      setTotal(data?.totalCount);
    }
  }, [data]);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Brand Owner',
      href: '/bo',
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
      <SimpleSearch initialValues={{ status: 0, searchText: '' }}>
        <Form.Item name="searchText" label="&nbsp;">
          <Input style={{ width: 200 }} placeholder="SEARCH" prefix={<SearchOutlined />} />
        </Form.Item>
        {/* <Form.Item name="status" label="Brand Owner Status">
          <Select style={{ width: 200 }}>
            <Option value={0}>All</Option>
            {statuses.map((s) => (
              <Option key={s.id} value={s.id}>
                {s.displayName}
              </Option>
            ))}
          </Select>
        </Form.Item> */}
      </SimpleSearch>
      <Box variant="card">
        <BOTable items={bo} loading={loading} totalItems={total} />
      </Box>
    </Box>
  );
}
