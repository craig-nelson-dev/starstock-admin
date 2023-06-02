import { Col, Row } from 'antd';
import { Currency, DslOrder } from 'dsl-admin-base';
import React from 'react';
import { Box, Text } from 'rebass';
import _ from 'lodash';

interface OrderPromotionProps {
  order?: DslOrder | null;
  hidePromotion?: boolean;
}

export const OrderPromotion: React.FC<OrderPromotionProps> = ({ order, hidePromotion = false }) => {
  const promotions = _.uniqBy(order?.promotions || [], (o) => o.promotionId);
  const hasPromo = promotions.length > 0;

  let offset = 0;
  if (hidePromotion === true || !hasPromo) {
    offset = 18;
  }
  return (
    <Box mt="3" mb="4" bg="lightGrey" px={4} py={3}>
      <Row justify="space-between" align="middle">
        {!hidePromotion && hasPromo && (
          <Col span={12}>
            {hasPromo && (
              <Box sx={{ backgroundColor: 'lightGrey', p: 3 }}>
                <Text mb="2">Promotion Applied:</Text>
                {promotions.map((promo) => {
                  return <Text key={promo.promotionId}>{promo.promotionName}</Text>;
                })}
              </Box>
            )}
          </Col>
        )}
        <Col offset={offset} span={6}>
          <Box pr={4}>
            <Text mb="2">
              Subtotal (ex VAT): <Currency value={order?.subtotal} />
            </Text>
            <Text mb="2">
              Discounts: <Currency value={order?.discount} />
            </Text>
            <Text mb="2">
              VAT: <Currency value={order?.totalTax} />
            </Text>
            <Text mb="2">
              Total Cost: <Currency value={order?.total} />
            </Text>
          </Box>
        </Col>
      </Row>
    </Box>
  );
};
