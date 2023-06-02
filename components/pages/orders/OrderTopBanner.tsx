import { Col, Row } from 'antd';
import { Currency, Date, DslOrder, OrderBody } from 'dsl-admin-base';
import React, { useMemo } from 'react';
import { Box, Text } from 'rebass';
import _ from 'lodash';

interface OrderTopBannerProps {
  order: DslOrder | null;
  parentView?: boolean;
  body?: OrderBody;
}

export const OrderTopBanner: React.FC<OrderTopBannerProps> = ({ order, body, parentView }) => {
  const numberOfItems = useMemo(() => {
    if (parentView) {
      return _.sumBy(order?.orderBody, (o) => _.sumBy(o.orderItems, (i) => i.qty));
    } else if (body) {
      return _.sumBy(body.orderItems, (o) => o.qty);
    }
  }, [order, body, parentView]);

  const paymentMethod = order?.payments?.length ? order.payments[0].method : undefined;

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
            {!parentView && <Text mb="2">Distributor: {body?.distributorName}</Text>}
            <Text mb="2">Order Date: {order?.createdOn && <Date value={order?.createdOn} />}</Text>
            {!parentView && (
              <Text mb="2">
                Delivery Date:{' '}
                {body?.selectedDeliveryDate && <Date value={body?.selectedDeliveryDate} />}
              </Text>
            )}
            <Text mb="2">Number Of Items: {numberOfItems}</Text>
            <Text mb="2">
              Amount Paid: <Currency value={parentView ? order?.total : body?.total} />
            </Text>
            <Text mb="2" sx={{ textTransform: 'capitalize' }}>
              Payment Method: {paymentMethod === 'card' ? 'Credit / Debit Card' : paymentMethod}
            </Text>
            <Text mb="2">
              Placed by: {order?.firstname} {order?.lastname} ({order?.email})
            </Text>
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
                  order?.outletName,
                  order?.shippingLine1,
                  order?.shippingLine2,
                  order?.shippingCity,
                  order?.shippingCounty,
                  order?.shippingPostcode,
                ])}
              </Text>
              <Text mb="2" width={168} sx={{ ml: 3 }}>
                Billing Address:
                <br />
                <br />
                {renderAddress([
                  order?.billingLine1,
                  order?.billingLine2,
                  order?.billingCity,
                  order?.billingCounty,
                  order?.billingPostcode,
                ])}
              </Text>
            </Box>
          </Box>
        </Col>
      </Row>
    </Box>
  );
};
