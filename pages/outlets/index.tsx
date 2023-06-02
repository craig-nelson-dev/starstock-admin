import React from 'react';
import { Input, Select, Form } from 'antd';
import {
  SimpleSearch,
  RepositoryFactory,
  BreadcrumbItem,
  OutletStatuses,
  OutletStyles,
  useFetchTableData,
  AppBreadcrumb,
} from 'dsl-admin-base';
import { OutletsTable } from 'components/pages/outlets/OutletsTable';
import { Box, Text } from 'rebass';
import { SearchOutlined } from '@ant-design/icons';
import { PAGES } from 'utils/constant';

const { Option } = Select;

const OutletStylesOptions = [
  {
    label: 'All',
    value: '',
  },
  ...OutletStyles,
];

export default function Index() {
  const { loading, data } = useFetchTableData(RepositoryFactory.get('outlet').get, PAGES.OUTLETS);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Outlets',
      href: '/outlets',
    },
  ];

  return (
    <Box>
      <Box>
        <Text variant="pageHeading">
          <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
        </Text>
      </Box>
      <SimpleSearch initialValues={{ status: '', style: '' }}>
        <Form.Item name="search" label="&nbsp;">
          <Input style={{ width: 200 }} placeholder="SEARCH OUTLETS" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item name="status" label="Outlet Status">
          <Select style={{ width: 200 }}>
            {[
              {
                label: 'All Statuses',
                value: '',
              },
              ...OutletStatuses,
            ].map((status) => {
              return (
                <Option key={status.label} value={status.value}>
                  {status.label}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item name="style" label="Outlet Style">
          <Select style={{ width: 200 }}>
            {OutletStylesOptions.map((style) => {
              return (
                <Option key={style.value} value={style.value}>
                  {style.label}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
      </SimpleSearch>
      <Box variant="card">
        <OutletsTable
          outlets={data?.outlets || []}
          loading={loading}
          totalItems={data?.totalCount || 0}
        />
      </Box>
    </Box>
  );
}
