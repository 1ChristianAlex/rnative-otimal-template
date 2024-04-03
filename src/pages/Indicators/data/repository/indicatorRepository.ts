import {
	IndicatorMenuItem,
	IndicatorMenuSection,
} from "../model/in/indicatorMenuItem";

class IndicatorRepository {
	getPastureIndicatorMenu = async () => {
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
	};
	getLockdownIndicatorMenu = async () => {
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
	};

	getGeneralIndicatorMenu = async () => {
		return new IndicatorMenuSection({
			name: "Geral",
			items: [
				new IndicatorMenuItem({
					iconName: "grass",
					name: "Metas da fazenda",
				}),
			],
		});
	};
}

export { IndicatorRepository };
