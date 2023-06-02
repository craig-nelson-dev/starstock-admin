import { Col, Row } from 'antd';
import { CreditNote, CreditNoteItem, Currency, Date, DslOrder } from 'dsl-admin-base';
import React, { useMemo } from 'react';
import { Box, Text } from 'rebass';
import _ from 'lodash';
import { getCreditSummaryData } from '../orders/CreditSummary';

interface CreditTopBannerProps {
  creditNote: CreditNote;
  order: DslOrder | null;
}

export const CreditTopBanner: React.FC<CreditTopBannerProps> = ({ creditNote, order }) => {
  const amountPaid = useMemo(() => {
    const { creditAmountIncVat } = getCreditSummaryData(creditNote?.items as CreditNoteItem[]);
    return creditAmountIncVat;
  }, [creditNote]);

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
            <Text mb="2">Credit Note Number: {creditNote?.creditNumber}</Text>
            <Text mb="2">
              Credit Note Date: {creditNote?.createdOn && <Date value={creditNote?.createdOn} />}
            </Text>
            <Text mb="2">Order Number: {order?.reference}</Text>

            <Text mb="2">
              Total Credit amount inc VAT: <Currency value={amountPaid} />
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
