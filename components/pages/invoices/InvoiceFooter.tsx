import { Box, Text } from 'rebass';

export const InvoiceFooter = () => {
  return (
    <Box mt={3}>
      <Text fontSize={1} sx={{ textTransform: 'uppercase' }}>
        VAT Reg No: 167 6231 95
      </Text>
      <Text fontSize={1} sx={{ textTransform: 'uppercase' }}>
        Starstock LTD, Dane Mill, Broadhurst Lane, Congleton, Cheshire, CW12 1LA
      </Text>
      <Text fontSize={1} sx={{ textTransform: 'uppercase' }}>
        Customer Services: support@starstock.co.uk
      </Text>
    </Box>
  );
};
