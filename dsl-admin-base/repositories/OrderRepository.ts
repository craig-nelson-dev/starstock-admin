import {
  BrandOwnerOrderWeeklyStats,
  DslOrder,
  GetBrandOwnerOrdersWeeklyStatsQuery,
  GetBrandOwnerOrdersWeeklyStatsQueryVariables,
  GetOrderDetailsQuery,
  GetOrderDetailsQueryVariables,
  GetOrdersQuery,
  GetOrdersQueryVariables,
} from '../graphql/generated/graphql';
import getBrandOwnerOrdersWeeklyStats from '../graphql/queries/get-brand-owner-orders-weekly-stats.graphql';
import GetOrderDetails from '../graphql/queries/order-details.graphql';
import getOrdersQuery from '../graphql/queries/orders.graphql';
import Repository from './Repository';
import { ParsedUrlQuery } from 'querystring';
import { getListingQuery } from '../utils/helper';
import { getOrderWithPromotion } from '../utils/promotions';

interface OrderResult {
  totalCount: number;
  adminOrders: DslOrder[];
}

const OrderRepository = {
  async get(query: ParsedUrlQuery): Promise<OrderResult | null> {
    try {
      const params = getListingQuery(query);
      const isPodPage = !!params.isPodPage;
      const hasDateFilter = params.dateFrom || params.dateTo;
      const hasPriceFilter = params.totalFrom || params.totalTo;

      const defaultSortBy = {
        by: isPodPage ? 'delivered_date' : 'created_on',
        direction: 'desc',
      };

      const { data } = await Repository.query<GetOrdersQuery, GetOrdersQueryVariables>({
        query: getOrdersQuery,
        variables: {
          prams: {
            pagination: params.pagination,
            sort: params.sort || defaultSortBy,
            search: params.searchText,
            filters: {
              [isPodPage ? 'deliveryDate' : 'date']: hasDateFilter
                ? {
                    from: params.dateFrom,
                    to: params.dateTo,
                  }
                : undefined,
              delivered: isPodPage ? true : undefined,
              status: params.status,
              brandOwner: params.bo,
              price: hasPriceFilter
                ? {
                    from: params.totalFrom ? parseFloat(params.totalFrom) * 100 : undefined,
                    to: params.totalTo ? parseFloat(params.totalTo) * 100 : undefined,
                  }
                : undefined,
            },
          },
        },
      });

      return data.getAdminOrders
        ? {
            totalCount: data.getAdminOrders.totalCount,
            adminOrders: (data.getAdminOrders.adminOrders as DslOrder[]) || [],
          }
        : { totalCount: 0, adminOrders: [] };
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  async getOrderDetail(id: number | undefined): Promise<DslOrder | null> {
    if (id === undefined) return null;

    const { data } = await Repository.query<GetOrderDetailsQuery, GetOrderDetailsQueryVariables>({
      query: GetOrderDetails,
      variables: { id },
    });

    return data.getAdminOrderById as DslOrder;
  },

  async getOrderWithPromotion(id: number) {
    const order = await OrderRepository.getOrderDetail(id);

    if (order) {
      return await getOrderWithPromotion(order);
    }
  },

  async updateOrder(_: DslOrder): Promise<boolean> {
    return Promise.resolve(true);
  },

  async getBrandOwnerOrdersWeeklyStats(): Promise<BrandOwnerOrderWeeklyStats[]> {
    const { data } = await Repository.query<
      GetBrandOwnerOrdersWeeklyStatsQuery,
      GetBrandOwnerOrdersWeeklyStatsQueryVariables
    >({
      query: getBrandOwnerOrdersWeeklyStats,
    });

    return data.getBrandOwnerOrdersWeeklyStats as BrandOwnerOrderWeeklyStats[];
  },
};

export default OrderRepository;
