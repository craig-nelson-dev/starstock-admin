import {
  GetAdminOrdersWeeklyStatsQuery,
  GetAdminOrdersWeeklyStatsQueryVariables,
  GetAdminOverviewQuery,
  GetAdminOverviewQueryVariables,
  GetAdminTopProductsQueryVariables,
  GetAdminTopProductsQuery,
  GetAdminTopPromotionsQuery,
  GetAdminTopPromotionsQueryVariables,
  GetAdminOrdersOverviewQuery,
  GetAdminOrdersOverviewQueryVariables,
} from '../graphql/generated/graphql';
import getAdminOrdersWeeklyStats from '../graphql/queries/get-admin-orders-weekly-stats.graphql';
import getAdminOverview from '../graphql/queries/get-admin-overview.graphql';
import getAdminTopPromotions from '../graphql/queries/get-admin-top-romotions.graphql';
import getAdminTopProducts from '../graphql/queries/get-admin-top-products.graphql';
import getAdminOrdersOverview from '../graphql/queries/get-admin-orders-overview.graphql';
import Repository from './Repository';

export interface UserOutlets {
  id: string;
  name: string;
  postcode: string;
  status: string;
}

export default {
  async getAdminOrdersWeeklyStats(): Promise<
    GetAdminOrdersWeeklyStatsQuery['getAdminOrdersWeeklyStats']
  > {
    const { data } = await Repository.query<
      GetAdminOrdersWeeklyStatsQuery,
      GetAdminOrdersWeeklyStatsQueryVariables
    >({
      query: getAdminOrdersWeeklyStats,
    });

    return data.getAdminOrdersWeeklyStats;
  },
  async getAdminOverview(
    i: GetAdminOverviewQueryVariables['i']['filters'],
  ): Promise<GetAdminOverviewQuery['getAdminOverview']> {
    const { data } = await Repository.query<GetAdminOverviewQuery, GetAdminOverviewQueryVariables>({
      query: getAdminOverview,
      variables: { i: { filters: i } },
    });

    return data.getAdminOverview;
  },
  async getAdminTopProducts(
    i: GetAdminTopProductsQueryVariables['i']['filters'],
  ): Promise<GetAdminTopProductsQuery['getAdminTopProducts']> {
    const { data } = await Repository.query<
      GetAdminTopProductsQuery,
      GetAdminTopProductsQueryVariables
    >({
      query: getAdminTopProducts,
      variables: { i: { filters: i } },
    });

    return data.getAdminTopProducts;
  },

  async getAdminTopPromotions(
    i: GetAdminTopPromotionsQueryVariables['i']['filters'],
  ): Promise<GetAdminTopPromotionsQuery['getAdminTopPromotions']> {
    const { data } = await Repository.query<
      GetAdminTopPromotionsQuery,
      GetAdminTopPromotionsQueryVariables
    >({
      query: getAdminTopPromotions,
      variables: { i: { filters: i } },
    });

    return data.getAdminTopPromotions;
  },
  async getAdminOrdersOverview(
    i: GetAdminOrdersOverviewQueryVariables['i']['filters'],
  ): Promise<GetAdminOrdersOverviewQuery['getAdminOrdersOverview']> {
    const { data } = await Repository.query<
      GetAdminOrdersOverviewQuery,
      GetAdminOrdersOverviewQueryVariables
    >({
      query: getAdminOrdersOverview,
      variables: { i: { filters: i } },
    });

    return data.getAdminOrdersOverview;
  },
};
