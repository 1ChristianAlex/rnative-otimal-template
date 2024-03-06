import {
	IndicatorMenuItem,
	IndicatorMenuSection,
} from "../model/in/indicatorMenuItem";

class IndicatorRepository {
	async getPastureIndicatorMenu() {
		return new IndicatorMenuSection({
			name: "Pasto",
			items: [
				new IndicatorMenuItem({ iconName: "grass", name: "Itens vistoriados" }),
				new IndicatorMenuItem({
					iconName: "grass",
					name: "Qualidade da rotina",
				}),
				new IndicatorMenuItem({ iconName: "grass", name: "Vistoria de Lotes" }),
			],
		});
	}
	async getLockdownIndicatorMenu() {
		return new IndicatorMenuSection({
			name: "Confinamento",
			items: [
				new IndicatorMenuItem({
					iconName: "grass",
					name: "Curva de referencia",
				}),
				new IndicatorMenuItem({ iconName: "grass", name: "Escore de cocho" }),
				new IndicatorMenuItem({
					iconName: "grass",
					name: "Exatidão carregamento",
				}),
				new IndicatorMenuItem({
					iconName: "grass",
					name: "Exatidão da distribuição",
				}),
			],
		});
	}
}

export { IndicatorRepository };
