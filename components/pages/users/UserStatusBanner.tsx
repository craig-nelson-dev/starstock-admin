import { Box, Text } from 'rebass';
import { Alert, Button, Form, InputNumber } from 'antd';
import { DslUser, StatusValue } from 'dsl-admin-base';

interface UserStatusBannerProps {
  user: DslUser;
}

export const UserStatusBanner: React.FC<UserStatusBannerProps> = (props) => {
  const { user } = props;

  if (user.status?.value === StatusValue.ACTIVE) {
    return null;
  }

  return (
    <Box mt="3" mb="4">
      <Form.Item name="statusValue" initialValue={StatusValue.ACTIVE} style={{ display: 'none' }}>
        <InputNumber />
      </Form.Item>
      <Alert
        message={
          <Box variant="userStatusAlert">
            <Text>
              This account is currently{' '}
              {user.status?.value === StatusValue.CLOSED ? 'closed' : 'disabled'}. The user is not
              currently able to log into the storefront.
            </Text>
            {user.status?.value !== StatusValue.CLOSED && (
              <Button className="text-caps" htmlType="submit">
                Enable
              </Button>
            )}
          </Box>
        }
        type="error"
        closable={false}
        className="red-alert"
      />
    </Box>
  );
};
