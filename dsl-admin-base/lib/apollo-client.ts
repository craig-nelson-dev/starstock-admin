import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloLink } from '@apollo/client';
import { onError } from 'apollo-link-error';
import Router from 'next/router';
import { notification } from 'antd';

const isSSR = typeof window === 'undefined';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message }) => {
      // TODO: need backend work to return specific error code instead of this silly check
      const isInvalidToken = message && message.includes('unable to access resource');

      if (isInvalidToken) {
        if (process.browser) {
          notification.warn({ message: 'Your session is expired, please login again' });
        }
        Router.push('/login');
      }
    });
});

function createLink() {
  return createUploadLink({
    uri: isSSR ? process.env.API_ENDPOINT : `${window.location.origin}/graphql`,
    //uri: process.env.API_ENDPOINT + '/query',
    credentials: 'include',
    headers: {
      ['x-api-key']: process.env.API_KEY,
    },
  });
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: isSSR,
    link: ApolloLink.from([errorLink, createLink() as any]) as any,
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
  });
}

export function initializeApollo(initialState: any = null) {
  let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

  // Create new client for each ssr request
  if (!apolloClient || isSSR) {
    apolloClient = createApolloClient();
  }

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    apolloClient.cache.restore(initialState);
  }

  return apolloClient;
}
