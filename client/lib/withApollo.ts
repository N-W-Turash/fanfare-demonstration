import withApollo from "next-with-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: "https://mysite.com/graphql",
    cache: new InMemoryCache().restore(initialState || {}),
  });
});
