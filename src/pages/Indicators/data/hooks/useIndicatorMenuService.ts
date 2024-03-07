import { useMemo } from "react";
import { IndicatorRepository } from "../repository/indicatorRepository";
import { IndicatorMenuService } from "../service/indicatorMenuService";

const useIndicatorMenuService = () => {
	const instance = useMemo(
		() => new IndicatorMenuService(new IndicatorRepository()),
		[],
	);
	return instance;
};

export { useIndicatorMenuService };
