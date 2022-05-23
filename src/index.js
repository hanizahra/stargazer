import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    ApolloProvider,
    // gql
  } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const token = process.env.REACT_APP_GITHUB_API_TOKEN;
const url = `${process.env.REACT_APP_API_HOST}/graphql`

const httpLink = createHttpLink({
  uri: url
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
