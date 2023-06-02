import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import ImageIcon from 'assets/icons/image-solid.svg';
import { DslProduct, reloadPage, RepositoryFactory, TablePage, useDataTable } from 'dsl-admin-base';
import { useEffect } from 'react';
import { Box, Text } from 'rebass';
import { PAGES } from 'utils/constant';

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
    dataIndex: 'id',
    key: 'id',
    sorter: true,
    render: (id) => <Text>CC{id}</Text>,
  },
  {
    title: 'Image',
    dataIndex: ['mainImage', 'thumbnailPath'],
    key: 'image',
    render: (_: string) => {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 100,
            img: { display: 'none' },
            ':hover': { img: { display: 'block' }, svg: { display: 'none' } },
          }}
        >
          <ImageIcon width={30} height={30} />
        </Box>
      );
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    render: (_: string) => {
      return <Text>Coca Cola Glass NRB 330ml x24</Text>;
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
    title: 'Unit Size',
    dataIndex: 'unit',
    key: 'Unit',
    sorter: true,
    render: () => {
      return <span>70cl</span>;
    },
  },
  {
    title: 'Approval',
    dataIndex: 'approval',
    sorter: true,
    key: 'approval',
    render: (_: string) => {
      return <Text>Approval</Text>;
    },
  },
];

interface Props {
  products: DslProduct[];
  totalItems: number;
  loading: boolean;
  onSelectRowKeys(ids: number[]): void;
}

const ProductsApproval: React.FC<Props> = ({ products, totalItems, loading, onSelectRowKeys }) => {
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

  useEffect(() => {
    onSelectRowKeys(rowSelection.selectedRowKeys as number[]);
  }, [onSelectRowKeys, rowSelection.selectedRowKeys]);

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

export default ProductsApproval;
