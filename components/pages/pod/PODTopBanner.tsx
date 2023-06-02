import { Col, Row } from 'antd';
import { Date, DslOrder } from 'dsl-admin-base';
import { Box, Text } from 'rebass';
import React from 'react';
import _ from 'lodash';

interface OrderTopBannerProps {
  order: DslOrder | null;
}

export const PODTopBanner: React.FC<OrderTopBannerProps> = ({ order }) => {
  const body = order?.orderBody?.find((o) => o.actualDeliveryDate);

  if (!body) {
    return null;
  }

  const renderAddress = (items: Array<string | undefined>) => {
    return (
      <>
        {items
          .filter((o) => o)
          .map((o) => {
            return (
              <React.Fragment key={o}>
                {o}
                <br />
              </React.Fragment>
            );
          })}
      </>
    );
  };

  return (
    <Box mt="3" mb="4" bg="lightGrey" px={4} py={3}>
      <Row justify="space-between" align="middle">
        <Col span={14}>
          <Box>
            <Text mb="2">Order ID: {order?.reference}</Text>
            <Text mb="2">
              POD Date: {body?.actualDeliveryDate && <Date value={body?.actualDeliveryDate} />}
            </Text>
            <Text mb="2">Order Date: {order?.createdOn && <Date value={order?.createdOn} />}</Text>
            <Text mb="2">Outlet: {order?.outletName}</Text>
          </Box>
        </Col>
        <Col span={10}>
          <Box pr={5}>
            <Box sx={{ display: 'flex' }}>
              <Text mb="2" width={168}>
                Delivery Address:
                <br />
                <br />
                {renderAddress([
                  order?.shippingLine1,
                  order?.shippingLine2,
                  order?.shippingCity,
                  order?.shippingCounty,
                  order?.shippingPostcode,
                ])}
              </Text>
            </Box>
          </Box>
        </Col>
      </Row>
    </Box>
  );
};
