import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { AdGroup, BrandOwner, TableItemLink, TablePage, useDataTable } from 'dsl-admin-base';
import React from 'react';
import { PAGES } from 'utils/constant';

const baseColumns: ColumnsType<BrandOwner> = [
  {
    title: 'Group Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    render: (group: string) => <TableItemLink label={group} id={encodeURIComponent(group)} />,
  },
  {
    title: 'Ad Count',
    dataIndex: 'adCount',
    key: 'adCount',
    sorter: false,
  },
];

interface Props {
  items: AdGroup[];
  totalItems: number;
  loading: boolean;
}

export const AdGroupTable: React.FC<Props> = ({ items, totalItems, loading }) => {
  const { columns, selectedRowKeys, rowSelection, onchange } = useDataTable(baseColumns);

  return (
    <TablePage
      pagination={{
        storageKey: PAGES.BANNERS_ADS,
        type: 'Brand Owners',
        totalItems,
        qtySelected: selectedRowKeys.length,
      }}
    >
      <Table<AdGroup>
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
    </TablePage>
  );
};
