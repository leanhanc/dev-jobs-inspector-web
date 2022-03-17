import { LoadingContext } from "contexts/LoadingContext";
import * as React from "react";

function useLoadingContext() {
	const context = React.useContext(LoadingContext);
	if (context === undefined) {
		throw new Error("useLoadingContext must be used within a CountProvider");
	}
	return context;
}

export default useLoadingContext;
