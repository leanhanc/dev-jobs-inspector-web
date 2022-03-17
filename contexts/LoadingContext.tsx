import * as React from "react";

const LoadingContext = React.createContext<
	{ isLoading: boolean; toggleLoading: () => void } | undefined
>(undefined);

function LoadingContextProvider({ children }) {
	const [isLoading, setIsLoading] = React.useState(false);

	const toggleLoading = () => setIsLoading(!isLoading);

	const context = { isLoading, toggleLoading };

	return <LoadingContext.Provider value={context}>{children}</LoadingContext.Provider>;
}

export { LoadingContext, LoadingContextProvider };
