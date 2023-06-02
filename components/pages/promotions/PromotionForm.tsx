import { Checkbox, DatePicker, Form, Input, InputNumber, Radio, Select } from 'antd';
import {
  Condition,
  DslCategory,
  EffectInput,
  ImageUpload,
  ProductDistributor,
  Promotion,
  BrandOwner,
  PROMOTION_TYPES,
  PromotionLimitType,
  PromotionConditionType,
  TaxCode,
} from 'dsl-admin-base';
import React, { useState } from 'react';
import { Box, Text } from 'rebass';
import { Conditions } from './Conditions';
import { Effects } from './Effects';
import { useRouter } from 'next/router';

const { Option } = Select;

export interface PromotionFormValue {
  conditions: Condition[];
  effects: EffectInput[];
}

interface Props {
  categories: DslCategory[];
  promotion?: Promotion;
  distributors: ProductDistributor[];
  onChangeConditions: (value: Condition[]) => void;
  onChangeEffects: (value: EffectInput[]) => void;
  brands: BrandOwner[];
  taxCodes: TaxCode[];
  onBrandChange: (id: number) => void;
}

export const PromotionForm: React.FC<Props> = ({
  categories,
  promotion,
  onChangeConditions,
  onChangeEffects,
  onBrandChange,
  distributors,
  taxCodes,
  brands,
}) => {
  const router = useRouter();
  const [activeCondition, setActiveConditions] = useState<Condition[]>(promotion?.conditions || []);
  const [hiddenFromAll, setHideFromAll] = useState(promotion?.hiddenFromAll);

  const isVoucherPage = router.pathname.startsWith('/vouchers');

  const internalOnChangeConditions = (conditions: Condition[]) => {
    setActiveConditions(conditions);
    onChangeConditions(conditions);
  };

  const onStarStockOlyChange = (value: boolean) => {
    if (value) {
      onBrandChange(0);
    }

    setHideFromAll(value);
  };

  return (
    <Box variant="formWithCapsSelect">
      <Box
        sx={{
          display: 'flex',
          maxWidth: 500,
          alignItems: 'flex-end',
          '.ant-select-selection-item': { display: hiddenFromAll ? 'none' : undefined },
        }}
      >
        <Form.Item
          name="brandId"
          label="Brand Owner"
          rules={
            hiddenFromAll ? undefined : [{ required: true, message: 'Brand Owner is required' }]
          }
          style={{ flex: 1, marginRight: 20 }}
        >
          <Select
            placeholder="SELECT"
            disabled={hiddenFromAll}
            onChange={(e) => onBrandChange(e as number)}
          >
            {brands.map((b) => (
              <Option value={b.id} key={b.id}>
                {b.displayName}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="" name="hiddenFromAll" valuePropName="checked">
          <Checkbox onChange={(e) => onStarStockOlyChange(e.target.checked)}>
            <Text as="span" sx={{ fontSize: 2 }}>
              StarStock Only
            </Text>
          </Checkbox>
        </Form.Item>
      </Box>
      <Box sx={{ maxWidth: 500 }}>
        <Form.Item
          name="distributorId"
          label="Distributor"
          rules={[{ required: true, message: 'Distributor is required' }]}
        >
          <Select placeholder="SELECT" style={{ maxWidth: 320 }}>
            {distributors.map((dist) => {
              return (
                <Option value={dist.id} key={dist.id}>
                  {dist.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name="identityCode"
          label="Promotion Reference"
          rules={[{ required: true, message: 'Code is required' }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Name is required' }]}
        >
          <Input></Input>
        </Form.Item>
        {!isVoucherPage && (
          <>
            <Form.Item name="shortDescription" label="Short Description">
              <Input.TextArea rows={4}></Input.TextArea>
            </Form.Item>
            <ImageUpload formItemName="image" label="Image"></ImageUpload>
            <Form.Item name="longDescription" label="Details">
              <Input.TextArea rows={4}></Input.TextArea>
            </Form.Item>
          </>
        )}
        <Form.Item name="activeFrom" label="Start Date">
          <DatePicker placeholder="SELECT"></DatePicker>
        </Form.Item>
        <Form.Item name="activeTo" label="End Date">
          <DatePicker placeholder="SELECT"></DatePicker>
        </Form.Item>
        {!isVoucherPage && (
          <>
            <Form.Item
              name="type"
              label="Type Category"
              rules={[{ required: true, message: 'Type is required' }]}
            >
              <Select placeholder="Select">
                {PROMOTION_TYPES.map((type) => {
                  return (
                    <Option key={type.value} value={type.value}>
                      {type.label}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item name="category" label="Category">
              <Select placeholder="Select" mode="multiple" allowClear>
                {categories.map((category) => {
                  return (
                    <Option key={category.id} value={category.id}>
                      {category.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item label="Promotion Limits">
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Form.Item name={PromotionLimitType.PER_CUSTOMER} noStyle>
                  <InputNumber style={{ width: 60 }} />
                </Form.Item>
                <Text sx={{ ml: 3 }}>Per Customer</Text>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Form.Item name={PromotionLimitType.MAX_PER_ORDER} noStyle>
                  <InputNumber style={{ width: 60 }} />
                </Form.Item>
                <Text sx={{ ml: 3 }}>Per Customer Order</Text>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Form.Item name={PromotionLimitType.PER_PROMOTION} noStyle>
                  <InputNumber style={{ width: 60 }} />
                </Form.Item>
                <Text sx={{ ml: 3 }}>Available</Text>
              </Box>
              <Box sx={{ mt: 3 }}>
                <Form.Item
                  name={`condition-${PromotionConditionType.BRAND_FIRST_ORDER}`}
                  valuePropName="checked"
                >
                  <Checkbox>
                    <Text as="span">Applies to first order from this brand owner only</Text>
                  </Checkbox>
                </Form.Item>
              </Box>
            </Form.Item>
          </>
        )}
        {isVoucherPage && (
          <>
            <Form.Item name={PromotionLimitType.PER_PROMOTION} label="Code Usage Limit">
              <InputNumber style={{ width: 80 }} />
            </Form.Item>
            <Form.Item name={PromotionLimitType.PER_CUSTOMER} label="Number Of Use Per Customer">
              <InputNumber style={{ width: 80 }} />
            </Form.Item>
            <Form.Item
              name={`condition-${PromotionConditionType.FIRST_ORDER}`}
              valuePropName="checked"
            >
              <Checkbox>
                <Text as="span">Applies to customer's first order only</Text>
              </Checkbox>
            </Form.Item>
          </>
        )}
        <Form.Item name="terms" label="T&C's">
          <Input.TextArea rows={5}></Input.TextArea>
        </Form.Item>
        {!isVoucherPage && (
          <Form.Item name="priority" label="Display Priority">
            <InputNumber />
          </Form.Item>
        )}
        <Form.Item name="taxRate" label="VAT">
          <Select placeholder="SELECT" style={{ maxWidth: 320 }}>
            {taxCodes.map((tax) => {
              return (
                <Option value={tax.rate} key={tax.id}>
                  {tax.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Radio.Group>
            <Radio value="active">Active</Radio>
            <Radio value="disabled">Disabled</Radio>
          </Radio.Group>
        </Form.Item>
      </Box>
      <SectionBoder />
      <Conditions conditions={promotion?.conditions || []} onChange={internalOnChangeConditions} />
      <Effects
        effects={promotion?.effects || []}
        onChange={onChangeEffects}
        conditions={activeCondition}
      />
    </Box>
  );
};

const SectionBoder = () => {
  return <Box sx={{ borderBottom: '1px solid black', my: 4 }}></Box>;
};
