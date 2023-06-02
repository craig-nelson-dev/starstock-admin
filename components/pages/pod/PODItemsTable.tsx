import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DeliveredOrderItem } from 'dsl-admin-base';
import { PODCodes } from './pod-codes';

const baseColumns: ColumnsType<DeliveredOrderItem> = [
  {
    title: 'code',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'order qty',
    dataIndex: 'qtyOrdered',
    key: 'qtyOrdered',
  },
  {
    title: 'received qty',
    dataIndex: 'qtyDelivered',
    key: 'qtyDelivered',
  },
  {
    title: 'reason',
    dataIndex: 'rejectionCode',
    key: 'rejectionCode',
    render: (code: string) => {
      const message = PODCodes.find((o) => o.code === code)?.description;
      return <span>{message}</span>;
    },
  },
];

interface Props {
  items: DeliveredOrderItem[];
}

export const PODItemsTable: React.FC<Props> = ({ items }) => {
  return (
    <Table<DeliveredOrderItem>
      columns={baseColumns}
      dataSource={items}
      pagination={false}
      rowKey="reference"
    />
  );
};
