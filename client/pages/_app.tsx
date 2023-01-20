import "@/styles/globals.css";
import withApollo from "next-with-apollo";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const App = ({ Component, pageProps, apollo }: any) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: "http://localhost:8000/graphql",
    cache: new InMemoryCache().restore(initialState || {}),
  });
})(App);
