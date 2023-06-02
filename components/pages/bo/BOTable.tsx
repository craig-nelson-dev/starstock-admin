import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { BrandOwner, reloadPage, TablePage, useDataTable } from 'dsl-admin-base';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';

const baseColumns: ColumnsType<BrandOwner> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    sorter: true,
  },
  {
    title: 'brand owner',
    dataIndex: 'displayName',
    key: 'name',
    sorter: true,
    render: (_, r) => {
      return <Text>{r.displayName}</Text>;
    },
  },
  {
    title: 'date created',
    dataIndex: 'createdOn',
    key: 'createdOn',
    sorter: true,
    render: (createdOn) => {
      return <Text>{createdOn.split('T')[0].split('-').reverse().join('/')}</Text>;
    },
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
    sorter: true,
    render: (status) => {
      return <Text>{status.displayName}</Text>;
    },
  },
];

interface Props {
  items: BrandOwner[];
  totalItems: number;
  loading: boolean;
}

export const BOTable: React.FC<Props> = ({ items, totalItems, loading }) => {
  const { columns, selectedRowKeys, rowSelection, onchange, onRow } = useDataTable(baseColumns);

  const onClickBulk = async (key: string) => {
    if (key === 'delete') {
      //
    }

    reloadPage();
  };

  const menu = [
    {
      label: 'Delete Selected',
      value: 'delete',
    },
    {
      label: 'Edit Seleteced',
      value: 'edit',
    },
  ];

  return (
    <TablePage
      pagination={{
        storageKey: PAGES.BO,
        type: 'Brand Owners',
        totalItems,
        menu,
        qtySelected: selectedRowKeys.length,
        onClickBulk,
        showCount: true,
      }}
    >
      <Table<BrandOwner>
        className="clickable-row"
        onRow={onRow}
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
  );
};
