import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const CLIENT_PORT = 4000;
const CLIENT_URI = `http://localhost:${CLIENT_PORT}/graphql`;

export const client = new ApolloClient({
  uri: CLIENT_URI,
  cache: new InMemoryCache(),
});
