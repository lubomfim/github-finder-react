import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/client';
import { client } from 'services/graphql';

import { GlobalStyle } from 'styles/global';

import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Routes />
      <GlobalStyle />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
