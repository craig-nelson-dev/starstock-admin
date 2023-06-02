import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import {
  Currency,
  DslOrder,
  OrderBody,
  TablePage,
  useDataTable,
  TableItemLink,
  Date,
} from 'dsl-admin-base';
import { useRouter } from 'next/router';
import { Text, Box } from 'rebass';
import { PAGES } from 'utils/constant';

const outerColumns: ColumnsType<DslOrder> = [
  {
    title: 'Order Reference',
    dataIndex: 'reference',
    key: 'reference',
    sorter: true,
    render: (d: string, order: DslOrder) => {
      return (
        <Box onClick={(e) => e.stopPropagation()}>
          <TableItemLink label={d} id={order.id} />
        </Box>
      );
    },
  },
  {
    title: 'outlet',
    dataIndex: 'outletName',
    key: 'outletName',
    sorter: true,
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'placed by',
    dataIndex: 'userName',
    key: 'userName',
    sorter: true,
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'date',
    dataIndex: 'createdOn',
    key: 'createdOn',
    render: (d) => {
      return <Date value={d} />;
    },
  },
  {
    title: 'amount paid',
    dataIndex: 'total',
    key: 'total',
    sorter: true,
    render: (d) => {
      return <Currency value={d} />;
    },
  },
];

const baseColumns: ColumnsType<DslOrder> = [
  {
    title: 'distributor',
    dataIndex: 'distributorName',
    key: 'distributorName',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'status',
    dataIndex: ['status', 'displayName'],
    key: 'status',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'amount paid',
    dataIndex: 'total',
    key: 'total',
    render: (d) => {
      return <Currency value={d} />;
    },
  },
];

interface Props {
  orders: DslOrder[];
  totalItems: number;
  loading: boolean;
}

export const OrdersTable: React.FC<Props> = ({ orders, totalItems, loading }) => {
  const router = useRouter();
  const onRowClick = (d: OrderBody, row: DslOrder) => ({
    onClick: () =>
      router.push(`${router.pathname}/[reference]/[id]`, `${router.pathname}/${row.id}/${d.id}`),
  });

  const { columns, selectedRowKeys, onchange } = useDataTable(baseColumns);

  const expandedRow = (row: DslOrder) => (
    <Table<OrderBody>
      columns={columns}
      dataSource={row.orderBody as OrderBody[]}
      rowKey="id"
      pagination={false}
      onRow={(d: OrderBody) => onRowClick(d, row)}
    />
  );

  return (
    <TablePage
      pagination={{
        storageKey: PAGES.ORDERS,
        type: 'Orders',
        totalItems,
        qtySelected: selectedRowKeys.length,
        showCount: true,
      }}
    >
      <Table<DslOrder>
        className="clickable-row"
        onChange={onchange}
        columns={outerColumns}
        dataSource={orders}
        pagination={false}
        loading={loading}
        showSorterTooltip={false}
        rowKey="reference"
        expandable={{
          defaultExpandAllRows: true,
          expandedRowRender: expandedRow,
          expandRowByClick: true,
        }}
      />
    </TablePage>
  );
};
