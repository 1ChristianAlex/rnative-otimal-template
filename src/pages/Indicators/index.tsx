import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import IndicatorsPage from "./view/IndicatorsPage";

const Stack = createNativeStackNavigator();

enum IndicatorRouteNames {
	IndicatorsPage = "IndicatorsPage",
}

const IndicatorsStack: React.FC = () => (
	<Stack.Navigator
		screenOptions={{ headerTitleAlign: "center", headerShown: true }}
	>
		<Stack.Screen
			name="IndicatorFarmName"
			component={IndicatorsPage}
			options={{
				headerTitle: "Nome Fazenda",
			}}
		/>
	</Stack.Navigator>
);

export { IndicatorRouteNames };
export default IndicatorsStack;
