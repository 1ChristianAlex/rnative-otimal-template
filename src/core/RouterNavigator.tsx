import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React from "react";
import IndicatorsStack from "../pages/Indicators";

const Tab = createBottomTabNavigator();

enum RootRouteNames {
	IndicatorsStack = "IndicatorsStack",
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
					name={RootRouteNames.IndicatorsStack}
					component={IndicatorsStack}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export { RootRouteNames };
export default RouterNavigator;
