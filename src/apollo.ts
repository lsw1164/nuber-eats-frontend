import { ApolloClient, InMemoryCache } from "@apollo/client";

const CLIENT_PORT = 4000;
const CLIENT_URI = `http://localhost:${CLIENT_PORT}/graphql`;

export const client = new ApolloClient({
  uri: CLIENT_URI,
  cache: new InMemoryCache(),
});
