import { CreditNoteItem, Currency } from 'dsl-admin-base';
import React from 'react';
import { useMemo } from 'react';
import { Box, Text } from 'rebass';
import { TableType } from './CreditOrderItems';

interface CreditSummaryProps {
  creditNoteItems: CreditNoteItem[];
  orders: TableType[];
}

export const getCreditSummaryData = (creditNoteItems: CreditNoteItem[]) => {
  let creditTotal = 0;
  let vatTotal = 0;
  let chargeTotal = 0;

  creditNoteItems?.forEach((item) => {
    const qty = item.qty || 1;
    const priceExVat = item.subtotal;
    const vat = item.tax;
    vatTotal += vat * qty;

    if (priceExVat > 0) {
      creditTotal += priceExVat * qty;
    } else {
      chargeTotal += priceExVat;
    }
  });
  return {
    creditTotal,
    vatTotal,
    chargeTotal: chargeTotal,
    creditAmount: creditTotal + chargeTotal,
    creditAmountIncVat: creditTotal + chargeTotal + vatTotal,
  };
};

export const CreditSummary: React.FC<CreditSummaryProps> = ({ creditNoteItems, orders }) => {
  const creditSummary = useMemo(() => {
    return getCreditSummaryData(creditNoteItems);
  }, [creditNoteItems, orders]);

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
        <Currency value={creditSummary.creditTotal} />
        <Text sx={{ textAlign: 'right' }}>CHARGE TOTAL (EX VAT):</Text>
        <Currency value={creditSummary.chargeTotal} />
        <Text sx={{ textAlign: 'right' }}>TOTAL CREDIT AMOUNT (EX VAT):</Text>
        <Currency value={creditSummary.creditAmount} />
        <Text sx={{ textAlign: 'right' }}>VAT:</Text>
        <Currency value={creditSummary.vatTotal} />
        <Text sx={{ textAlign: 'right' }}>TOTAL CREDIT AMOUNT (INC VAT):</Text>
        <Currency value={creditSummary.creditAmountIncVat} />
      </Box>
    </Box>
  );
};
