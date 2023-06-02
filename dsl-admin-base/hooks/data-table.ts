import { useRouter } from 'next/router';
import { useState } from 'react';
import { isSelection } from '../utils/helper';
import { Key } from 'antd/lib/table/interface';

export function useDataTable<T>(baseColumns: Array<T>, syncRoute: boolean = true) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const router = useRouter();
  const [sortConfig, setSortConfig] = useState({ sortBy: '', sortOrder: '' });
  const query = router.query;
  const { sortBy, sortOrder } = syncRoute ? query : sortConfig;

  const rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const clearSelectedRows = () => {
    setSelectedRowKeys([]);
  };

  const addSelectedRowsKey = (n: Key | Key[]) => {
    setSelectedRowKeys((prev) => [...prev.concat(Array.isArray(n) ? n : [n])]);
  };

  const onchange = (...args: Array<any>) => {
    const sort = args[2];
    if (sort.columnKey) {
      onSort({ sortBy: sort.columnKey, sortOrder: sort.order });
    }
  };

  const onSort = (sort: { sortBy: string; sortOrder: string }) => {
    if (sort.sortBy !== sortBy || sort.sortOrder !== sortOrder) {
      if (syncRoute) {
        router.push({
          pathname: router.pathname,
          query: { ...router.query, ...sort },
        });
      } else {
        setSortConfig(sort);
      }
    }
  };

  const columns = baseColumns.map((col: any) => {
    let rs = col;
    if (col.key && col.key === sortBy) {
      rs = {
        ...col,
        defaultSortOrder: sortOrder || false,
      };
    }

    return rs;
  });

  const onRow = (record: { id: number | string }) => {
    return {
      onClick: () => {
        if (!isSelection()) {
          router.push(`${router.pathname}/[id]`, `${router.pathname}/${record.id}`);
        }
      },
    };
  };

  return {
    onchange,
    columns,
    rowSelection,
    selectedRowKeys,
    onRow,
    sortConfig,
    clearSelectedRows,
    addSelectedRowsKey,
  };
}
