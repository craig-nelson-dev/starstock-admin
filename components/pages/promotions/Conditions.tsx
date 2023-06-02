import { Condition, QUALIFYING_CONTIONS, PromotionConditionType } from 'dsl-admin-base';
import { Box, Text } from 'rebass';
import { Col, Select, Row, Form, Menu, Dropdown } from 'antd';
import { ProductConditionControl } from './ProductConditionControl';
import { MOVConditionControl } from './MOVConditionControl';
import { BrandOwnerProductCondition } from './BrandOwnerProductCondition';
import { AllProductCondition } from './AllProductCondition';
import { useState, useEffect } from 'react';

const { Option } = Select;
interface Props {
  conditions: Condition[];
  onChange: (value: Condition[]) => void;
}

export const Conditions: React.FC<Props> = ({ conditions, onChange }) => {
  const [activeConditions, setActiveConditions] = useState(conditions);

  const menu = (
    <Menu onClick={(e) => addCondition(e.key as string)}>
      <Menu.Item key={PromotionConditionType.PRODUCT}>Products</Menu.Item>
      <Menu.Item key={PromotionConditionType.ANY_PRODUCT}>All Products</Menu.Item>
      <Menu.Item key={PromotionConditionType.BRAND_PRODUCT}>Brand Owner - All Products</Menu.Item>
      <Menu.Item key={PromotionConditionType.MOV}>Minimum order value</Menu.Item>
    </Menu>
  );

  const onConditionChange = (id: number, condition: Condition) => {
    const value = activeConditions.map((o) => {
      if (o.id === id) {
        return condition;
      }

      return o;
    });

    setActiveConditions(value);
  };

  const addCondition = (key: string) => {
    // product condition
    if (
      !activeConditions.find((o) => o.type === PromotionConditionType.PRODUCT) &&
      key === PromotionConditionType.PRODUCT
    ) {
      setActiveConditions([
        ...activeConditions,
        {
          type: PromotionConditionType.PRODUCT,
          comparator: 'in',
          in: [],
          equalOrGreater: 0,
          equalOrLess: 0,
          greaterThan: 0,
          id: new Date().valueOf(),
          lessThan: 0,
          multiplesOf: 0,
          notIn: [],
          order: 0,
          promotionId: 0,
          result: 0,
        },
      ]);
    }

    // MOV condition
    if (
      !activeConditions.find((o) => o.type === PromotionConditionType.MOV) &&
      key === PromotionConditionType.MOV
    ) {
      setActiveConditions([
        ...activeConditions,
        {
          type: PromotionConditionType.MOV,
          comparator: 'equalOrGreater',
          in: [],
          equalOrGreater: 0,
          equalOrLess: 0,
          greaterThan: 0,
          id: new Date().valueOf(),
          lessThan: 0,
          multiplesOf: 0,
          notIn: [],
          order: 0,
          promotionId: 0,
          result: 0,
        },
      ]);
    }

    if (
      !activeConditions.find((o) => o.type === PromotionConditionType.BRAND_PRODUCT) &&
      key === PromotionConditionType.BRAND_PRODUCT
    ) {
      setActiveConditions([
        ...activeConditions,
        {
          type: PromotionConditionType.BRAND_PRODUCT,
          comparator: 'in',
          in: [],
          equalOrGreater: 0,
          equalOrLess: 0,
          greaterThan: 0,
          id: new Date().valueOf(),
          lessThan: 0,
          multiplesOf: 0,
          notIn: [],
          order: 2,
          promotionId: 0,
          result: 0,
        },
      ]);
    }

    if (
      !activeConditions.find((o) => o.type === PromotionConditionType.ANY_PRODUCT) &&
      key === PromotionConditionType.ANY_PRODUCT
    ) {
      setActiveConditions([
        ...activeConditions,
        {
          type: PromotionConditionType.ANY_PRODUCT,
          comparator: 'in',
          in: [],
          equalOrGreater: 0,
          equalOrLess: 0,
          greaterThan: 0,
          id: new Date().valueOf(),
          lessThan: 0,
          multiplesOf: 0,
          notIn: [],
          order: 2,
          promotionId: 0,
          result: 0,
        },
      ]);
    }
  };

  const removeCondition = (id: number) => {
    setActiveConditions(activeConditions.filter((o) => o.id !== id));
  };

  useEffect(() => {
    onChange(activeConditions);
  }, [activeConditions]);

  return (
    <Box>
      <Box>
        <Text variant="h4">qualifying conditions</Text>
        <Box sx={{ my: 3 }}>
          <Row align="middle">
            <Col span={4}>
              <Box sx={{ '.ant-select': { width: '100%' } }}>
                <Form.Item name="qualifying" noStyle>
                  <Select placeholder="All">
                    {QUALIFYING_CONTIONS.map((item) => {
                      return (
                        <Option value={item.value} key={item.value}>
                          {item.label}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Box>
            </Col>
            <Text sx={{ fontSize: 2, ml: 2, textTransform: 'capitalize' }}>
              Conditions Are Applicable
            </Text>
            <Dropdown overlay={menu} trigger={['click']}>
              <Text
                sx={{
                  textTransform: 'uppercase',
                  ml: 'auto',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                Add Condition
              </Text>
            </Dropdown>
          </Row>
        </Box>
      </Box>
      {activeConditions.map((condition) => {
        if (condition.type === PromotionConditionType.PRODUCT) {
          return (
            <ProductConditionControl
              condition={condition}
              key={condition.id}
              onRemove={removeCondition}
              onChange={(e) => onConditionChange(condition.id, e)}
            />
          );
        }

        if (condition.type === PromotionConditionType.MOV) {
          return (
            <MOVConditionControl
              condition={condition}
              key={condition.id}
              onRemove={removeCondition}
              onChange={(e) => onConditionChange(condition.id, e)}
            />
          );
        }

        if (condition.type === PromotionConditionType.BRAND_PRODUCT) {
          return (
            <BrandOwnerProductCondition
              condition={condition}
              key={condition.id}
              onRemove={removeCondition}
            />
          );
        }

        if (condition.type === PromotionConditionType.ANY_PRODUCT) {
          return (
            <AllProductCondition
              condition={condition}
              key={condition.id}
              onRemove={removeCondition}
            />
          );
        }
      })}
    </Box>
  );
};
