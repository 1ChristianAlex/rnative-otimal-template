enum IndicatorRouteNames {
	IndicatorsPage = "IndicatorsPageComponent",
	FarmMetaPage = "FarmMetaPageComponent",
}

type IndicatorStackParamList = {
	[IndicatorRouteNames.FarmMetaPage]: undefined;
	[IndicatorRouteNames.IndicatorsPage]: undefined;
};

export { IndicatorRouteNames };

export type { IndicatorStackParamList };
