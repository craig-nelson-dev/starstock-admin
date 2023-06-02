import { Box, Text } from 'rebass';
import { Table, Button, Input, Form, InputNumber } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { DeleteOutlined } from '@ant-design/icons';
import { useDataTable, ProductFeatureDefaultValue, getRunTimeUniqId } from 'dsl-admin-base';
import { useState } from 'react';
import _ from 'lodash';

interface Props {
  values: ProductFeatureDefaultValue[];
}

interface AttrValueItem {
  id: string;
  value?: string;
  position?: number;
}

const getInitialValues = (values: ProductFeatureDefaultValue[]): AttrValueItem[] => {
  return values.map((o) => ({ id: getRunTimeUniqId(), position: o.position, value: o.value }));
};

export const ValuesTable: React.FC<Props> = ({ values }) => {
  const [valueItems, setValueItems] = useState<AttrValueItem[]>(getInitialValues(values));

  const baseColumns: ColumnsType<AttrValueItem> = [
    {
      title: 'value',
      dataIndex: 'value',
      render: (v: number, item: AttrValueItem) => {
        return (
          <Form.Item
            initialValue={v}
            name={`values-value-${item.id}`}
            style={{ margin: 0 }}
            rules={[{ required: true, message: 'Value is required' }]}
          >
            <Input type="text" style={{ maxWidth: 250 }} />
          </Form.Item>
        );
      },
    },
    {
      title: 'position',
      dataIndex: 'position',
      render: (v: number, item: AttrValueItem) => {
        return (
          <Form.Item
            initialValue={v}
            name={`values-position-${item.id}`}
            style={{ margin: 0 }}
            rules={[{ required: true, message: 'Postion is required' }]}
          >
            <InputNumber />
          </Form.Item>
        );
      },
    },
    {
      title: '',
      align: 'right',
      dataIndex: 'id',
      render: (id: string) => {
        return (
          <Box sx={{ fontSize: '1.25rem', cursor: 'pointer' }} onClick={() => onDelete(id)}>
            <DeleteOutlined />
          </Box>
        );
      },
    },
  ];

  const onDelete = (id: string) => {
    setValueItems(valueItems.filter((o) => o.id !== id));
  };

  const { columns } = useDataTable(baseColumns);

  const onAdd = () => {
    setValueItems([...valueItems, { id: getRunTimeUniqId(), value: '' }]);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, alignItems: 'center' }}>
        <Text sx={{ fontSize: 2 }}>Values</Text>
        <Button type="primary" onClick={onAdd}>
          Add value
        </Button>
      </Box>
      <Table<AttrValueItem>
        className="grey-table"
        columns={columns}
        dataSource={valueItems}
        pagination={false}
        rowKey="id"
        showSorterTooltip={false}
      />
    </Box>
  );
};
