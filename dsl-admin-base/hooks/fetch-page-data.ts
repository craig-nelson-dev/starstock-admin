import { useState, useEffect } from 'react';
import { notification } from 'antd';
import { useRouter } from 'next/router';

export function usePageData<T>(
  request: () => Promise<T> | void,
  deps: string[] = [],
  depValues: Array<any> = [],
) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await request();
        if (response) {
          setData(response);
        }
      } catch (e) {
        console.log(e);
        notification.warn({
          message: 'Error',
          description: 'Error occurred',
        });
      }
      setLoading(false);
    };

    fetchData();
  }, [...deps.map((dep) => router.query[dep]), ...depValues]);

  return { loading, data };
}
