import { Form, Select } from 'antd';
import React from 'react';
import { RepositoryFactory, usePageData } from '..';

interface Props {
  label?: string;
  treeCheckable?: boolean;
  disabled?: boolean;
  required?: boolean;
  inputName?: string;
  style?: { width?: number };
}

const { Option } = Select;

export const BoDropdown: React.FC<Props> = ({ label, required, disabled, style, inputName }) => {
  const { data } = usePageData(() => {
    return RepositoryFactory.get('user').get({
      type: 'brandowner',
    });
  });
  return (
    <Form.Item
      rules={required ? [{ required: true, message: 'Required' }] : []}
      name={inputName || 'brandOwnerId'}
      label={label || 'Brand Owner'}
    >
      <Select disabled={disabled} style={style ? style : { width: 150 }}>
        <Option value="">All</Option>
        {data?.users.map((o) => {
          if (!o) return <></>;
          return <Option value={o.id.toString()}>{o.brand?.displayName}</Option>;
        })}
      </Select>
    </Form.Item>
  );
};
