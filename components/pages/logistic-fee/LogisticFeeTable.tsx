import { DeleteOutlined } from '@ant-design/icons';
import { Modal, notification, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import {
  BulKDeleteActions,
  LogisticsFee,
  reloadPage,
  TableItemLink,
  TablePage,
  useBulkDeleteMutation,
  useDataTable,
} from 'dsl-admin-base';
import { useMemo, useState } from 'react';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';

interface Props {
  items: LogisticsFee[];
  totalItems: number;
  loading: boolean;
}

export const LogisticFeeTable: React.FC<Props> = ({ items, totalItems, loading }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentIds, setCurrentIds] = useState<number[]>();
  const [bulkDelete] = useBulkDeleteMutation();

  const onDelete = (ids: number[]) => {
    setCurrentIds(ids);
    setShowConfirm(true);
  };

  const baseColumns: ColumnsType<LogisticsFee> = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
      render: (name: string, item: LogisticsFee) => {
        return <TableItemLink label={name} id={item.id} />;
      },
    },
    {
      title: 'default fee',
      dataIndex: 'fee',
      key: 'fee',
      sorter: true,
    },
    {
      title: 'type',
      dataIndex: 'id',
      key: 'id',
      sorter: true,
      render: () => {
        return <Text>Per Litre Charge</Text>;
      },
    },
    {
      title: 'status',
      dataIndex: ['status', 'displayName'],
      key: 'status_id',
      sorter: true,
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (id: number) => {
        return (
          <Text sx={{ cursor: 'pointer', display: 'inline-block' }} onClick={() => onDelete([id])}>
            <DeleteOutlined />
          </Text>
        );
      },
    },
  ];

  const selectedItems = useMemo(() => {
    return items
      .filter((o) => currentIds?.includes(o.id))
      .map((o) => o.name)
      .join(', ');
  }, [items, currentIds]);

  const { columns, selectedRowKeys, rowSelection, onchange } = useDataTable(baseColumns);

  const performDelete = async () => {
    if (currentIds?.length) {
      setShowConfirm(false);

      try {
        await bulkDelete({
          variables: {
            input: {
              id: currentIds,
              action: BulKDeleteActions.LOGISTICS_FEE,
            },
          },
        });

        notification.success({
          message: 'Deleted',
          description: '',
        });

        reloadPage();
      } catch (e) {
        notification.error({
          message: 'Error',
          description: 'Error occurred',
        });
      }
    }
  };

  const onClickBulk = async (key: string) => {
    if (key === 'delete') {
      onDelete(selectedRowKeys as number[]);
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
        storageKey: PAGES.LOGISTIC_FEE,
        type: 'Logistics Fee',
        totalItems,
        menu,
        qtySelected: selectedRowKeys.length,
        onClickBulk,
      }}
    >
      <Table<LogisticsFee>
        onChange={onchange}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={items}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
      />
      <Modal
        title="Delete logistics fee confirmation"
        visible={showConfirm}
        onOk={performDelete}
        onCancel={() => setShowConfirm(false)}
        okText="Delete"
      >
        <p>Do you want to delete the following logistics fee ?</p>
        <Text>{selectedItems}</Text>
      </Modal>
    </TablePage>
  );
};
