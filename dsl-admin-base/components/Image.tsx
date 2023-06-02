import { CSSProperties } from 'react';
import { PictureOutlined } from '@ant-design/icons';

interface Props {
  src?: string | null;
  style: CSSProperties;
}

export const Image: React.FC<Props> = ({ src, style }) => {
  return (
    <div style={style}>
      {src ? (
        <img src={src} style={{ maxWidth: '100%' }}></img>
      ) : (
        <PictureOutlined
          style={{ fontSize: '50px', color: 'rgba(0, 0, 0, 0.3)' }}
        ></PictureOutlined>
      )}
    </div>
  );
};
