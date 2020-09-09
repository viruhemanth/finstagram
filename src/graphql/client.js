import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { createHttpLink } from "apollo-link-http";

const headers = { "x-hasura-admin-secret": "funstagram_hasura_kkr" };

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: "wss://hasura-testin.herokuapp.com/v1/graphql",
    options: {
      reconnect: true,
      timeout: 30000,
      connectionParams: {
        headers,
      },
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
