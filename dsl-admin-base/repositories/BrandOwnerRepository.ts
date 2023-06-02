import {
  BrandOwner,
  GetAdminDistributorsQuery,
  GetAdminDistributorsQueryVariables,
  GetBrandOwnerQuery,
  GetBrandOwnerQueryVariables,
} from '../graphql/generated/graphql';
import getOrdersQuery from '../graphql/queries/brand-owners.graphql';
import getDistributorsQuery from '../graphql/queries/get-distributors.graphql';
import Repository from './Repository';

export default {
  async get(): Promise<GetBrandOwnerQuery['getBrandOwner'] | null> {
    try {
      const { data } = await Repository.query<GetBrandOwnerQuery, GetBrandOwnerQueryVariables>({
        query: getOrdersQuery,
      });

      return (data.getBrandOwner || []) as any;
    } catch (e) {
      console.log(e);
      // Mock data
      return [1, 2, 3, 5].map((o) => ({ id: o })) as any;
    }
  },

  async distributors(): Promise<BrandOwner[] | null> {
    try {
      const { data } = await Repository.query<
        GetAdminDistributorsQuery,
        GetAdminDistributorsQueryVariables
      >({
        query: getDistributorsQuery,
      });

      return (data.getAdminDistributors || []) as BrandOwner[];
    } catch (e) {
      return null;
    }
  },
};
