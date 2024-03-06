import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FarmMetaPage from "./pages/FarmMeta/FarmMetaPage";
import { IndicatorRouteNames, IndicatorStackParamList } from "./routes";
import IndicatorsPage from "./view/IndicatorsPage";

const Stack = createNativeStackNavigator<IndicatorStackParamList>();

const IndicatorsStack: React.FC = () => (
	<Stack.Navigator
		screenOptions={{ headerTitleAlign: "center", headerShown: true }}
		initialRouteName={IndicatorRouteNames.IndicatorsPage}
	>
		<Stack.Screen
			name={IndicatorRouteNames.IndicatorsPage}
			component={IndicatorsPage}
			options={{
				headerTitle: "Nome Fazenda",
			}}
		/>
		<Stack.Screen
			name={IndicatorRouteNames.FarmMetaPage}
			component={FarmMetaPage}
			options={{
				headerTitle: "Nome Fazenda",
			}}
		/>
	</Stack.Navigator>
);

export { IndicatorRouteNames };
export default IndicatorsStack;
