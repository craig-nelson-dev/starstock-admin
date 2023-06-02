import { DeleteOutlined } from '@ant-design/icons';
import { Modal, notification, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import {
  BrandOwner,
  Date,
  Promotion,
  reloadPage,
  TableItemLink,
  TablePage,
  useDataTable,
  useDeletePromotionMutation,
} from 'dsl-admin-base';
import { useState } from 'react';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';

interface Props {
  promotions: Promotion[];
  totalItems: number;
  loading: boolean;
  brandOwners: BrandOwner[];
}

const PromotionsTable: React.FC<Props> = ({ promotions, totalItems, loading, brandOwners }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentId, setCurrentId] = useState<number>();
  const [deletePromotion] = useDeletePromotionMutation();

  const onDelete = (id: number) => {
    setCurrentId(id);
    setShowConfirm(true);
  };

  const performDelete = async () => {
    if (currentId) {
      setShowConfirm(false);

      try {
        await deletePromotion({
          variables: {
            id: currentId,
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

  const baseColumns: ColumnsType<Promotion> = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'brand owner',
      dataIndex: 'brandId',
      render: (id: number) => {
        const brand = brandOwners.find((o) => o?.id === id);
        return <span>{brand?.displayName || ''}</span>;
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: '250px',
      render: (name: string, item: Promotion) => {
        return <TableItemLink id={item.id} label={name} />;
      },
    },
    {
      title: 'Start Date',
      dataIndex: 'activeFrom',
      align: 'center',
      render: (date: string) => {
        return <Date value={date} />;
      },
    },
    {
      title: 'End Date',
      dataIndex: 'activeTo',
      align: 'center',
      render: (date: string) => {
        return date ? <Date value={date} /> : null;
      },
    },
    {
      title: 'Date Created',
      dataIndex: 'createdOn',
      align: 'center',
      render: (createdOn: string) => {
        return <Date value={createdOn} />;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        return <Text sx={{ textTransform: 'capitalize' }}>{status}</Text>;
      },
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (id: number) => {
        return (
          <Text sx={{ cursor: 'pointer', display: 'inline-block' }} onClick={() => onDelete(id)}>
            <DeleteOutlined />
          </Text>
        );
      },
    },
  ];

  const { columns, onchange } = useDataTable(baseColumns);

  return (
    <TablePage
      pagination={{
        storageKey: PAGES.PROMOTIONS,
        type: 'Promotions',
        totalItems,
        noPagination: true,
      }}
    >
      <Table<Promotion>
        onChange={onchange}
        columns={columns}
        dataSource={promotions}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
        expandIconColumnIndex={4}
      />
      <Modal
        title="Delete promotion confirmation"
        visible={showConfirm}
        onOk={performDelete}
        onCancel={() => setShowConfirm(false)}
        okText="Delete"
      >
        <p>Do you want to delete this promotion ?</p>
      </Modal>
    </TablePage>
  );
};

export default PromotionsTable;
