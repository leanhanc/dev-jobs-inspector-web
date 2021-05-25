import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "graphql/client";

function DevJobInspector({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default DevJobInspector;
