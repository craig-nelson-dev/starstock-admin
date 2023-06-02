import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ByOrderRows } from 'dsl-admin-base';
import moment from 'moment';
import { Text } from 'rebass';

const outerColumns: ColumnsType<ByOrderRows> = [
  {
    title: 'Account',
    dataIndex: 'accountNumber',
    key: 'accountNumber',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'outlet',
    dataIndex: 'outletName',
    key: 'outletName',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'Reference',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'date',
    dataIndex: 'orderDate',
    key: 'orderDate',
    render: (d) => {
      return <Text>{moment(d).format('DD/MM/YYYY HH:mm')}</Text>;
    },
  },
  {
    title: 'Delivery',
    dataIndex: 'deliveryDate',
    key: 'deliveryDate',
    render: (d) => {
      return <Text>{moment(d).format('DD/MM/YYYY HH:mm')}</Text>;
    },
  },
  {
    title: 'Brand',
    dataIndex: 'brandOwner',
    key: 'brandOwner',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'Code',
    dataIndex: 'productCode',
    key: 'productCode',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'Product',
    dataIndex: 'productName',
    key: 'productName',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'Input Price',
    dataIndex: 'inputPrice',
    key: 'inputPrice',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'Platform Fee',
    dataIndex: 'platformFee',
    key: 'platformFee',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'Logistics Fee',
    dataIndex: 'logisticsFee',
    key: 'logisticsFee',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'Line Total',
    dataIndex: 'lineTotal',
    key: 'lineTotal',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'Input Total',
    dataIndex: 'inputTotal',
    key: 'inputTotal',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'Platform Total',
    dataIndex: 'platformTotal',
    key: 'platformTotal',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
  {
    title: 'Logistics Total',
    dataIndex: 'logisticsTotal',
    key: 'logisticsTotal',
    render: (d) => {
      return <Text>{d}</Text>;
    },
  },
];

interface Props {
  orders: ByOrderRows[];
  loading: boolean;
}

export const SalesByOrderTable: React.FC<Props> = ({ orders, loading }) => {
  return (
    <Table<ByOrderRows>
      columns={outerColumns}
      dataSource={orders}
      pagination={false}
      loading={loading}
      showSorterTooltip={false}
      rowKey="reference"
    />
  );
};
