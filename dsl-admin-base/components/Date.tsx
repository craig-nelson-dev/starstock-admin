import moment from 'moment';
import { Text } from 'rebass';

interface Props {
  value: string;
  format?: string;
}

export const Date: React.FC<Props> = ({ value, format }) => {
  return <Text as="span">{moment(value).format(format || 'DD/MM/YYYY')}</Text>;
};
