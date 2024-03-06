import { useCallback } from "react";

const useToastErrorMessage = () => {
	const showError = useCallback(
		(error: string) => console.log("error", error),
		[],
	);

	return showError;
};

export { useToastErrorMessage };
