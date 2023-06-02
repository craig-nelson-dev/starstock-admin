import { DslOrder } from 'dsl-admin-base';
import { Box, Text } from 'rebass';
import _ from 'lodash';

interface Props {
  order: DslOrder;
}

export const InvoiceOrderPromotion: React.FC<Props> = ({ order }) => {
  const promotions = _.uniqBy(order?.promotions || [], (o) => o.promotionId);

  return (
    <>
      <Box
        sx={{
          pb: 4,
          mb: 4,
          borderColor: '#cfcfcf',
          borderWidth: 0,
          borderBottomWidth: 1,
          borderStyle: 'solid',
        }}
      >
        <Text
          fontSize="sub"
          lineHeight="s"
          fontWeight="semiBold"
          mb={2}
          sx={{ textTransform: 'uppercase' }}
        >
          Promotions Applied
        </Text>

        {promotions.map((o) => {
          return <Text sx={{ mb: 2, fontSize: 'sub' }}>{o.promotionName}</Text>;
        })}
      </Box>
    </>
  );
};
