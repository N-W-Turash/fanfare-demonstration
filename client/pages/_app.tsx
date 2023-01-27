import "@/styles/globals.css";
import withApollo from "next-with-apollo";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const App = ({ Component, pageProps, apollo }: any) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    cache: new InMemoryCache().restore(initialState || {}),
    link: createUploadLink({
      uri: `${process.env.BASE_API_URL}/graphql`,
    }),
  });
})(App);
