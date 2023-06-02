import { DslOrder, OrderBody } from 'dsl-admin-base';
import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { format } from 'date-fns';

interface InvoiceTopBannerProps {
  order: DslOrder;
  parentView?: boolean;
  body?: OrderBody;
}

const tableRow = {
  alignItems: 'center',
  justifyContent: 'space-between',
  mb: 0,
};

const tableHead = {
  fontSize: 1,
  fontWeight: 'bold',
  mb: 2,
  sx: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
};

const tableText = {
  fontSize: 1,
  mt: 2,
  sx: {
    textTransform: 'uppercase',
  },
};

export const InvoiceTopBanner: React.FC<InvoiceTopBannerProps> = ({ order }) => {
  const deliveryDate = format(
    new Date(order.orderBody?.[0]?.selectedDeliveryDate || ''),
    'dd/MM/yyyy',
  );
  const orderDate = format(new Date(order.createdOn), 'dd/MM/yyyy');
  /* TODO: Invoice Number */
  const invoiceNumber = order.payments?.[0]?.invoiceNumber || '';

  const renderAddress = (items: Array<string | undefined>) => {
    return (
      <>
        {items
          .filter((o) => o)
          .map((o) => {
            return (
              <Text key={o} fontSize={1}>
                {o}
              </Text>
            );
          })}
      </>
    );
  };

  console.log('order', order);

  return (
    <Box mt={0}>
      <Flex flexDirection="row" justifyContent="space-between" sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 4,
            borderBottom: 'orderTable',
            display: 'block',
            height: 1,
            backgroundColor: 'black',
          }}
          width="100%"
        />
        <Flex flexDirection="column" {...tableRow}>
          <Text {...tableHead}>Order Number</Text>
          <Text {...tableText}>{order?.reference}</Text>
        </Flex>
        <Flex flexDirection="column" {...tableRow}>
          <Text {...tableHead}>Invoice Date</Text>
          <Text {...tableText}>{orderDate}</Text>
        </Flex>
        <Flex flexDirection="column" {...tableRow}>
          <Text {...tableHead}>Delivery Date</Text>
          <Text {...tableText}>{deliveryDate}</Text>
        </Flex>
        <Flex flexDirection="column" {...tableRow}>
          <Text {...tableHead}>Invoice Number</Text>
          <Text {...tableText}>{invoiceNumber}</Text>
        </Flex>
      </Flex>
      <Flex mt={4} flexDirection="row">
        <Box sx={{ display: 'flex' }}>
          <Text mb="2" width={190}>
            <Text fontSize={1} fontWeight="bold">
              Delivery Address:
            </Text>
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
          <Text mb="2" width={190} sx={{ ml: 3 }}>
            <Text fontSize={1} fontWeight="bold">
              Billing Address:
            </Text>
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
      </Flex>
    </Box>
  );
};
