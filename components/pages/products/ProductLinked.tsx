import DslProductsTableGroup from './DslProductsTableGroup';
import { RepositoryFactory } from 'dsl-admin-base/repositories/RepositoryFactory';
import { usePageData } from 'dsl-admin-base/hooks/fetch-page-data';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { notification } from 'antd';
import {
  DslProduct,
  useUpdateAdminSimilarProductsMutation,
  useUpdateAdminYouMightAlsoLikeProductsMutation,
} from 'dsl-admin-base';

interface Props {
  callSubmitFunction: boolean;
}

const onSuccessMessage = () =>
  notification.success({
    message: 'Success',
    description: `Your selected items have been saved successfully`,
  });
const onFailureMessage = () =>
  notification.warn({
    message: 'Error',
    description: `Failed to save products`,
  });

export const ProductsLinked: React.FC<Props> = ({ callSubmitFunction }) => {
  const router = useRouter();
  const productId = router.query.id;
  const [reload, setReload] = useState(false);
  const isFirstRun = useRef(true);

  const { loading, data } = usePageData(
    () => RepositoryFactory.get('product').getProductsLinked(Number(productId)),
    ['id'],
    [reload],
  );
  const [manualLoading, setManualLoading] = useState(false);
  const doReload = useCallback(() => setReload((r) => !r), []);
  const [updateAdminYouMightAlsoLikeProducts] = useUpdateAdminYouMightAlsoLikeProductsMutation();
  const [updateAdminSimilarProducts] = useUpdateAdminSimilarProductsMutation();

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    saveLinkedProducts();
  }, [callSubmitFunction]);

  const [youMightAlsoLike, setYouMightAlsoLike] = useState(
    (data?.youMightAlsoLike || []) as DslProduct[],
  );
  const [similar, setSimilar] = useState((data?.similar || []) as DslProduct[]);

  useEffect(() => {
    setYouMightAlsoLike(data?.youMightAlsoLike || []);
    setSimilar(data?.similar || []);
  }, [data]);

  const saveLinkedProducts = async () => {
    setManualLoading(true);
    try {
      await updateAdminYouMightAlsoLikeProducts({
        variables: {
          input: {
            productID: Number(productId),
            relatedProductsIDs: youMightAlsoLike?.map(({ id }) => Number(id)) || [],
          },
        },
      });
      await updateAdminSimilarProducts({
        variables: {
          input: {
            productID: Number(productId),
            relatedProductsIDs: similar?.map(({ id }) => Number(id)) || [],
          },
        },
      });
      onSuccessMessage();
    } catch (error) {
      onFailureMessage();
    }
    doReload();
    setManualLoading(false);
  };

  return (
    <>
      <DslProductsTableGroup
        title="You might also like"
        items={youMightAlsoLike}
        loading={loading || manualLoading}
        useDefault={false}
        actor={setYouMightAlsoLike}
      />
      <DslProductsTableGroup
        title="Similar Products"
        items={similar}
        loading={loading || manualLoading}
        useDefault={true}
        actor={setSimilar}
      />
    </>
  );
};
