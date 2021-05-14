import ApolloClient, { InMemoryCache } from 'apollo-boost';

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}` || '',
  },
  cache: new InMemoryCache(),
});
