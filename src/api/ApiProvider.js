import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
  from
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';


const token = process.env.REACT_APP_GITHUB_API_TOKEN;
const url = `${process.env.REACT_APP_API_HOST}/graphql`

const httpLink = createHttpLink({
  uri: url
});


const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
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
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache()
});


const ApiProvider = ({children}) => {
  return(
    <ApolloProvider client={client} >
      {children}
    </ApolloProvider>
  );
}

export default ApiProvider;