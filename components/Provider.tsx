'use client';

import { SessionProvider } from 'next-auth/react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAFBASE_API_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-api-key': process.env.NEXT_PUBLIC_GRAFBASE_API_KEY, // Replace 'your-api-key' with any value for local development
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// @ts-ignore
const Provider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </SessionProvider>
  )
}

export default Provider;
