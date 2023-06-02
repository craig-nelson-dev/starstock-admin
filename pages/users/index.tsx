import React from 'react';
import { Input, Select, Form } from 'antd';
import {
  SimpleSearch,
  RepositoryFactory,
  BreadcrumbItem,
  AppBreadcrumb,
  useFetchTableData,
  AdvancedSearch,
} from 'dsl-admin-base';
import { UsersTable } from 'components/pages/users/UsersTable';
import { Box, Text } from 'rebass';
import { SearchOutlined } from '@ant-design/icons';
import { PAGES } from 'utils/constant';
import UserSearchForm from 'components/pages/users/UserSearchForm';

const { Option } = Select;

const statuses = [
  { id: 0, displayName: 'Active' },
  { id: 3, displayName: 'Disabled' },
];

export default function Index() {
  const { loading, data } = useFetchTableData(RepositoryFactory.get('user').get, PAGES.USERS, {
    type: 'user',
  });

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Users',
      href: '/users',
    },
  ];

  return (
    <Box>
      <Box>
        <Text variant="pageHeading">
          <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        </Text>
      </Box>
      <SimpleSearch initialValues={{ status: -1 }}>
        <Form.Item name="searchText" label="&nbsp;">
          <Input style={{ width: 200 }} placeholder="SEARCH USERS" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select style={{ width: 200 }}>
            <Option value={-1}>All</Option>
            {statuses.map((s) => (
              <Option key={s.id} value={s.id}>
                {s.displayName}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </SimpleSearch>
      <Box variant="card">
        <UsersTable
          users={(data?.users || []) as any}
          loading={loading}
          totalItems={data?.totalCount || 0}
        />
      </Box>
      <AdvancedSearch repository={RepositoryFactory.get('user')} type="User">
        <UserSearchForm />
      </AdvancedSearch>
    </Box>
  );
}
