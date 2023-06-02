import { Form, Space } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { Store } from 'antd/lib/form/interface';
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { Box, Text } from 'rebass';
import { useDebouncedCallback } from 'use-debounce';
import { useEvent } from '../hooks/event';
import { parseQueryFromRouteQuery } from '../utils/helper';

interface Props {
  initialValues?: any;
  advanceSearch?: boolean;
}

export const SimpleSearch: React.FC<Props> = ({
  children,
  initialValues = {},
  advanceSearch = false,
}) => {
  const router = useRouter();
  const formInstance = useRef<FormInstance>(null);
  const openAdvancedSearchForm = useEvent('OPEN_ADVANCED_SEARCH');

  const onValuesChange = useDebouncedCallback((...args: Store[]) => {
    let values = { ...args[1] } as any;

    for (let [key, value] of Object.entries(values)) {
      if (value instanceof moment) {
        values[key] = moment(value).format('DD/MM/YYYY');
      }
    }
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, ...values, currentPage: 1 },
    });
  }, 600).callback;

  const clearAll = async () => {
    await router.replace({ pathname: router.pathname, query: {} });
    formInstance?.current?.resetFields();
  };

  return (
    <Box sx={{ borderBottom: 'standard', py: 3 }}>
      <Form
        layout="vertical"
        onValuesChange={onValuesChange}
        ref={formInstance}
        initialValues={{ ...initialValues, ...parseQueryFromRouteQuery(router.query) }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            '.ant-form-item': { marginBottom: 0 },
          }}
        >
          <Box sx={{ mr: 4 }}>
            <Space size={15} className="simple-search-inputs">
              {children}
            </Space>
          </Box>
          <Box
            style={{ justifyContent: 'end' }}
            sx={{ display: 'flex', pb: 2, alignSelf: 'flex-end' }}
          >
            {advanceSearch && (
              <Text onClick={openAdvancedSearchForm} variant="textBtn" sx={{ mr: 3 }}>
                Advanced Search
              </Text>
            )}
            <Text onClick={clearAll} variant="textBtn">
              Clear All
            </Text>
          </Box>
        </Box>
      </Form>
    </Box>
  );
};
