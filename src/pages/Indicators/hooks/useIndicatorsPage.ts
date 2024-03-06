import { useToastErrorMessage } from "@shared/hooks/useToastErrorMessage";
import { Result } from "@shared/model/result";
import { useCallback, useEffect, useState } from "react";
import { IndicatorMenuSection } from "../data/model/in/indicatorMenuItem";
import { IndicatorRepository } from "../data/repository/indicatorRepository";
import { IndicatorMenuService } from "../data/service/indicatorMenuService";

const indicatorMenuService = new IndicatorMenuService(
	new IndicatorRepository(),
);

const useIndicatorsPage = () => {
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
	}, [showToastError]);

	useEffect(() => {
		getIndicatorMenuSections();
	}, [getIndicatorMenuSections]);

	return { menuSection };
};

export { useIndicatorsPage };
