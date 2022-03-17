import client from "graphql/client";

// Providers
import { ApolloProvider } from "@apollo/client";
import { LoadingContextProvider } from "contexts/LoadingContext";

// Styles
import "../styles/globals.css";

// Components
import LoadingOverlay from "components/LoadingOverlay";

function DevJobInspector({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<LoadingContextProvider>
				<Component {...pageProps} />
				<LoadingOverlay />
			</LoadingContextProvider>
		</ApolloProvider>
	);
}

export default DevJobInspector;
