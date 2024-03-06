import DashboardStack from "@pages/Dashboard";
import IndicatorsStack from "@pages/Indicators";
import { IndicatorStackParamList } from "@pages/Indicators/routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React from "react";

type RootStackParamList = IndicatorStackParamList;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

const Tab = createBottomTabNavigator();

enum RootRouteNames {
	IndicatorsStack = "IndicatorsStack",
	DashboardStack = "DashboardStack",
}

const RouterNavigator: React.FC = () => {
	const navTheme = DefaultTheme;
	navTheme.colors.background = "rgb(255, 255, 255)";
	return (
		<NavigationContainer theme={navTheme}>
			<Tab.Navigator
				screenOptions={(props) => ({
					headerShown: false,
					tabBarStyle: {
						backgroundColor: "rgb(11, 67, 96)",
						padding: 5,
						height: 50,
					},
					tabBarLabelStyle: { color: "white", paddingBottom: 4 },
					tabBarIcon: (iconProps) => {
						let iconName = "home";

						if (props.route.name === RootRouteNames.IndicatorsStack) {
							iconName = "bar-chart";
						}
						if (props.route.name === RootRouteNames.DashboardStack) {
							iconName = "dashboard";
						}
						return (
							<Icon
								name={iconName}
								size={iconProps.size}
								color="white"
								type="material"
							/>
						);
					},
				})}
			>
				<Tab.Screen
					name={RootRouteNames.DashboardStack}
					component={DashboardStack}
					options={{ tabBarLabel: "Dashboard" }}
				/>
				<Tab.Screen
					name={RootRouteNames.IndicatorsStack}
					component={IndicatorsStack}
					options={{ tabBarLabel: "Indicadores" }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export { RootRouteNames };
export default RouterNavigator;
