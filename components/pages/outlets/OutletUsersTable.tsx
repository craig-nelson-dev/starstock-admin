import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useDataTable, DslUser } from 'dsl-admin-base';
import { Text } from 'rebass';

const baseColumns: ColumnsType<DslUser> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: true,
  },
  {
    title: 'Name',
    dataIndex: 'firstName',
    key: 'id',
    sorter: true,
    render: (firstName: string, user: DslUser) => {
      return (
        <Text>
          {firstName} {user.lastName}
        </Text>
      );
    },
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sorter: true,
  },
  {
    title: 'Status',
    dataIndex: ['status', 'displayName'],
    key: 'status',
    sorter: true,
  },
];

interface Props {
  users: DslUser[];
}

export const OutletUsersTable: React.FC<Props> = ({ users }) => {
  const { columns, onchange } = useDataTable(baseColumns);

  return (
    <Table<DslUser>
      onChange={onchange}
      columns={columns}
      dataSource={users}
      pagination={false}
      rowKey="id"
      showSorterTooltip={false}
    />
  );
};
