import { Modal, Divider, Button, Space, Table } from 'antd';
import { Box } from 'rebass';
import { SelectedItem } from '../models';
import { DeleteOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';

interface Props {
  visible?: boolean;
  onCancel?: () => void;
  items: SelectedItem[];
  onChange: (items: SelectedItem[]) => void;
  inline?: boolean;
}

export const ManageSelectedItems: React.FC<Props> = ({
  visible,
  onCancel,
  items,
  onChange,
  inline,
}) => {
  const columns: ColumnsType<SelectedItem> = [
    {
      title: 'Name',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: (...args) => {
        const onClick = () => {
          onChange(items.filter((o) => o.id !== args[1].id));
        };
        return (
          <Box
            sx={{ display: 'inline-block', cursor: 'pointer', ':hover': { color: 'red' } }}
            onClick={onClick}
          >
            <DeleteOutlined></DeleteOutlined>
          </Box>
        );
      },
    },
  ];

  const renderTable = () => {
    return (
      <Table
        columns={columns}
        dataSource={items}
        pagination={false}
        rowKey="id"
        size={inline ? 'small' : 'middle'}
        locale={{ emptyText: 'No items selected' }}
      />
    );
  };

  if (inline) {
    return renderTable();
  }

  return (
    <Modal visible={visible} onCancel={onCancel} title="Selected items" footer={null}>
      <Box sx={{ maxHeight: 'calc(100vh - 280px)', overflowY: 'auto', overflowX: 'hidden', p: 1 }}>
        {renderTable()}
      </Box>
      <Divider></Divider>
      <Box sx={{ justifyContent: 'flex-end', display: 'flex', mt: 4 }}>
        <Space size={10}>
          <Button type="primary" onClick={onCancel}>
            Close
          </Button>
        </Space>
      </Box>
    </Modal>
  );
};
