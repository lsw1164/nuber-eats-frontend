import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { LOCALSTORAGE_TOKEN, X_JWT } from "./constants";
import { setContext } from "@apollo/client/link/context";

const token: string = localStorage.getItem(LOCALSTORAGE_TOKEN) || "";
export const isLoggedInVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);

const CLIENT_PORT = 4000;
const CLIENT_URI = `http://localhost:${CLIENT_PORT}/graphql`;

const httpLink = createHttpLink({ uri: CLIENT_URI });
const authLink = setContext((_, { headers }) => ({
  headers: { ...headers, [X_JWT]: authTokenVar() },
}));

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
