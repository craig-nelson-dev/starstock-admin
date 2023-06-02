import {
  DslUser,
  GetUsersQuery,
  GetUsersQueryVariables,
  GetAdminUserByIdQuery,
  GetAdminUserByIdQueryVariables,
  AdminUsersListResponse,
} from '../graphql/generated/graphql';
import getUsersQuery from '../graphql/queries/users.graphql';
import getAdminUserById from '../graphql/queries/admin-user-by-id.graphql';
import Repository from './Repository';

interface OutletDetailUsers {
  outlets: UserOutlets[];
  total: number;
}
export interface UserOutlets {
  id: string;
  name: string;
  postcode: string;
  status: string;
}

export default {
  async get(p: any): Promise<AdminUsersListResponse> {
    const params: GetUsersQueryVariables['params'] = {
      pagination: { page: 1, perPage: 10 },
      sort: { by: 'createdOn', direction: 'desc' },
      filters: {},
      type: p.type || '',
    };
    if (p.status && p.status != -1 && params.filters) params.filters.statusValue = p.status;
    if (p.brandOwnerId && p.brandOwnerId != 0 && params.filters)
      params.filters.brandOwner = p.brandOwnerId;
    if (p.searchText) params.search = p.searchText;
    if (p.perPage && params.pagination) params.pagination.perPage = p.perPage;
    if (p.currentPage && params.pagination) params.pagination.page = p.currentPage;
    if (p.sortBy && params.sort) params.sort.by = p.sortBy;
    if (p.sortOrder && params.sort)
      params.sort.direction = p.sortOrder == 'ascend' ? 'asc' : 'desc';

    const { data } = await Repository.query<GetUsersQuery, GetUsersQueryVariables>({
      query: getUsersQuery,
      variables: { params },
    });

    return (data.getAdminUsers || { totalCount: 0, users: [] }) as AdminUsersListResponse;
  },

  async getById(id: number): Promise<DslUser | undefined> {
    if (typeof id !== 'number') {
      return;
    }

    const { data } = await Repository.query<GetAdminUserByIdQuery, GetAdminUserByIdQueryVariables>({
      query: getAdminUserById,
      variables: { id: Number(id) },
    });

    if (data.getAdminUserById) {
      return data.getAdminUserById as DslUser;
    }

    return;
  },
  async getUserDetail(id: number): Promise<DslUser | undefined> {
    if (typeof id !== 'number') {
      return;
    }
    return {} as DslUser;
  },
  async getUserOutlets(id: number): Promise<OutletDetailUsers | undefined> {
    if (typeof id !== 'number') {
      return {
        outlets: [],
        total: 0,
      };
    }

    const total = 4;
    const outlets = Array(total)
      .fill(0)
      .map((_, idx) => ({
        id: `${12345678 + idx}`,
        name: 'Outlet Name',
        postcode: 'NW1 SE44',
        status: 'Active',
      }));

    return {
      outlets,
      total,
    };
  },

  async updateUser(_: DslUser): Promise<boolean> {
    return Promise.resolve(true);
  },
  async updateStatus(_: number, __: object): Promise<boolean> {
    return Promise.resolve(true);
  },

  async enableUser(_: number): Promise<boolean> {
    // TODO: enable user api
    return Promise.resolve(true);
  },
  async SavedSearchRepository(): Promise<string> {
    return '';
  },
  async deleteSavedSearch(): Promise<void> {},
  async createSavedSearch(): Promise<string> {
    return Promise.resolve('1');
  },
};
