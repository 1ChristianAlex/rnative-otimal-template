import { useMemo } from "react";
import { IndicatorRepository } from "../repository/indicatorRepository";
import { IndicatorMenuService } from "../service/indicatorMenuService";

const useIndicatorMenuService = () =>
	useMemo(() => new IndicatorMenuService(new IndicatorRepository()), []);

export { useIndicatorMenuService };
