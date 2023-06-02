import { Table, Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DslProduct } from 'dsl-admin-base';
import { useDataTable } from 'dsl-admin-base/hooks/data-table';
import { Text, Box } from 'rebass';
import { TablePage } from 'dsl-admin-base/components/TablePage';
import { PAGES } from 'utils/constant';
import { ShowOnHoverImage } from 'dsl-admin-base/components/ShowOnHoverImage';
import { DeleteOutlined } from '@ant-design/icons';
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface Props {
  products: DslProduct[];
  totalItems: number;
  loading: boolean;
  actor: any; // function
}

const DslProductsTable: React.FC<Props> = ({ products, totalItems, loading, actor }) => {
  const baseColumns: ColumnsType<DslProduct> = [
    {
      title: 'Brand Owner',
      dataIndex: 'associations',
      key: 'associations',
      sorter: true,
      render: (associations) => <Text>{associations?.vendor?.name || 'Coca-Cola'}</Text>,
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
      render: (image: string) => <ShowOnHoverImage src={image} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
      render: (description: string) => <a>{description}</a>,
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (productId: number) => (
        <Box
          sx={{ display: 'inline-block', cursor: 'pointer', ':hover': { color: 'red' } }}
          onClick={() => {
            Modal.confirm({
              title: 'Are you sure you want to delete the selected items?',
              centered: true,
              icon: <ExclamationCircleOutlined />,
              onOk() {
                actor(products.filter(({ id }) => Number(id) !== productId));
              },
              onCancel() {},
            });
          }}
        >
          <DeleteOutlined />
        </Box>
      ),
    },
  ];
  const { columns, selectedRowKeys, rowSelection, onchange } = useDataTable(baseColumns);
  const onClickBulk = async (key: string) => {
    if (key === 'delete') {
      actor(products.filter(({ id }) => !selectedRowKeys.includes(id)));
    }
  };

  return (
    <TablePage
      pagination={{
        storageKey: PAGES.PRODUCTS,
        type: 'Products',
        totalItems,
        qtySelected: selectedRowKeys.length,
        onClickBulk,
        noPagination: true,
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

export default DslProductsTable;
