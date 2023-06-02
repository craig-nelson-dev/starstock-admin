import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import {
  Date,
  DslOutlet,
  OutletAddressBook,
  OutletDeliveryDay,
  OutletUser,
  reloadPage,
  TableItemLink,
  TablePage,
  useDataTable,
} from 'dsl-admin-base';
import _ from 'lodash';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';

const baseColumns: ColumnsType<DslOutlet> = [
  {
    title: 'account no',
    dataIndex: 'accountNumber',
    key: 'accountNumber',
    sorter: true,
  },
  {
    title: 'outlet id',
    dataIndex: 'id',
    key: 'id',
    sorter: true,
  },
  {
    title: 'outlet name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    render: (name: string, outlet: DslOutlet) => {
      return <TableItemLink label={name} id={outlet.id} />;
    },
  },
  {
    title: 'postcode',
    dataIndex: 'addressBook',
    key: 'sa_postcode',
    sorter: true,
    render: (addressBook: OutletAddressBook) => {
      const shippingAddress = addressBook.addresses?.find((o) => +o.id === addressBook.shippingId);
      return <Text>{shippingAddress?.postcode}</Text>;
    },
  },
  {
    title: 'primary user',
    dataIndex: 'outletUsers',
    key: 'outletUsers',
    render: (outletUsers: OutletUser[] | null) => {
      const user = outletUsers ? outletUsers[0] : null;
      return (
        <Text>
          {user?.user.firstName} {user?.user.lastName}
        </Text>
      );
    },
  },
  {
    title: 'style',
    dataIndex: 'style',
    key: 'style',
    sorter: true,
  },
  {
    title: 'delivery days',
    dataIndex: 'deliveryDays',
    key: 'deliveryDays',
    render: (deliveryDays: OutletDeliveryDay[] | null) => {
      const day = (deliveryDays || []).find((o) => o.type === 'standardDay');
      return <Text sx={{ textTransform: 'uppercase' }}>{day?.day}</Text>;
    },
  },
  {
    title: 'last ordered',
    dataIndex: 'lastOrdered',
    key: 'lastOrdered',
    render: (date: string) => {
      return <>{date && <Date value={date} />}</>;
    },
    sorter: true,
  },
  {
    title: 'date registered',
    dataIndex: 'createdOn',
    key: 'dateRegistered',
    render: (date: string) => {
      return <Date value={date} />;
    },
    sorter: true,
  },
  {
    title: 'Outlet status',
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

export const OutletsTable: React.FC<Props> = ({ outlets, totalItems, loading }) => {
  const { columns, selectedRowKeys, rowSelection, onchange } = useDataTable(baseColumns);

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
        storageKey: PAGES.OUTLETS,
        type: 'Outlets',
        totalItems,
        menu,
        qtySelected: selectedRowKeys.length,
        onClickBulk,
        showCount: true,
      }}
    >
      <Table<DslOutlet>
        onChange={onchange}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={outlets}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
      />
    </TablePage>
  );
};
