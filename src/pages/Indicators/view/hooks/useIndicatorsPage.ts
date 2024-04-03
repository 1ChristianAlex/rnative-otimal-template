import { useIndicatorMenuService } from "@pages/Indicators/data/hooks/useIndicatorMenuService";
import { useToastErrorMessage } from "@shared/hooks/useToastErrorMessage";
import { useCallback } from "react";

const useIndicatorsPage = () => {
	const indicatorMenuService = useIndicatorMenuService();

	const showToastError = useToastErrorMessage();

	const getIndicatorMenuSections = useCallback(async () => {
		const items = await indicatorMenuService.getIndicatorMenu();

		if (items.errorMessage) {
			showToastError(items.errorMessage.message);
		}

		return items;
	}, [showToastError, indicatorMenuService]);

	return { getIndicatorMenuSections };
};

export { useIndicatorsPage };
