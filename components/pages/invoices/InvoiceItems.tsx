import { DslOrderItemExtended } from 'dsl-admin-base';
import { Box, Flex } from 'rebass';
import { InvoiceItemsPrintHeader } from './InvoiceItemsHeader';
import { InvoiceItemsRow } from './InvoiceItemsRow';

interface Props {
  items: DslOrderItemExtended[];
}

export const InvoiceItemsPrint: React.FC<Props> = ({ items = [] }) => {
  return (
    <>
      <Box my={4} sx={{ borderBottom: '1px solid #cfcfcf', height: 1 }} />
      <Box flex={1} mb={0}>
        <Flex
          py={2}
          flexDirection="column"
          sx={{
            boxShadow: 'none',
          }}
        >
          <InvoiceItemsPrintHeader />
          {items.map((x) => (
            <InvoiceItemsRow key={x.id} item={x} />
          ))}
        </Flex>
      </Box>
      <Box my={4} sx={{ borderBottom: '1px solid #cfcfcf', height: 1 }} />
    </>
  );
};
