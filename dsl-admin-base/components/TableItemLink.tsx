import Link from 'next/link';
import { Button } from 'antd';
import { useRouter } from 'next/router';

interface Props {
  label: string;
  id: string | number;
}

export const TableItemLink: React.FC<Props> = ({ label, id }) => {
  const router = useRouter();
  const href = `${router.pathname}/${id}`;
  return (
    <Link href={href}>
      <Button
        type="link"
        href={href}
        style={{ padding: 0, whiteSpace: 'normal', textAlign: 'left', lineHeight: '1.5em' }}
      >
        {label}
      </Button>
    </Link>
  );
};
