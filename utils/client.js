import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

export const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache({ addTypename: false }),
});
