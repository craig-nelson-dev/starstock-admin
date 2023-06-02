import { Flex, Text } from 'rebass';

const boxStyle = {
  fontSize: 1,
  fontWeight: 'bold',
  sx: { textTransform: 'uppercase', textAlign: 'center' },
};

export const InvoiceItemsPrintHeader = () => (
  <Flex
    flex="1"
    flexDirection="row"
    justifyContent="space-evenly"
    sx={{ display: 'flex', borderBottom: '1px solid #cfcfcf' }}
    pb={2}
    mb={2}
  >
    <Flex justifyContent="left" flex="1">
      <Text {...boxStyle}>Item Description</Text>
    </Flex>

    <Flex justifyContent="center" flex="1">
      <Text {...boxStyle}>Unit Price Ex Vat</Text>
    </Flex>
    <Flex justifyContent="center" flex="1">
      <Text {...boxStyle}>Qty</Text>
    </Flex>
    <Flex justifyContent="center" flex="1">
      <Text {...boxStyle}>Total Ex Vat</Text>
    </Flex>
    <Flex justifyContent="center" flex="1">
      <Text {...boxStyle}>Vat (%)</Text>
    </Flex>
    <Flex justifyContent="center" flex="1">
      <Text {...boxStyle}>Total Inc Vat</Text>
    </Flex>
  </Flex>
);
