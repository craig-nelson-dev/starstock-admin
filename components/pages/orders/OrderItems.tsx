import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Currency, DslOrderItemExtended, useDataTable } from 'dsl-admin-base';
import { Image, Text, Box } from 'rebass';
import _ from 'lodash';

const baseColumns: ColumnsType<DslOrderItemExtended> = [
  {
    title: 'code',
    dataIndex: 'code',
    key: 'code',
    render: (code) => <Text variant="caps">{code}</Text>,
  },
  {
    title: 'Image',
    dataIndex: 'mainImage',
    key: 'mainImage',
    render: (_, orderItem) => {
      return (
        <Image variant="orderItemImage" src={orderItem.mainImage || ''} alt="order-item-img" />
      );
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name) => <Text>{name}</Text>,
  },
  {
    title: 'Unit Price',
    dataIndex: 'price',
    key: 'price',
    render: (_, orderItem) => {
      if (orderItem.discount) {
        return (
          <Box>
            <Text sx={{ mb: 1, textDecoration: 'line-through' }}>
              <Currency value={orderItem.price} />
            </Text>
            <Currency value={orderItem.discount.unitPrice} />
          </Box>
        );
      }

      return <Currency value={orderItem.price} />;
    },
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Line total',
    dataIndex: 'total',
    render: (_, orderItem) => {
      if (orderItem.discount) {
        return (
          <Box>
            <Text sx={{ mb: 1, textDecoration: 'line-through' }}>
              <Currency value={orderItem.price * orderItem.qty} />
            </Text>
            <Currency value={orderItem.discount.totalPrice} />
          </Box>
        );
      }

      return <Currency value={orderItem.price * orderItem.qty} />;
    },
  },
  {
    title: 'vat',
    dataIndex: 'totalTax',
    key: 'totalTax',
    render: (totalTax) => {
      return <Currency value={totalTax} />;
    },
  },
  {
    title: 'Line total inc vat',
    dataIndex: 'total',
    key: 'total',
    render: (_, orderItem) => {
      if (orderItem.discount) {
        return (
          <Box>
            <Text sx={{ mb: 1, textDecoration: 'line-through' }}>
              <Currency value={orderItem.total} />
            </Text>
            <Currency value={orderItem.discount.totalPrice + orderItem.discount.totalTax} />
          </Box>
        );
      }

      return <Currency value={orderItem.total} />;
    },
  },
];

interface Props {
  items: DslOrderItemExtended[];
  loading: boolean;
}

export const OrderItemsTable: React.FC<Props> = ({ items, loading }) => {
  const { columns, onchange } = useDataTable(baseColumns);

  return (
    <Table<DslOrderItemExtended>
      className="clickable-row"
      onChange={onchange}
      columns={columns}
      dataSource={items}
      pagination={false}
      rowKey="id"
      loading={loading}
      showSorterTooltip={false}
    />
  );
};
