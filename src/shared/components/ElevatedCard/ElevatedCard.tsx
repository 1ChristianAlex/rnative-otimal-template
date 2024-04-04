import React, { PropsWithChildren, useState } from "react";
import {
	GestureResponderEvent,
	TouchableNativeFeedback,
	View,
	ViewProps,
} from "react-native";
import colors from "tailwindcss/colors";

interface Props extends ViewProps {
	onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const CardComponent: React.FC<PropsWithChildren<ViewProps>> = ({
	children,
	...props
}) => (
	<View
		className="px-2 py-3 bg-white shadow-md shadow-black rounded-xl overflow-hidden"
		{...props}
	>
		{children}
	</View>
);

const ElevatedCard: React.FC<PropsWithChildren<Props>> = ({
	onPress,
	...props
}) => {
	if (!onPress) {
		return React.createElement(CardComponent, props);
	}

	return (
		<TouchableNativeFeedback
			background={TouchableNativeFeedback.Ripple(colors.gray[300], false)}
			onPress={onPress}
		>
			{React.createElement(CardComponent, props)}
		</TouchableNativeFeedback>
	);
};

export default ElevatedCard;
