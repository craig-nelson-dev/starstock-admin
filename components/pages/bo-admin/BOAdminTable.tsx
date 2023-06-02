import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DslUser, reloadPage, TablePage, useDataTable } from 'dsl-admin-base';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';

const baseColumns: ColumnsType<DslUser> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    sorter: true,
  },
  {
    title: 'brand owner',
    dataIndex: 'brand',
    key: 'brand',
    sorter: true,
    render: (bo) => {
      return <Text>{bo?.displayName}</Text>;
    },
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    render: (_, record) => {
      return (
        <Text>
          {record.firstName} {record.lastName}
        </Text>
      );
    },
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
    sorter: true,
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
  users: DslUser[];
  totalItems: number;
  loading: boolean;
  hideBrandOwnerColumn?: boolean;
}

export const BOAdminTable: React.FC<Props> = ({
  users,
  totalItems,
  loading,
  hideBrandOwnerColumn,
}) => {
  const { columns, selectedRowKeys, rowSelection, onchange, onRow } = useDataTable(baseColumns);

  const onClickBulk = async (key: string) => {
    if (key === 'delete') {
      //
    }

    reloadPage();
  };

  return (
    <TablePage
      pagination={{
        storageKey: PAGES.BO_ADMIN,
        type: 'BO Admins',
        totalItems,
        qtySelected: selectedRowKeys.length,
        onClickBulk,
      }}
    >
      <Table<DslUser>
        className="clickable-row"
        onRow={onRow}
        onChange={onchange}
        rowSelection={rowSelection}
        columns={columns.filter((c) => (hideBrandOwnerColumn === true ? c.key != 'brand' : true))}
        dataSource={users}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
      />
    </TablePage>
  );
};
