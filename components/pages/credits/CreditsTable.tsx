import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import { TablePage, CreditNote, useDataTable, CreditNoteItem, Currency } from 'dsl-admin-base';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';
import { getCreditSummaryData } from '../orders/CreditSummary';

interface Props {
  items: CreditNote[];
  totalItems: number;
  loading: boolean;
}

export const CreditsTable: React.FC<Props> = ({ items, totalItems, loading }) => {
  const baseColumns: ColumnsType<CreditNote> = [
    {
      title: 'Credit Date',
      dataIndex: 'createdOn',
      key: 'createdOn',
      render: (createdOn: string) => {
        return <Text>{moment(createdOn).format('DD/MM/YYYY')}</Text>;
      },
    },
    {
      title: 'Credit Number',
      dataIndex: 'creditNumber',
      key: 'creditNumber',
    },
    {
      title: 'Order Number',
      dataIndex: 'orderReference',
      key: 'orderReference',
    },
    {
      title: 'Outlet',
      dataIndex: 'outletName',
      key: 'outletName',
    },
    {
      title: 'Credit Items',
      dataIndex: 'items',
      key: 'items',
      render: (items: CreditNoteItem[]) => {
        return <Text>{items?.length || 0}</Text>;
      },
    },
    {
      title: 'Credit Total (inc VAT)',
      dataIndex: 'total',
      key: 'total',
      render: (_, rec) => {
        const { creditAmountIncVat } = getCreditSummaryData(rec.items as CreditNoteItem[]);
        return <Currency value={creditAmountIncVat} />;
      },
    },
  ];

  const { columns, selectedRowKeys, rowSelection, onchange, onRow } = useDataTable(baseColumns);

  return (
    <TablePage
      pagination={{
        storageKey: PAGES.CREDITS,
        type: 'Credit Notes',
        totalItems,
        qtySelected: selectedRowKeys.length,
      }}
    >
      <Table<CreditNote>
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
