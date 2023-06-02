import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import {
  Currency,
  DslProduct,
  ProductAdminPricing,
  ProductStatus,
  reloadPage,
  RepositoryFactory,
  ShowOnHoverImage,
  Status,
  TablePage,
  useDataTable,
  calculatePrice,
  getCurrentPrice,
  DslCategory,
  TableItemLink,
} from 'dsl-admin-base';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';

const ProductRepository = RepositoryFactory.get('product');

const baseColumns: ColumnsType<DslProduct> = [
  {
    title: 'Brand Owner',
    dataIndex: 'associations',
    key: 'associations',
    sorter: true,
    render: (associations) => {
      return <Text>{associations?.vendor?.name || ''}</Text>;
    },
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    sorter: true,
  },
  {
    title: 'Image',
    dataIndex: ['mainImage', 'thumbnailPath'],
    key: 'image',
    render: (image: string) => {
      return <ShowOnHoverImage src={image} />;
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    render: (description: string, product: DslProduct) => {
      return <TableItemLink id={product.id} label={description} />;
    },
  },
  {
    title: 'Container Type',
    dataIndex: 'container',
    key: 'container',
    sorter: true,
    render: () => {
      return <Text>Bottle</Text>;
    },
  },
  {
    title: 'Input Price (ex vat)',
    dataIndex: 'adminPricing',
    key: 'adminPricing',
    sorter: true,
    width: '150px',
    render: (adminPricing: ProductAdminPricing) => {
      // Assume adminPricing/pricing has only one price
      const price = adminPricing?.pricing;
      return !price || !price?.length ? (
        ''
      ) : (
        <Currency value={price[0].inputPrice * 100}></Currency>
      );
    },
  },
  {
    width: '170px',
    title: 'Sell Out Price (ex vat)',
    dataIndex: 'adminPricing',
    key: 'adminPricing',
    sorter: true,
    render: (_, product: DslProduct) => {
      const currentPrice = getCurrentPrice(product);
      const price = currentPrice
        ? calculatePrice(
            currentPrice.inputPrice,
            currentPrice.starStockFee,
            currentPrice.logisticsFee,
          )
        : 0;
      return <Currency value={price * 100}></Currency>;
    },
  },
  {
    title: 'Category',
    dataIndex: 'categories',
    key: 'categories',
    sorter: true,
    render: (categories: DslCategory[] | null) => {
      const category =
        categories && categories.length ? categories[categories.length - 1].name : null;
      return <Text>{category}</Text>;
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: true,
    key: 'statusValue',
    render: (status: Status) => {
      return <ProductStatus status={status} />;
    },
  },
];

interface Props {
  products: DslProduct[];
  totalItems: number;
  loading: boolean;
}

const ProductsTable: React.FC<Props> = ({ products, totalItems, loading }) => {
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
        showCount: true,
      }}
    >
      <Table<DslProduct>
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

export default ProductsTable;
