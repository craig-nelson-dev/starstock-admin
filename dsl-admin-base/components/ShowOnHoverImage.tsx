import { Box, Image } from 'rebass';
import ImageIcon from '../icons/image-solid.svg';

interface Props {
  src?: string;
}

export const ShowOnHoverImage: React.FC<Props> = ({ src }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        '.hover-img': { display: 'none' },
        ':hover': { '.hover-img': { display: 'block' } },
      }}
    >
      {src && (
        <Image
          src={src}
          className="hover-img"
          style={{
            border: '2px solid #ccc',
            backgroundColor: 'white',
            padding: 8,
            maxHeight: 200,
            maxWidth: 200,
            position: 'absolute',
            zIndex: 100,
            bottom: '0%',
            left: 20,
          }}
        ></Image>
      )}
      {src ? (
        <Image
          src={src}
          style={{
            width: 30,
            height: 30,
            objectFit: 'contain',
          }}
        ></Image>
      ) : (
        <ImageIcon />
      )}
    </Box>
  );
};
