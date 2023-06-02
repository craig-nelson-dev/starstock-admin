import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DslProduct, SimpleSearch, TablePage, useDataTable } from 'dsl-admin-base';
import React from 'react';
import { Box } from 'rebass';
import { PAGES } from 'utils/constant';
const { Option } = Select;

interface Props {
  closeModal: any;
  items: DslProduct[];
  loading: boolean;
}

const baseColumns: ColumnsType<DslProduct> = [
  {
    title: 'Brand Owner',
    dataIndex: 'brandOwner',
    key: 'brandOwner',
    sorter: true,
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    sorter: true,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    render: (description: string) => {
      return <a>{description}</a>;
    },
  },
  {
    title: '',
    dataIndex: 'id',
    key: 'id',
    render: () => {
      return <></>;
    },
  },
];

export const AddProductModalContent: React.FC<Props> = ({ closeModal, items, loading }) => {
  const { columns, rowSelection, onchange } = useDataTable(baseColumns);

  return (
    <Box>
      <SimpleSearch initialValues={{ status: 1 }}>
        <Form.Item name="searchText" label="Find Results with">
          <Input style={{ width: 150 }} placeholder="SEARCH" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select style={{ width: 100 }}>
            <Option value={1}>Active</Option>
            <Option value={2}>Disabled</Option>
          </Select>
        </Form.Item>
        <Form.Item name="brandOwner" label="Brand Owner">
          <Select style={{ width: 150 }}>
            <Option value={1}>All</Option>
          </Select>
        </Form.Item>
        <Form.Item name="searchInC" label="Search in Category">
          <Select style={{ width: 150 }}>
            <Option value={1}>All</Option>
          </Select>
        </Form.Item>
      </SimpleSearch>

      <Box my={4} />

      <TablePage
        pagination={{
          storageKey: PAGES.PRODUCTS,
          totalItems: 5,
        }}
      >
        <Table<DslProduct>
          className="clickable-row"
          onChange={onchange}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={items}
          pagination={false}
          rowKey="id"
          loading={loading}
          showSorterTooltip={false}
        />
      </TablePage>

      {/* Button Group */}
      <Box sx={{ justifyContent: 'flex-end', display: 'flex' }} mt={4}>
        <Box sx={{ mr: 2 }}>
          <Button type="default" onClick={closeModal} size="large">
            Cancel
          </Button>
        </Box>
        <Button type="primary" onClick={closeModal} size="large">
          Add Products
        </Button>
      </Box>
    </Box>
  );
};
