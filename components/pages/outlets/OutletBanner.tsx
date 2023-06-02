import { Row } from 'antd';
import { Date, DslOutlet } from 'dsl-admin-base';
import React from 'react';
import { Box, Text } from 'rebass';

interface OutletBannerProps {
  outlet: DslOutlet;
}
const DateFormat = 'DD/MM/YYYY HH:mm';

export const OutletBanner: React.FC<OutletBannerProps> = (props) => {
  const { outlet } = props;
  const primaryUser = outlet?.outletUsers ? outlet.outletUsers[0] : null;

  return (
    <Box mt="3" mb="4" bg="lightGrey" px={4} py={3}>
      <Row justify="space-between" align="middle">
        <Box>
          <Text mb="2">Outlet ID: {outlet.id}</Text>
          <Text mb="2">Account No: {outlet.accountNumber || 'N/A'}</Text>
          <Text>
            Primary User:{' '}
            {primaryUser ? `${primaryUser.user.firstName} ${primaryUser.user.lastName}` : 'N/A'}
            <Text fontWeight="bold" display="inline-block">
              {outlet.companyName}
            </Text>
          </Text>
        </Box>
        <Box>
          <Text mb="2">
            Date Created: <Date value={outlet.createdOn} format={DateFormat} />
          </Text>
          <Text mb="2">
            Last Login:{' '}
            {primaryUser?.user.lastLogin ? (
              <Date value={primaryUser.user.lastLogin} format={DateFormat} />
            ) : (
              'N/A'
            )}
          </Text>
          <Text>
            Last Ordered:{' '}
            {outlet.lastOrdered ? <Date value={outlet.lastOrdered} format={DateFormat} /> : 'N/A'}
          </Text>
        </Box>
      </Row>
    </Box>
  );
};
