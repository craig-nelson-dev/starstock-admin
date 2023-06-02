import formatCurrency from '../utils/currency';

interface Props {
  value: any;
  prefix?: string;
}

export const Currency: React.FC<Props> = ({ value, prefix }) => {
  return <span>{formatCurrency(value, prefix)}</span>;
};
