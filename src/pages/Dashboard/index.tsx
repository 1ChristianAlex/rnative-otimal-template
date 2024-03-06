import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DashboardPage from "./view/DashboardPage";

const Stack = createNativeStackNavigator();

enum DashboardRouteNames {
	DashboardPage = "DashboardsPage",
}

const DashboardStack: React.FC = () => (
	<Stack.Navigator
		screenOptions={{ headerTitleAlign: "center", headerShown: true }}
	>
		<Stack.Screen
			name="DashboardFarmName"
			component={DashboardPage}
			options={{
				headerTitle: "Dashboard",
			}}
		/>
	</Stack.Navigator>
);

export { DashboardRouteNames };
export default DashboardStack;
