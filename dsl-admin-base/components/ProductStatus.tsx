import { Status } from '../graphql/generated/graphql';
import { Box } from 'rebass';

interface Props {
  status: Status;
}

export const ProductStatus: React.FC<Props> = ({ status }) => {
  const colors: { [key: number]: string } = {
    0: 'promoGreen',
    1: 'promoOrange',
    2: 'promoGreen',
    3: 'promoOrange',
  };

  return (
    <>
      <Box
        sx={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: colors[status.value] }}
      ></Box>
    </>
  );
};
