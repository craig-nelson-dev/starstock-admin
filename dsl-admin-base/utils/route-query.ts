import Router from 'next/router';

// Remove empty query params
export function getQuery() {
  const query: any = { ...Router.router?.query };

  for (let key in query) {
    query[key] = query[key];
  }

  return query;
}
