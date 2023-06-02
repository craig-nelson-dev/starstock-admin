import { Table, notification } from 'antd';
import { ColumnsType } from 'antd/es/table';
import {
  useDataTable,
  TablePage,
  TableItemLink,
  Status,
  useBulkDeleteMutation,
  reloadPage,
  BulKDeleteActions,
  DslProductFeature,
} from 'dsl-admin-base';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';

const baseColumns: ColumnsType<DslProductFeature> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    render: (name: string, item: DslProductFeature) => {
      return <TableItemLink label={name} id={item.id} />;
    },
  },
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
    align: 'center',
    sorter: true,
    render: (pos: string) => {
      return <Text textAlign="center">{pos}</Text>;
    },
  },
  {
    title: 'Display',
    dataIndex: 'display',
    key: 'storefront_display',
    align: 'center',
    sorter: true,
    render: (_, record) => {
      return <Text textAlign="center">{record.storeFrontDisplay ? 'Y' : 'N'}</Text>;
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: true,
    key: 'status',
    render: (status: Status) => {
      return status?.displayName;
    },
  },
];

interface Props {
  attributes: DslProductFeature[];
  totalItems: number;
  loading: boolean;
}

const AttributesTable: React.FC<Props> = ({ attributes, totalItems, loading }) => {
  const { columns, selectedRowKeys, rowSelection, onchange } = useDataTable(baseColumns);
  const [bulkDelete] = useBulkDeleteMutation();

  const onClickBulk = async (key: string) => {
    if (key === 'delete') {
      await deleteItems();
    }

    reloadPage();
  };

  const deleteItems = async () => {
    try {
      await bulkDelete({
        variables: {
          input: {
            action: BulKDeleteActions.PRODUCT_FEATURES,
            id: selectedRowKeys as number[],
          },
        },
      });
    } catch (e) {
      notification.error({ message: 'Error occured!' });
    }
  };

  const menu = [
    {
      label: 'Delete Selected',
      value: 'delete',
    },
  ];

  return (
    <TablePage
      pagination={{
        storageKey: PAGES.ATTRIBUTES,
        type: 'Attributes',
        totalItems,
        qtySelected: selectedRowKeys.length,
        menu,
        onClickBulk,
      }}
    >
      <Table<DslProductFeature>
        onChange={onchange}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={attributes}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
        expandIconColumnIndex={4}
      />
    </TablePage>
  );
};

export default AttributesTable;
