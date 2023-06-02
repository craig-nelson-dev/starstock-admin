import { Select, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import {
  DslUser,
  DslUserListItem,
  reloadPage,
  RepositoryFactory,
  TablePage,
  useDataTable,
  Date,
} from 'dsl-admin-base';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';
const { Option } = Select;

const baseColumns: ColumnsType<DslUserListItem> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    sorter: true,
  },
  {
    title: 'name',
    dataIndex: 'id',
    key: 'id',
    sorter: true,
    render: (_: string, user: DslUserListItem) => {
      return (
        <Text>
          {user.firstName} {user.lastName}
        </Text>
      );
    },
  },
  {
    title: 'outlet',
    dataIndex: 'outlet',
    key: 'outlet',
    sorter: true,
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
    sorter: true,
  },
  {
    title: 'last login',
    dataIndex: 'lastLogin',
    key: 'lastLogin',
    sorter: true,
    render: (_: string, user: DslUserListItem) => {
      if (user.lastLogin) {
        return <Date value={user.lastLogin} />;
      }

      return null;
    },
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
    sorter: true,
    render: (_: string, user: DslUserListItem) => {
      const onChange = (value: string) => {
        RepositoryFactory.get('user').updateStatus(user.id, { status: value, notifyUser: true });
      };
      return (
        <Select
          defaultValue={user.status.displayName || 'Active'}
          style={{ width: 110 }}
          bordered={false}
          onChange={onChange}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Option value="A">Active</Option>
          <Option value="D">Disabled</Option>
        </Select>
      );
    },
  },
];

interface Props {
  users: DslUser[];
  totalItems: number;
  loading: boolean;
}

export const UsersTable: React.FC<Props> = ({ users, totalItems, loading }) => {
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
        storageKey: PAGES.USERS,
        type: 'Users',
        totalItems,
        qtySelected: selectedRowKeys.length,
        onClickBulk,
        showCount: true,
      }}
    >
      <Table<DslUser>
        className="clickable-row"
        onRow={onRow}
        onChange={onchange}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={users}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
      />
    </TablePage>
  );
};
