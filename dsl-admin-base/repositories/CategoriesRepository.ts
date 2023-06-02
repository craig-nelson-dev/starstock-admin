import {
  DslCategory,
  GetCategoriesQuery,
  GetCategoriesQueryVariables,
} from '../graphql/generated/graphql';
import getCategoriesQuery from '../graphql/queries/categories.graphql';
import Repository from './Repository';

export default {
  async get(): Promise<DslCategory[] | null> {
    try {
      const { data } = await Repository.query<GetCategoriesQuery, GetCategoriesQueryVariables>({
        query: getCategoriesQuery,
      });

      return (data.getAdminCategories || []) as DslCategory[];
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};
