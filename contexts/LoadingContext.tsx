import * as React from "react";

const LoadingContext = React.createContext<
	{ isLoading: boolean; setIsLoading: React.Dispatch<React.SetStateAction<boolean>> } | undefined
>(undefined);

function LoadingContextProvider({ children }) {
	const [isLoading, setIsLoading] = React.useState(false);

	const context = { isLoading, setIsLoading };

	return <LoadingContext.Provider value={context}>{children}</LoadingContext.Provider>;
}

export { LoadingContext, LoadingContextProvider };
