import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PerPageConfig from '../utils/per-page-config';
import { getQuery } from '../utils/route-query';
import { notification } from 'antd';

export function useFetchTableData<T>(
  fn: (params: any) => Promise<T>,
  name: string,
  params: any = {},
) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const showErrorMessage = () => {
    notification.error({
      message: 'Error',
      description: 'Error occurred',
    });
  };

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const fnParameter = {
          perPage: PerPageConfig.getPerPage(name),
          ...params,
          ...getQuery(),
        };
        const data = await fn(fnParameter);
        setData(data);
      } catch (e) {
        console.log(e);
        showErrorMessage();
      }
      setLoading(false);
    }
    loadData();
  }, [router.query]);

  return { loading, data };
}
