import { QueryOptions } from 'apollo-client';
import { initializeApollo } from '../lib/apollo-client';

export default {
  async query<T, Variables>(args: QueryOptions<Variables>) {
    // init client for each request due to ssr
    const apolloClient = initializeApollo();
    return apolloClient.query<T, Variables>({ ...args, fetchPolicy: 'no-cache' }); // Important: don't remove 'no-cache', i will break some function
  },
};
