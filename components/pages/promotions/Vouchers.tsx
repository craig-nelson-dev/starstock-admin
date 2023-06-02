import { Box } from 'rebass';
import { Table, Button, Input, Modal } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { DeleteOutlined } from '@ant-design/icons';
import { useDataTable, Condition, VoucherCodeInput } from 'dsl-admin-base';
import { useState, useEffect } from 'react';
import _ from 'lodash';

interface Props {
  conditions: Condition[];
  onChange: (value: VoucherCodeInput[]) => void;
}

interface VoucherCodeItem {
  id: number | string;
  code: string;
  redemptionCount?: number;
}

export const Vouchers: React.FC<Props> = ({ conditions, onChange }) => {
  const [voucherCodes, setVoucherCodes] = useState<VoucherCodeItem[]>([]);
  const [codeString, setCodeString] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    onChange(
      voucherCodes.map((o) => ({
        code: o.code,
        id: typeof o.id === 'number' ? o.id : undefined,
        maxRedemptionCount: 99999,
        enabled: true,
      })),
    );
  }, [voucherCodes]);

  useEffect(() => {
    setVoucherCodes(conditions.find((o) => o.type === 'voucher')?.voucherCodes || []);
  }, []);

  const baseColumns: ColumnsType<VoucherCodeItem> = [
    {
      title: 'Code',
      dataIndex: 'code',
    },
    {
      title: 'Number of times used',
      dataIndex: 'redemptionCount',
    },
    {
      title: '',
      align: 'right',
      dataIndex: 'id',
      render: (id: number) => {
        return (
          <Box sx={{ fontSize: '1.25rem', cursor: 'pointer' }} onClick={() => onDelete(id)}>
            <DeleteOutlined />
          </Box>
        );
      },
    },
  ];

  const onDelete = (id: number | string) => {
    setVoucherCodes(voucherCodes.filter((o) => o.id !== id));
  };

  const { columns } = useDataTable(baseColumns);

  const onAdd = () => {
    setShow(false);
    let codes = codeString
      .split(',')
      .filter((o) => o)
      .map((o) => o.trim());
    codes = _.uniq(codes);
    const codeItems: VoucherCodeItem[] = codes.map((o) => ({ code: o, id: o }));

    setVoucherCodes([...codeItems, ...voucherCodes]);
  };

  const onOpen = () => {
    setShow(true);
    setCodeString('');
  };

  return (
    <Box mb="4" p="3">
      <Box sx={{ textAlign: 'right', mb: 3 }}>
        <Button type="primary" onClick={onOpen}>
          Add code
        </Button>
      </Box>
      <Table<VoucherCodeItem>
        className="grey-table"
        columns={columns}
        dataSource={voucherCodes}
        pagination={false}
        rowKey="id"
        showSorterTooltip={false}
      />
      <Modal
        title="Add voucher codes"
        visible={show}
        onOk={onAdd}
        onCancel={() => setShow(false)}
        okText="Add"
      >
        <Input.TextArea
          rows={7}
          placeholder="Enter voucher codes, split by comma"
          onChange={(e) => setCodeString(e.target.value)}
          value={codeString}
        ></Input.TextArea>
      </Modal>
    </Box>
  );
};
