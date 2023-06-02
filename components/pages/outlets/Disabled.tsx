import React from 'react';
import { Box, Flex, Text } from 'rebass';

interface Props {}

export const Disabled: React.FC<Props> = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffeef0',
        my: 3,
        px: 4,
        py: 3,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#fe5568',
        color: '#fe5568',
      }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text mr={4}>This outlet is disabled.</Text>
      </Flex>
    </Box>
  );
};
