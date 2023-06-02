import { DslOrder } from 'dsl-admin-base';
import { Box, Text } from 'rebass';

interface Props {
  order: DslOrder;
}

export const InvoicePayment: React.FC<Props> = ({ order }) => {
  const paymentMethod = order?.payments?.[0].method;
  return (
    <Box>
      <Text fontSize={1} fontWeight="bold" mb={2} sx={{ textTransform: 'uppercase' }}>
        Payment Method
      </Text>
      <Text fontSize={1} sx={{ textTransform: 'uppercase' }} fontWeight={500}>
        {paymentMethod === 'card' ? 'credit / debit card' : paymentMethod}
      </Text>
    </Box>
  );
};
