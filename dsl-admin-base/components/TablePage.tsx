import { ReactNode } from 'react';
import { Props as AppPaginationProps, AppPagination } from './AppPagination';

interface Props {
  pagination: AppPaginationProps;
}

export const TablePage: React.FC<Props> = ({ pagination, children }) => {
  const { topLeftAction, ...rest } = pagination;
  const renderPagination = (params: { topLeftAction?: ReactNode; bottom?: boolean }) => {
    return (
      <AppPagination
        {...rest}
        showCount={params.bottom ? false : rest.showCount}
        topLeftAction={params.topLeftAction}
      ></AppPagination>
    );
  };

  return (
    <>
      {renderPagination({ topLeftAction })}
      {children}
      {renderPagination({ bottom: true })}
    </>
  );
};
