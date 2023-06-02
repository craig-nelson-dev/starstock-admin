import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Recommendation, reloadPage, TablePage, useDataTable, Date } from 'dsl-admin-base';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';

interface Props {
  items: Recommendation[];
  totalItems: number;
  loading: boolean;
}

export const RecommendationTable: React.FC<Props> = ({ items, totalItems, loading }) => {
  const baseColumns: ColumnsType<Recommendation> = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      sorter: true,
      render: (id: string) => {
        return <Text>{id}</Text>;
      },
    },
    {
      title: 'Brand Owner',
      dataIndex: ['brandOwner', 'displayName'],
      key: 'brand_owner',
      sorter: true,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: true,
      render: (title: string) => {
        return <Text>{title}</Text>;
      },
    },
    {
      title: 'Date Created',
      dataIndex: 'createdOn',
      key: 'created_on',
      sorter: true,
      render: (createdOn: string) => {
        return <Date value={createdOn} />;
      },
    },
    {
      title: 'Status',
      dataIndex: ['status', 'displayName'],
      key: 'status',
      sorter: true,
    },
    {
      title: 'Date Closed',
      dataIndex: 'closedOn',
      key: 'closed_on',
      sorter: true,
      render: (closedOn: string, record) => {
        return closedOn && record.status.id == '7' ? <Date value={closedOn} /> : <></>;
      },
    },
  ];

  const { columns, selectedRowKeys, rowSelection, onchange, onRow } = useDataTable(baseColumns);

  const onClickBulk = async (key: string) => {
    if (key === 'delete') {
      //
    }

    reloadPage();
  };

  return (
    <TablePage
      pagination={{
        storageKey: PAGES.TAXES,
        type: 'Tax Rate',
        totalItems,
        qtySelected: selectedRowKeys.length,
        onClickBulk,
      }}
    >
      <Table<Recommendation>
        onChange={onchange}
        rowSelection={rowSelection}
        columns={columns}
        onRow={onRow}
        dataSource={items}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
      />
    </TablePage>
  );
};
