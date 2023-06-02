import { Currency, DslOrderItemExtended } from 'dsl-admin-base';
import { Box, Flex, Text } from 'rebass';

interface Props {
  item: DslOrderItemExtended;
}

export const InvoiceItemsRow: React.FC<Props> = ({ item }) => {
  const unitPrice = item.discount ? item.discount.unitPrice : item.price;
  const totalTax = item.discount ? item.discount.totalTax : item.totalTax;
  const totalExVat = unitPrice * item.qty;
  const totalIncludeVat = totalExVat + totalTax;

  return (
    <Flex flexDirection="row" mt={3} flex="1" height={132}>
      <Box sx={{ flex: 1 }}>
        <Text fontSize={1} textAlign="left">
          {item.name}
        </Text>
        <Text
          fontSize="tiny"
          lineHeight="l"
          textAlign="left"
          sx={{ textTransform: 'uppercase', color: 'grey' }}
        >
          Code {item.code}
        </Text>
      </Box>

      <Box sx={{ flex: 1 }}>
        <Text fontSize={1} textAlign="center">
          <Currency value={unitPrice} />
        </Text>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Text fontSize={1} textAlign="center">
          {item.qty}
        </Text>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Text fontSize={1} textAlign="center">
          <Currency value={totalExVat} />
        </Text>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Text fontSize={1} textAlign="center">
          {item.taxRate}
        </Text>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Text fontSize={1} textAlign="center">
          <Currency value={totalIncludeVat} />
        </Text>
      </Box>
    </Flex>
  );
};
