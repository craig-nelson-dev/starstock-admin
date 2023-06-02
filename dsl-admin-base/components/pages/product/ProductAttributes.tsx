import React from 'react';
import { Col, Form, Input, Row, Checkbox, Select, Radio } from 'antd';
import { DslProductFeature, DslProductFeatureInput } from '../../../graphql/generated/graphql';
import { ProductAttributeType } from '../../../utils/constant';
import _ from 'lodash';
import { Box } from 'rebass';

const { Option } = Select;
interface Props {
  features: DslProductFeature[];
  existedFeatures: DslProductFeature[];
  isBrandOwnerView?: boolean;
}

export const getProductFeatureInput = (
  values: any,
  features: DslProductFeature[],
): DslProductFeatureInput[] | undefined => {
  const items: DslProductFeatureInput[] = [];

  for (let [key, value] of Object.entries(values)) {
    if (key.startsWith('feature_') && typeof value !== 'undefined') {
      const id = parseInt(key.replace('feature_', ''));
      const feature = features.find((o) => +o.id === id);

      if (feature) {
        if (feature.type.name === ProductAttributeType.checkbox && Array.isArray(value)) {
          value = value.join(', ');
        }
        items.push({
          id,
          name: feature.name,
          description: feature.description,
          featured: feature.featured,
          filterable: feature.filterable,
          position: feature.position,
          value: value as string,
        });
      }
    }
  }

  return items;
};

export const ProductAttributes: React.FC<Props> = ({
  features,
  existedFeatures,
  isBrandOwnerView,
}) => {
  const getRules = (feature: DslProductFeature) => {
    if (feature.mandatory) {
      return [{ required: true, message: `${feature.name} is required` }];
    }
  };

  return (
    <>
      {_.sortBy(
        features.filter((o) => !(!o.brandOwnerDisplay && isBrandOwnerView)),
        (o) => o.position,
      ).map((feature) => {
        const existedFeature = existedFeatures.find((o) => o.id === feature.id);
        const arrayValues = existedFeature?.value
          ?.split(',')
          .filter((o) => o)
          .map((o) => o.trim());

        return (
          <Row align="top" key={feature.id}>
            <Col span={4} className="mb-6">
              <Box sx={{ pt: 2 }}>
                <label>{feature.name}</label>
              </Box>
            </Col>
            <Col xs={8}>
              {feature.type.name === ProductAttributeType.freeText && (
                <Form.Item
                  name={`feature_${feature.id}`}
                  initialValue={existedFeature?.value}
                  rules={getRules(feature)}
                >
                  <Input type="text" disabled={feature.readOnly} />
                </Form.Item>
              )}
              {feature.type.name === ProductAttributeType.select && (
                <Form.Item
                  name={`feature_${feature.id}`}
                  initialValue={existedFeature?.value}
                  rules={getRules(feature)}
                >
                  <Select>
                    {_.sortBy(feature.defaultValues, (o) => o.position).map((item) => {
                      return (
                        <Option key={item.value} value={item.value}>
                          {item.value}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              )}
              {feature.type.name === ProductAttributeType.radio && (
                <Form.Item
                  name={`feature_${feature.id}`}
                  initialValue={existedFeature?.value}
                  rules={getRules(feature)}
                >
                  <Radio.Group>
                    {_.sortBy(feature.defaultValues, (o) => o.position).map((item) => {
                      return (
                        <Box sx={{ mb: 3 }} key={item.value}>
                          <Radio value={item.value}>{item.value}</Radio>
                        </Box>
                      );
                    })}
                  </Radio.Group>
                </Form.Item>
              )}
              {feature.type.name === ProductAttributeType.checkbox && (
                <Form.Item
                  name={`feature_${feature.id}`}
                  initialValue={arrayValues}
                  rules={getRules(feature)}
                >
                  <Checkbox.Group>
                    {_.sortBy(feature.defaultValues, (o) => o.position).map((item) => {
                      return (
                        <Box sx={{ mb: 3 }} key={item.value}>
                          <Checkbox value={item.value.trim()}>{item.value}</Checkbox>
                        </Box>
                      );
                    })}
                  </Checkbox.Group>
                </Form.Item>
              )}
            </Col>
          </Row>
        );
      })}
    </>
  );
};
