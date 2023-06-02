import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { UserOutlets } from 'dsl-admin-base/repositories/UserRepository';
import { useDataTable, DslOutlet, OutletAddressBook } from 'dsl-admin-base';
import { Text } from 'rebass';

const baseColumns: ColumnsType<UserOutlets> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: true,
  },
  {
    title: 'Outlets',
    dataIndex: 'name',
    key: 'id',
    sorter: true,
  },
  {
    title: 'Postcode',
    dataIndex: 'addressBook',
    key: 'postcode',
    sorter: true,
    render: (addressBook: OutletAddressBook) => {
      const shippingAddress = addressBook.addresses?.find((o) => +o.id === addressBook.shippingId);
      return <Text>{shippingAddress?.postcode}</Text>;
    },
  },
  {
    title: 'Status',
    dataIndex: ['status', 'displayName'],
    key: 'status',
    sorter: true,
  },
];

interface Props {
  outlets: DslOutlet[];
  totalItems: number;
  loading: boolean;
}

export const UserOutletsTable: React.FC<Props> = ({ outlets, loading }) => {
  const { columns, rowSelection, onchange } = useDataTable(baseColumns);

  return (
    <Table<DslOutlet>
      className="clickable-row"
      onChange={onchange}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={outlets}
      pagination={false}
      rowKey="id"
      loading={loading}
      showSorterTooltip={false}
    />
  );
};
