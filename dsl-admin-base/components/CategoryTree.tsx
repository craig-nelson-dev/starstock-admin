import { DslCategory } from '../graphql/generated/graphql';
import { TreeSelect, Form } from 'antd';
import React from 'react';

interface Props {
  data?: DslCategory[];
  label?: string;
  treeCheckable?: boolean;
  disabled?: boolean;
  required?: boolean;
  inputName?: string;
  style?: { width?: number };
}

function renderTree(categories: DslCategory[]) {
  return categories.map((category) => {
    return (
      <TreeSelect.TreeNode value={category.id.toString()} title={category.name} key={category.id}>
        {renderTree((category.subCategories || []) as DslCategory[])}
      </TreeSelect.TreeNode>
    );
  });
}

export const CategoryTree: React.FC<Props> = ({
  data,
  label,
  treeCheckable,
  required,
  disabled,
  style,
  inputName,
}) => {
  const categories = data || [];
  return (
    <Form.Item
      name={inputName ? inputName : 'category'}
      label={label}
      rules={required ? [{ required: true, message: 'Please select categories' }] : []}
    >
      <TreeSelect
        disabled={disabled}
        style={style ? style : { width: 300 }}
        treeCheckable={treeCheckable}
        treeCheckStrictly={treeCheckable}
        showSearch={false}
        placeholder={disabled ? '' : 'Select'}
        showCheckedStrategy={TreeSelect.SHOW_PARENT}
        dropdownStyle={{ maxHeight: 500, overflow: 'auto' }}
        allowClear
      >
        {renderTree(categories)}
      </TreeSelect>
    </Form.Item>
  );
};
