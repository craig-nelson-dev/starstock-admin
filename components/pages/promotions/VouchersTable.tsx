import { Table, notification, Modal } from 'antd';
import {
  Promotion,
  TablePage,
  useDataTable,
  TableItemLink,
  BrandOwner,
  useDeletePromotionMutation,
  reloadPage,
} from 'dsl-admin-base';
import { ColumnsType } from 'antd/es/table';
import { Text } from 'rebass';
import { PAGES } from 'utils/constant';
import lodash from 'lodash';
import { DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';

interface Props {
  promotions: Promotion[];
  totalItems: number;
  loading: boolean;
  brandOwners: BrandOwner[];
}

export const VouchersTable: React.FC<Props> = ({
  promotions,
  totalItems,
  loading,
  brandOwners,
}) => {
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
      title: 'ref',
      dataIndex: 'identityCode',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (name: string, item: Promotion) => {
        return <TableItemLink id={item.id} label={name} />;
      },
    },
    {
      title: 'Promotion redemption',
      dataIndex: 'id',
      render: (_, promotion: Promotion) => {
        const voucher = promotion.conditions.find((o) => o.type === 'voucher');
        const count = lodash.sumBy(voucher?.voucherCodes, (o) => o.redemptionCount || 0);
        return <span>{count || 0}</span>;
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
        title="Delete voucher confirmation"
        visible={showConfirm}
        onOk={performDelete}
        onCancel={() => setShowConfirm(false)}
        okText="Delete"
      >
        <p>Do you want to delete this voucher ?</p>
      </Modal>
    </TablePage>
  );
};
