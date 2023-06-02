import { Box, Text } from 'rebass';
import {
  useFetchTableData,
  RepositoryFactory,
  AppBreadcrumb,
  BreadcrumbItem,
  DslProduct,
  useUpdateAdminUpsellProductsMutation,
  ResolveErrorMessageFn,
} from 'dsl-admin-base';
import { PAGES } from 'utils/constant';
import React, { useEffect, useState } from 'react';
import DslProductsTableGroup from 'components/pages/products/DslProductsTableGroup';
import { Button, notification, Row } from 'antd';

interface Props {}

const UpsellsPage: React.FC<Props> = () => {
  const { loading, data } = useFetchTableData(RepositoryFactory.get('upsells').get, PAGES.UPSELLS);
  const [updateUpsellProducts] = useUpdateAdminUpsellProductsMutation();

  const [homeProducts, setHome] = useState<DslProduct[]>([]);
  const [basketProducts, setBasket] = useState<DslProduct[]>([]);
  const [orderProducts, setOrder] = useState<DslProduct[]>([]);

  useEffect(() => {
    if (data) {
      if (data?.home) {
        setHome(((data.home || []) as unknown) as DslProduct[]);
      }
      if (data?.basket) {
        setBasket(((data.basket || []) as unknown) as DslProduct[]);
      }
      if (data?.order) {
        setOrder(((data.order || []) as unknown) as DslProduct[]);
      }
    }
  }, [data]);

  const saveData = () => {
    const promises = [];
    const basketItems = basketProducts.map((p) => parseInt(p.id));
    const a = updateUpsellProducts({
      variables: {
        input: {
          typeArg: 'cart',
          relatedProductsIDs: basketItems,
        },
      },
    });
    promises.push(a);

    const homeItems = homeProducts.map((p) => parseInt(p.id));
    const b = updateUpsellProducts({
      variables: {
        input: {
          typeArg: 'homepage',
          relatedProductsIDs: homeItems,
        },
      },
    });
    promises.push(b);

    const orderItems = orderProducts.map((p) => parseInt(p.id));
    const c = updateUpsellProducts({
      variables: {
        input: {
          typeArg: 'forgotten',
          relatedProductsIDs: orderItems,
        },
      },
    });
    promises.push(c);

    Promise.all(promises).then(() => {
      notification.success({
        message: 'Saved',
        description: 'Your change has been saved',
      });
    });
  };

  const resolveErrorMessage: ResolveErrorMessageFn = ({ reason, props }) => {
    if (reason == 'MAX_SELECTED_PRODUCTS') {
      return `This upsell section has a limit of ${props.maxSelectedProducts} products.`;
    }
    return 'Error';
  };

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Upsells',
      href: '/upsells',
    },
  ];

  return (
    <Box>
      <Box>
        <Text variant="pageHeading">
          <Row>
            <Box>
              <AppBreadcrumb items={breadcrumbs}></AppBreadcrumb>
            </Box>
          </Row>
          <Box>
            <Button
              onClick={saveData}
              type="primary"
              className="text-caps"
              style={{ padding: '4px 24px' }}
            >
              <Text letterSpacing="0.5px">Save</Text>
            </Button>
          </Box>
        </Text>
      </Box>
      <DslProductsTableGroup
        title="Home Page - Featured Products"
        maxSelectedProducts={4}
        resolveErrorMessage={resolveErrorMessage}
        items={homeProducts || []}
        loading={loading}
        useDefault={false}
        actor={setHome}
      />
      <DslProductsTableGroup
        title="Basket Page - You might also like"
        resolveErrorMessage={resolveErrorMessage}
        maxSelectedProducts={4}
        items={basketProducts || []}
        loading={loading}
        useDefault={false}
        actor={setBasket}
      />
      <DslProductsTableGroup
        title="Order Confirmation Page - Forgot Something?"
        resolveErrorMessage={resolveErrorMessage}
        maxSelectedProducts={4}
        items={orderProducts || []}
        loading={loading}
        useDefault={false}
        actor={setOrder}
      />
    </Box>
  );
};

export default UpsellsPage;
