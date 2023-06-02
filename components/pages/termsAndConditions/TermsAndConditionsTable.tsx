import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { reloadPage, TablePage, useDataTable, Date, TermsConditions } from 'dsl-admin-base';
import { PAGES } from 'utils/constant';

interface Props {
  items: TermsConditions[];
  totalItems: number;
  loading: boolean;
}

export const TermsAndConditionsTable: React.FC<Props> = ({ items, totalItems, loading }) => {
  const baseColumns: ColumnsType<TermsConditions> = [
    {
      title: 'name',
      dataIndex: 'title',
      key: 'title',
      sorter: true,
    },
    {
      title: 'Published',
      dataIndex: 'createdOn',
      key: 'createdOn',
      sorter: true,
      render: (published) => {
        return <Date format={'DD/MM/YYYY hh:mm'} value={published} />;
      },
    },
  ];

  const { columns, selectedRowKeys, onRow, onchange } = useDataTable(baseColumns);

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
        type: 'Terms and Conditions',
        totalItems,
        qtySelected: selectedRowKeys.length,
        onClickBulk,
      }}
    >
      <Table<TermsConditions>
        onChange={onchange}
        columns={columns}
        dataSource={items}
        onRow={onRow}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
      />
    </TablePage>
  );
};
