import { Currency, DslOrder, PromoDiscount } from 'dsl-admin-base';
import React from 'react';
import { Box, Flex, Text } from 'rebass';

interface Props {
  order: DslOrder;
  discountDetail?: PromoDiscount[];
}

export const InvoiceTotal: React.FC<Props> = ({ order, discountDetail }) => {
  return (
    <Box minWidth={275}>
      <Flex mb={2} justifyContent="space-between" alignItems="center">
        <Text fontSize={1} sx={{ textTransform: 'uppercase' }} fontWeight={500}>
          Subtotal
        </Text>
        <Text fontSize={1} fontWeight={500}>
          <Currency value={order.subtotal} />
        </Text>
      </Flex>
      {discountDetail?.map((promo) => {
        return (
          <Flex
            mb={1}
            sx={{ ml: 2 }}
            justifyContent="space-between"
            alignItems="center"
            key={promo.name}
          >
            <Text
              fontWeight={500}
              fontSize={12}
              sx={{ textTransform: 'uppercase', pr: 3, maxWidth: 300 }}
            >
              {promo.name}
            </Text>
            <Text fontWeight={500} fontSize={12} sx={{ whiteSpace: 'nowrap' }}>
              <Currency value={promo.value} />
            </Text>
          </Flex>
        );
      })}
      {order.discount !== 0 && (
        <Flex mb={1} justifyContent="space-between" alignItems="center">
          <Text fontSize={1} sx={{ textTransform: 'uppercase' }} fontWeight={500}>
            total Discounts
          </Text>
          <Text lineHeight="l" fontSize="sub" fontWeight={500}>
            <Currency value={order.discount} />
          </Text>
        </Flex>
      )}
      <Flex mb={1} justifyContent="space-between" alignItems="center" height={32}>
        <Text fontSize={1} sx={{ textTransform: 'uppercase' }} fontWeight={500}>
          Vat
        </Text>
        <Text fontSize={1} fontWeight={500}>
          <Currency value={order.totalTax} />
        </Text>
      </Flex>
      <Flex mb={2} justifyContent="space-between" alignItems="center">
        <Text fontSize={2} sx={{ textTransform: 'uppercase' }} fontWeight="bold">
          Total
        </Text>
        <Text fontSize={2} fontWeight="bold">
          <Currency value={order.total} />
        </Text>
      </Flex>
    </Box>
  );
};
