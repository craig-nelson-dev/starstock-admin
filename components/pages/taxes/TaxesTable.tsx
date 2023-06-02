import { DeleteOutlined } from '@ant-design/icons';
import { Modal, notification, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import {
  reloadPage,
  TableItemLink,
  TablePage,
  TaxCode,
  useDataTable,
  useDeleteTaxCodeByIdMutation,
} from 'dsl-admin-base';
import { useState } from 'react';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';

interface Props {
  items: TaxCode[];
  totalItems: number;
  loading: boolean;
}

export const TaxesTable: React.FC<Props> = ({ items, totalItems, loading }) => {
  const [deleteTaxCode] = useDeleteTaxCodeByIdMutation();
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentId, setCurrentId] = useState<number>();

  const onDeleteTaxCode = (id: number) => {
    setCurrentId(id);
    setShowConfirm(true);
  };

  const performDelete = async () => {
    if (currentId) {
      setShowConfirm(false);

      try {
        await deleteTaxCode({
          variables: { id: currentId },
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

  const baseColumns: ColumnsType<TaxCode> = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
      render: (name: string, item: TaxCode) => {
        return <TableItemLink label={name} id={item.id} />;
      },
    },
    {
      title: 'Tax rate',
      dataIndex: 'rate',
      key: 'rate',
      sorter: true,
    },
    {
      title: 'Type',
      dataIndex: 'calculationType',
      key: 'calculationType',
      sorter: true,
      render: (calculationType: string) => {
        return <Text>{calculationType === 'percentage' ? 'Percentage(%)' : 'Amount'}</Text>;
      },
    },
    {
      title: 'Status',
      dataIndex: ['status', 'displayName'],
      key: 'status',
      sorter: true,
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (id: number) => {
        return (
          <Text
            sx={{ cursor: 'pointer', display: 'inline-block' }}
            onClick={() => onDeleteTaxCode(id)}
          >
            <DeleteOutlined />
          </Text>
        );
      },
    },
  ];

  const { columns, selectedRowKeys, rowSelection, onchange } = useDataTable(baseColumns);

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
  ];

  return (
    <TablePage
      pagination={{
        storageKey: PAGES.TAXES,
        type: 'Tax Rate',
        totalItems,
        menu,
        qtySelected: selectedRowKeys.length,
        onClickBulk,
      }}
    >
      <Table<TaxCode>
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
        title="Delete tax code confirmation"
        visible={showConfirm}
        onOk={performDelete}
        onCancel={() => setShowConfirm(false)}
        okText="Delete"
      >
        <p>do you want to delete this tax code ?</p>
      </Modal>
    </TablePage>
  );
};
