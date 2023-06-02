import { Row, Col, Pagination, Select, Menu } from 'antd';
import { useState, useEffect, ReactNode } from 'react';
const { Option } = Select;
import { OptionItem } from '../models/option';
import { PER_PAGE_OPTIONS } from '../utils/constant';
import PerPageConfig from '../utils/per-page-config';
import { useRouter } from 'next/router';
import { SettingDropdown } from './SettingDropdown';
import { notification } from 'antd';
import { Box } from 'rebass';

export interface Props {
  storageKey: string;
  totalItems?: number;
  showCount?: boolean;
  type?: string;
  menu?: OptionItem[];
  qtySelected?: number;
  onClickBulk?: (value: string) => void;
  noPagination?: boolean;
  topLeftAction?: ReactNode;
}

type ListenerCb = (p: any) => void;
const usePaginationListener = () => {
  const router = useRouter();

  const [perPageChangecb, setPerPageChangecb] = useState<undefined | ListenerCb>();
  const [currentPageChangecb, setCurrentPageChangecb] = useState<undefined | ListenerCb>();

  useEffect(() => {
    const handleRouteChange: (url: string, p?: { shallow: boolean }) => void = (url: any) => {
      const params = url.split('?')[1];
      if (!params) return;
      const urlParams = params
        .split('&')
        .map((el: string) => el.split('='))
        .reduce((json: { [k: string]: any }, next: [string, string]) => {
          json[next[0]] = next[1];
          return json;
        }, {});

      if (urlParams.perPage && perPageChangecb) {
        const toSend = parseInt(urlParams.perPage.toString());
        perPageChangecb(toSend);
      }

      if (urlParams.currentPage && currentPageChangecb) {
        const toSend = parseInt(urlParams.currentPage.toString());
        currentPageChangecb(toSend);
      }
    };
    router.events.on('routeChangeStart', handleRouteChange);

    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [perPageChangecb, currentPageChangecb]);

  return {
    onPerPageChange: (cb: ListenerCb) => {
      setPerPageChangecb(() => cb);
    },
    onCurrentPageChange: (cb: ListenerCb) => {
      setCurrentPageChangecb(() => cb);
    },
    stopListening: () => {
      setPerPageChangecb(undefined);
      setCurrentPageChangecb(undefined);
    },
  };
};

export const AppPagination: React.FC<Props> = ({
  storageKey,
  totalItems,
  type,
  onClickBulk,
  menu,
  qtySelected,
  noPagination,
  topLeftAction,
  showCount,
}) => {
  const router = useRouter();
  const paginationListener = usePaginationListener();
  const [perPage, setPerpage] = useState(PerPageConfig.getPerPage(storageKey));
  const pageInRouteParam = parseInt(router.query.currentPage as string) || 1;
  const [page, setPage] = useState(pageInRouteParam);

  const onChangePerPage = (value: number) => {
    PerPageConfig.setPerPage(storageKey, value);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, perPage: value, currentPage: 1 },
    });
  };

  const onChangePage = (value: number) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, currentPage: value },
    });
  };

  useEffect(() => {
    paginationListener.onCurrentPageChange((newCurrentPage) => {
      setPage(newCurrentPage);
    });
    paginationListener.onPerPageChange((newPerPage) => {
      setPerpage(newPerPage);
    });

    return () => paginationListener.stopListening();
  }, []);

  useEffect(() => {
    setPage(pageInRouteParam);
  }, [pageInRouteParam]);

  const settingMenu = (
    <Menu>
      {(menu || []).map((item) => {
        return (
          <Menu.Item
            key={item.value as string}
            onClick={() => {
              if (!qtySelected) {
                notification.warn({
                  message: 'Error',
                  description: `Please select ${(type || '').toLocaleLowerCase()}`,
                });
                return;
              }
              if (onClickBulk) {
                onClickBulk(item.value as string);
              }
            }}
          >
            {item.label}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <Row justify="space-between" style={{ marginBottom: 10 }} align="middle">
      <Col>
        {topLeftAction}
        {showCount && (
          <Box sx={{ fontWeight: 600 }}>
            {totalItems} {type}
          </Box>
        )}
      </Col>
      <Col>
        <Row justify="space-between" style={{ marginBottom: 10 }} align="middle">
          {!noPagination && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Select
                defaultValue={perPage}
                value={perPage}
                style={{ width: 100, marginRight: 'auto' }}
                onChange={onChangePerPage}
              >
                {PER_PAGE_OPTIONS.map((option: OptionItem) => {
                  return (
                    <Option value={option.value as string} key={option.value as string}>
                      {option.label}
                    </Option>
                  );
                })}
              </Select>
              <Pagination
                simple
                total={totalItems}
                showSizeChanger
                current={page}
                onChange={onChangePage}
                pageSize={perPage}
              ></Pagination>
            </Box>
          )}
          {menu && (
            <Col>
              <SettingDropdown big overlay={settingMenu}></SettingDropdown>
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
};
