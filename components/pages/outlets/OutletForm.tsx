import { Col, Form, Input, Row, Select } from 'antd';
import { DeliveryDays, LegalStatus, OutletStyles } from 'dsl-admin-base';
import React, { useState } from 'react';
import { Text } from 'rebass';

interface OutletFormProps {
  initialValues: any;
  showXPO: boolean;
}

const GeneralAddress: React.FC<{ prefix?: string }> = (props) => {
  const { prefix = '' } = props;

  return (
    <>
      <Form.Item name={`${prefix}firstName`} label="First Name">
        <Input type="text" placeholder="First name" />
      </Form.Item>
      <Form.Item name={`${prefix}lastName`} label="Last Name">
        <Input type="text" placeholder="Last name" />
      </Form.Item>
      <Form.Item name={`${prefix}lineOne`} label="Address 1">
        <Input type="text" placeholder="Address" />
      </Form.Item>
      <Form.Item name={`${prefix}lineTwo`} label="Address 2">
        <Input type="text" placeholder="Address" />
      </Form.Item>
      <Form.Item name={`${prefix}city`} label="City">
        <Input type="text" placeholder="City" />
      </Form.Item>
      <Form.Item name={`${prefix}county`} label="County">
        <Input type="text" placeholder="Country" />
      </Form.Item>
      <Form.Item name={`${prefix}postcode`} label="Postcode">
        <Input type="text" placeholder="Postcode" />
      </Form.Item>
    </>
  );
};

const DeliveryForm: React.FC = () => (
  <>
    <Text fontWeight="bold" fontSize={16}>
      Delivery Address
    </Text>
    <GeneralAddress prefix="shipping_" />
    <Form.Item name="dropPointDescription" label="Description of Drop Point">
      <Input.TextArea placeholder="Placeholder" rows={4} />
    </Form.Item>
  </>
);

const BillingForm: React.FC = () => (
  <>
    <Text fontWeight="bold" fontSize={16}>
      Billing Address
    </Text>
    <GeneralAddress prefix="billing_" />
  </>
);

const TailForm: React.FC<OutletFormProps> = ({ initialValues, showXPO }) => {
  const [legalStatus, setLegalStatus] = useState(
    initialValues ? initialValues.legalStatus : undefined,
  );

  return (
    <>
      <Row>
        <Col span={8}>
          <Form.Item name="style" label="Outlet Style">
            <Select>
              {OutletStyles.map((style) => (
                <Select.Option key={style.value} value={style.value}>
                  {style.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Form.Item name="legalStatus" label="Legal Status">
            <Select onChange={(e) => setLegalStatus(e)}>
              {LegalStatus.map((status) => (
                <Select.Option key={status.value} value={status.value}>
                  {status.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={8} offset={1}>
          {legalStatus === 'Ltd Company' && (
            <Form.Item name="companyName" label="Company Name">
              <Input placeholder="Company name" />
            </Form.Item>
          )}
          {legalStatus === 'Charity' && (
            <Form.Item name="charityNumber" label="Charity Number">
              <Input placeholder="Charity Number" />
            </Form.Item>
          )}
        </Col>
      </Row>
      {showXPO && (
        <>
          <Row>
            <Text fontWeight="bold" fontSize={16} marginTop={4} marginBottom={3}>
              XPO
            </Text>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item name="xpoAccountNumber" label="XPO Account Number">
                <Input placeholder="XPO Account Number" />
              </Form.Item>
            </Col>
            <Col span={8} offset={1}>
              <Form.Item name="delivery_day" label="Standard Delivery Day">
                <Select onChange={(e) => setLegalStatus(e)}>
                  {DeliveryDays.map((day) => (
                    <Select.Option key={day.value} value={day.value}>
                      {day.label}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export const OutletForm: React.FC<OutletFormProps> = (props) => {
  return (
    <>
      <Text fontWeight="bold" fontSize={16} sx={{ mb: 1 }}>
        Outlet Name
      </Text>
      <Form.Item name="name" style={{ maxWidth: '28.5%' }}>
        <Input type="text" />
      </Form.Item>
      <Row>
        <Col xs={24} lg={12} style={{ paddingRight: 16 }}>
          <DeliveryForm />
        </Col>
        <Col xs={24} lg={12} style={{ paddingLeft: 16 }}>
          <BillingForm />
        </Col>
      </Row>
      <TailForm {...props} />
    </>
  );
};
