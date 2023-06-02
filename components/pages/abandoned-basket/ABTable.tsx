import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DslCart, reloadPage, TablePage, useDataTable } from 'dsl-admin-base';
import moment from 'moment';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';

const baseColumns: ColumnsType<DslCart> = [
  {
    title: 'Outlet ID',
    dataIndex: 'outlet',
    key: 'outletId',
    sorter: true,
    render: (outlet) => {
      return <Text>{outlet?.id}</Text>;
    },
  },
  {
    title: 'Outlet Name',
    dataIndex: 'outlet',
    key: 'outletName',
    sorter: true,
    render: (outlet) => {
      return <Text>{outlet?.name || 'N/A'}</Text>;
    },
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
    sorter: true,
    render: (user) => {
      return (
        <Text>{`${user?.firstName || ''} ${user?.middleName || ''} ${user?.lastName || ''}`}</Text>
      );
    },
  },
  {
    title: 'Created',
    dataIndex: 'createdOn',
    key: 'createdOn',
    sorter: true,
    render: (createdOn) => {
      return <Text>{moment(createdOn).format('DD/MM/YYYY')}</Text>;
    },
  },
  {
    title: 'Updated',
    dataIndex: 'updatedOn',
    key: 'updatedOn',
    sorter: true,
    render: (updatedOn) => {
      return <Text>{moment(updatedOn).format('DD/MM/YYYY')}</Text>;
    },
  },
  {
    title: 'Basket Content',
    dataIndex: 'totalProducts',
    key: 'totalProducts',
    sorter: true,
    render: (totalProducts) => {
      return <Text>{`${totalProducts} products`}</Text>;
    },
  },
];

interface Props {
  baskets: DslCart[];
  totalItems: number;
  loading: boolean;
}

export const AbandonedBasketTable: React.FC<Props> = ({ baskets, totalItems, loading }) => {
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
        storageKey: PAGES.ABANDONED_BASKET,
        type: 'Abandoned_Basket',
        totalItems,
        menu,
        qtySelected: selectedRowKeys.length,
        onClickBulk,
      }}
    >
      <Table<DslCart>
        className="clickable-row"
        onChange={onchange}
        onRow={onRow}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={baskets}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
      />
    </TablePage>
  );
};
