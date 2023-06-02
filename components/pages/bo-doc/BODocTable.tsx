import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { reloadPage, SupportDocument, TablePage, useDataTable } from 'dsl-admin-base';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';

const baseColumns: ColumnsType<SupportDocument> = [
  {
    title: 'name',
    dataIndex: 'id',
    key: 'id',
    sorter: true,
    render: () => {
      return <Text>How to add a product</Text>;
    },
  },
  {
    title: 'url',
    dataIndex: 'shippingPostcode',
    key: 'shippingPostcode',
    sorter: true,
    render: () => {
      return (
        <Button
          type="link"
          href="http://test.com"
          target="_blank"
          onClick={(e) => e.stopPropagation()}
          style={{ padding: 0 }}
        >
          http://test.com
        </Button>
      );
    },
  },
];

interface Props {
  items: SupportDocument[];
  totalItems: number;
  loading: boolean;
}

export const BODocTable: React.FC<Props> = ({ items, totalItems, loading }) => {
  const { columns, selectedRowKeys, rowSelection, onchange, onRow } = useDataTable(baseColumns);

  const onClickBulk = async (key: string) => {
    if (key === 'delete') {
      //
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
        storageKey: PAGES.BO_DOC,
        type: 'Brand Owners',
        totalItems,
        menu,
        qtySelected: selectedRowKeys.length,
        onClickBulk,
      }}
    >
      <Table<SupportDocument>
        className="clickable-row"
        onRow={onRow}
        onChange={onchange}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={items}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
      />
    </TablePage>
  );
};
