import { Text, Box } from 'rebass';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DeleteOutlined } from '@ant-design/icons';
import { Image, useDataTable, DslProduct } from 'dsl-admin-base';
import ImageIcon from 'assets/icons/image-solid.svg';

const baseColumns: ColumnsType<DslProduct> = [
  {
    title: 'Brand Owner',
    dataIndex: 'brandOwner',
    key: 'brandOwner',
    sorter: true,
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    sorter: true,
  },
  {
    title: 'Image',
    dataIndex: 'mainImage',
    key: 'image',
    render: (image: string) => {
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
          <Image
            src={image}
            style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'hidden' }}
          ></Image>
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
    render: (description: string) => {
      return <a>{description}</a>;
    },
  },
  {
    title: '',
    dataIndex: 'id',
    key: 'id',
    render: () => {
      return (
        <Text>
          <DeleteOutlined />
        </Text>
      );
    },
  },
];

interface Props {
  items: DslProduct[];
  totalItems: number;
  loading: boolean;
}

const ProductsTable: React.FC<Props> = ({ items, loading }) => {
  const { columns, rowSelection, onchange } = useDataTable(baseColumns);
  return (
    <Table<DslProduct>
      className="clickable-row"
      onChange={onchange}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={items}
      pagination={false}
      rowKey="id"
      loading={loading}
      showSorterTooltip={false}
    />
  );
};

export default ProductsTable;
