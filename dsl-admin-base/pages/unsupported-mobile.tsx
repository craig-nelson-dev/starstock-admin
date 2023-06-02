import { Box, Text } from 'rebass';

export const UnSupportedMobile: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'brandTwo',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        fontWeight: 500,
        textTransform: 'uppercase',
        px: 4,
      }}
    >
      <Text sx={{ fontWeight: 'bold', fontSize: 5 }}>oops...</Text>
      <Text sx={{ fontSize: 3, mt: 4, mb: 3 }}>
        This admin panel cannot be viewed on a mobile device.
      </Text>
      <Text sx={{}}>Please use a desktop device for access</Text>
    </Box>
  );
};
