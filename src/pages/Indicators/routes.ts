enum IndicatorRouteNames {
	IndicatorsPage = "IndicatorsPage",
	FarmMetaPage = "FarmMetaPage",
}

type IndicatorStackParamList = {
	[IndicatorRouteNames.FarmMetaPage]: undefined;
	[IndicatorRouteNames.IndicatorsPage]: undefined;
};

export { IndicatorRouteNames };

export type { IndicatorStackParamList };
