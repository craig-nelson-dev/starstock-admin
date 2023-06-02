import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DslOrder, TablePage, useDataTable, Date, OrderBody, TableItemLink } from 'dsl-admin-base';
import { PAGES } from 'utils/constant';
import { useMemo } from 'react';

interface POD extends OrderBody {
  reference: string;
  outletName: string;
  createdOn: string;
  parentId: number;
}

const baseColumns: ColumnsType<POD> = [
  {
    title: 'order id',
    dataIndex: 'reference',
    key: 'id',
    render: (ref: string, pod: POD) => {
      return <TableItemLink label={ref} id={pod.parentId} />;
    },
  },
  {
    title: 'pod date',
    dataIndex: 'actualDeliveryDate',
    key: 'delivered_date',
    sorter: true,
    render: (date: string) => {
      return date ? <Date value={date} /> : null;
    },
  },
  {
    title: 'order date',
    dataIndex: 'createdOn',
    key: 'created_on',
    sorter: true,
    render: (d) => {
      return d ? <Date value={d} /> : null;
    },
  },
  {
    title: 'outlet',
    dataIndex: 'outletName',
    key: 'outletName',
  },
];

interface Props {
  items: DslOrder[];
  totalItems: number;
  loading: boolean;
}

export const PODTable: React.FC<Props> = ({ items, totalItems, loading }) => {
  const { columns, onchange } = useDataTable(baseColumns);

  const podItems = useMemo(() => {
    const rs: POD[] = [];

    for (let order of items) {
      for (let orderBody of order.orderBody || []) {
        if (orderBody.actualDeliveryDate) {
          rs.push({
            reference: order.reference,
            outletName: order.outletName,
            createdOn: order.createdOn,
            parentId: order.id,
            ...orderBody,
          });
        }
      }
    }

    return rs;
  }, [items]);

  return (
    <TablePage
      pagination={{
        storageKey: PAGES.POD,
        type: PAGES.POD,
        totalItems,
      }}
    >
      <Table<POD>
        onChange={onchange}
        columns={columns}
        dataSource={podItems}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
      />
    </TablePage>
  );
};
