import React, { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";

const ElevatedCard: React.FC<PropsWithChildren<ViewProps>> = ({
	children,
	...props
}) => (
	<View
		className="px-2 py-3 bg-white shadow-md shadow-black rounded-xl"
		{...props}
	>
		{children}
	</View>
);

export default ElevatedCard;
