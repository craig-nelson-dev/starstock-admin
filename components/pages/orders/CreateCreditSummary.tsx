import { Currency, formatPrice } from 'dsl-admin-base';
import React, { Key } from 'react';
import { Box, Text } from 'rebass';
import { OrderWithCreditType, getCreditUnitPrice } from './CreateCreditOrderItems';

interface CreateCreditSummaryProps {
  selectedRowKeys: Key[];
  orderItems: OrderWithCreditType[];
  creditQtys: Object;
  additionalCreditItems: any[];
  charges: any;
}

export const getCreditAndVat = (
  orderItems: OrderWithCreditType[],
  selectedRowKeys: Key[],
  creditQtys: Object,
) => {
  let creditTotal = 0;
  let vat = 0;
  const selectedOrderItems = orderItems.filter((item) => selectedRowKeys.includes(item.id));
  selectedOrderItems.forEach((item) => {
    const id = item.id;
    const creditQty = (creditQtys as any)[id] === undefined ? 1 : (creditQtys as any)[id];
    const unitPrice = getCreditUnitPrice(item);
    const creditPrice = unitPrice.linePriceExTax * creditQty;
    creditTotal += creditPrice;
    vat += unitPrice.taxTotal * creditQty;
  });

  return { creditTotal, vat };
};

export const CreateCreditSummary: React.FC<CreateCreditSummaryProps> = ({
  selectedRowKeys,
  orderItems,
  creditQtys,
  additionalCreditItems,
  charges,
}) => {
  let charge = 0;

  let { creditTotal, vat } = getCreditAndVat(orderItems, selectedRowKeys, creditQtys);
  additionalCreditItems?.forEach((item: any) => {
    creditTotal += formatPrice(item.price || 0);
    vat += formatPrice(((item.price || 0) * (item.taxRate || 0)) / 100);
  });

  charges?.forEach((item: any) => {
    charge += formatPrice(item.price || 0) * 100;
    vat -= formatPrice(((item.price || 0) * (item.taxRate || 0)) / 100);
  });

  creditTotal = formatPrice(creditTotal * 100);
  vat = formatPrice(vat ? vat * 100 : 0);
  let creditAmount = creditTotal - charge;

  return (
    <Box mt="3" mb="4" bg="lightGrey" px={4} py={3}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 100px',
          rowGap: 2,
          columnGap: 3,
          marginLeft: 'auto',
          width: 'fit-content',
        }}
      >
        <Text sx={{ textAlign: 'right' }}>CREDIT TOTAL (EX VAT):</Text>
        <Currency value={creditTotal} />
        <Text sx={{ textAlign: 'right' }}>CHARGE TOTAL (EX VAT):</Text>
        <Currency value={charge * -1} />
        <Text sx={{ textAlign: 'right' }}>TOTAL CREDIT AMOUNT (EX VAT):</Text>
        <Currency value={creditAmount} />
        <Text sx={{ textAlign: 'right' }}>VAT:</Text>
        <Currency value={vat} />
        <Text sx={{ textAlign: 'right' }}>TOTAL CREDIT AMOUNT (INC VAT):</Text>
        <Currency value={creditAmount + vat} />
      </Box>
    </Box>
  );
};
