import { Result } from "../../../../shared/model/result";
import { IndicatorMenuSection } from "../model/in/indicatorMenuItem";
import { IndicatorRepository } from "../repository/indicatorRepository";

class IndicatorMenuService {
	constructor(private _repo: IndicatorRepository) {}

	async getIndicatorMenu() {
		try {
			const result = new Result<IndicatorMenuSection[]>(
				await Promise.all([
					this._repo.getPastureIndicatorMenu(),
					this._repo.getLockdownIndicatorMenu(),
				]),
				null,
			);
			return result;
		} catch (error) {
			if (error instanceof Error) {
				return new Result(null, new Error(error.message));
			}

			return new Result(null, new Error("Error on getting menu items"));
		}
	}
}

export { IndicatorMenuService };
