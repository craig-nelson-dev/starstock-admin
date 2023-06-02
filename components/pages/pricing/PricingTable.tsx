import { InputNumber, Select, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import {
  Currency,
  DslProduct,
  ProductStatus,
  reloadPage,
  RepositoryFactory,
  Status,
  TablePage,
  useDataTable,
} from 'dsl-admin-base';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';

const { Option } = Select;

const ProductRepository = RepositoryFactory.get('product');

const baseColumns: ColumnsType<DslProduct> = [
  {
    title: 'Brand Owner',
    dataIndex: 'bo',
    key: 'bo',
    sorter: true,
    render: () => {
      return <Text>Coca-Cola</Text>;
    },
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    sorter: true,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    render: (description: string) => {
      return <a>{description}</a>;
    },
  },
  {
    title: 'Input Price',
    dataIndex: ['price', 'subtotal'],
    key: 'price',
    sorter: true,
    render: (price: number) => {
      return <InputNumber value={price} />;
    },
  },
  {
    title: 'Fee',
    dataIndex: 'fee',
    key: 'fee',
    render: () => {
      return <Text>3%</Text>;
    },
  },
  {
    title: 'log charge type',
    dataIndex: 'logType',
    key: 'logType',
    render: () => {
      return (
        <Select defaultValue={1}>
          <Option value={1}>Keg charge</Option>
          <Option value={2}>Case charge</Option>
        </Select>
      );
    },
  },
  {
    title: 'logistic charge',
    dataIndex: 'logistic',
    key: 'logistic',
    render: () => {
      return <Currency value={50}></Currency>;
    },
  },
  {
    title: 'Sell Out Price',
    dataIndex: ['price', 'subtotal'],
    key: 'price',
    sorter: true,
    render: (price: number) => {
      return <InputNumber value={price} />;
    },
  },
  {
    title: 'Vat',
    dataIndex: 'vat',
    key: 'vat',
    render: () => {
      return <Text>20%</Text>;
    },
  },
  {
    title: 'customer price',
    dataIndex: 'logistic',
    key: 'logistic',
    render: () => {
      return <Currency value={1500}></Currency>;
    },
  },
  {
    title: 'Status',
    dataIndex: ['status'],
    sorter: true,
    key: 'status',
    render: (status: Status) => {
      return <ProductStatus status={status} />;
    },
  },
  {
    title: 'approved',
    dataIndex: 'vat',
    key: 'vat',
    render: () => {
      return <Text>Approved</Text>;
    },
  },
];

interface Props {
  products: DslProduct[];
  totalItems: number;
  loading: boolean;
}

export const PricingTable: React.FC<Props> = ({ products, totalItems, loading }) => {
  const { columns, selectedRowKeys, rowSelection, onchange } = useDataTable(baseColumns);

  const onClickBulk = async (key: string) => {
    if (key === 'delete') {
      await ProductRepository.deleteProducts(selectedRowKeys as string[]);
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
        storageKey: PAGES.PRODUCTS,
        type: 'Products',
        totalItems,
        menu,
        qtySelected: selectedRowKeys.length,
        onClickBulk,
      }}
    >
      <Table<DslProduct>
        className="clickable-row"
        onChange={onchange}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={products}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
      />
    </TablePage>
  );
};
