import { Spin } from 'antd';

export const AppSpin: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px 0' }}>
      <Spin size="large"></Spin>
    </div>
  );
};
