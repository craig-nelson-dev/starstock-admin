import { Breadcrumb } from 'antd';
import { BreadcrumbItem } from '../models/breadcrumb';
import Router from 'next/router';
import { Box } from 'rebass';
import AngleRightIcon from '../icons/angle-right-solid.svg';

interface Props {
  items: BreadcrumbItem[];
}

export const AppBreadcrumb: React.FC<Props> = ({ items }) => {
  return (
    <Box>
      <Breadcrumb separator={<AngleRightIcon />}>
        {items.map((item, i) => {
          return (
            <Breadcrumb.Item
              href={item.href}
              key={item.href}
              onClick={(e) => {
                e.preventDefault();
                if (i !== items.length - 1) {
                  Router.push(item.href);
                }
              }}
            >
              {item.label}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </Box>
  );
};
