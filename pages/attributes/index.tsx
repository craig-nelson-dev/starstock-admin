import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Select } from 'antd';
import AttributesTable from 'components/pages/attributes/AttributesTable';
import {
  AppBreadcrumb,
  BreadcrumbItem,
  DslProductFeature,
  RepositoryFactory,
  SimpleSearch,
  useFetchTableData,
} from 'dsl-admin-base';
import { OptionItem } from 'models/option';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Box, Text } from 'rebass';
import { ATTRIBUTE_DISPLAY, ATTRIBUTE_STATUSES, PAGES } from 'utils/constant';

const { Option } = Select;
const statusOptions = [
  {
    label: 'Status',
    value: '',
  },
  ...ATTRIBUTE_STATUSES,
];
const displayOptions = [...ATTRIBUTE_DISPLAY];

export default function Index() {
  const router = useRouter();

  const { loading, data } = useFetchTableData(
    RepositoryFactory.get('attribute').get,
    PAGES.ATTRIBUTES,
  );

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Attributes',
      href: `/${PAGES.ATTRIBUTES}`,
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
                Add Attribute
              </Button>
            </Link>
          </Box>
        </Text>
      </Box>
      <SimpleSearch initialValues={{ attribute: undefined, status: '', display: 'all' }}>
        <Form.Item name="searchText" label="&nbsp;">
          <Input style={{ width: 200 }} placeholder="Search" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select style={{ width: 200 }}>
            {statusOptions.map((status: OptionItem) => {
              return (
                <Option value={status.value as string} key={status.value as string}>
                  {status.label}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item name="display" label="Display">
          <Select style={{ width: 200 }}>
            {displayOptions.map((status: OptionItem) => {
              return (
                <Option value={status.value?.toString() as string} key={status.value as string}>
                  {status.label}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
      </SimpleSearch>
      <Box variant="card">
        <AttributesTable
          attributes={(data?.features as DslProductFeature[]) || []}
          loading={loading}
          totalItems={data?.totalCount || 1}
        />
      </Box>
    </Box>
  );
}
