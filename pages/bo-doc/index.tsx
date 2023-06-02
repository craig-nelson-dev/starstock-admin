import React from 'react';
import { Input, Form } from 'antd';
import {
  SimpleSearch,
  RepositoryFactory,
  BreadcrumbItem,
  AppBreadcrumb,
  useFetchTableData,
  SupportDocument,
} from 'dsl-admin-base';
import { BODocTable } from 'components/pages/bo-doc/BODocTable';
import { Box, Text } from 'rebass';
import { SearchOutlined } from '@ant-design/icons';
import { PAGES } from 'utils/constant';

export default function Index() {
  const { loading, data } = useFetchTableData(RepositoryFactory.get('boDoc').get, PAGES.BO_DOC);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Support Documents',
      href: '/bo-doc',
    },
  ];

  return (
    <Box>
      <Box>
        <Text variant="pageHeading">
          <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        </Text>
      </Box>
      <SimpleSearch initialValues={{ status: 0 }}>
        <Form.Item name="searchText" label="&nbsp;">
          <Input style={{ width: 200 }} placeholder="SEARCH" prefix={<SearchOutlined />} />
        </Form.Item>
      </SimpleSearch>
      <Box variant="card">
        <BODocTable
          items={(data?.documents || []) as SupportDocument[]}
          loading={loading}
          totalItems={data?.totalCount || 0}
        />
      </Box>
    </Box>
  );
}
