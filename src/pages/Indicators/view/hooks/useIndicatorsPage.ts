import { useIndicatorMenuService } from "@pages/Indicators/data/hooks/useIndicatorMenuService";
import { IndicatorMenuSection } from "@pages/Indicators/data/model/in/indicatorMenuItem";
import { useToastErrorMessage } from "@shared/hooks/useToastErrorMessage";
import { Result } from "@shared/model/result";
import { useCallback, useEffect, useState } from "react";

const useIndicatorsPage = () => {
	const indicatorMenuService = useIndicatorMenuService();
	const [menuSection, setMenuSection] = useState<
		Result<IndicatorMenuSection[] | null>
	>(new Result(null, null));

	const showToastError = useToastErrorMessage();

	const getIndicatorMenuSections = useCallback(async () => {
		const items = await indicatorMenuService.getIndicatorMenu();

		setMenuSection(items);

		if (items.errorMessage) {
			showToastError(items.errorMessage.message);
		}
	}, [showToastError, indicatorMenuService]);

	useEffect(() => {
		getIndicatorMenuSections();
	}, [getIndicatorMenuSections]);

	return { menuSection };
};

export { useIndicatorsPage };
