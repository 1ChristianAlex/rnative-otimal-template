class IndicatorMenuItem {
	constructor(data: IndicatorMenuItem) {
		Object.assign(this, data);
	}

	iconName!: string;
	name!: string;
}

class IndicatorMenuSection {
	constructor(data: IndicatorMenuSection) {
		Object.assign(this, data);
	}

	items!: IndicatorMenuItem[];
	name!: string;
}

export { IndicatorMenuItem, IndicatorMenuSection };
