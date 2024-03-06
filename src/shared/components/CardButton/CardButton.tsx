import c from "classnames";
import React, { PropsWithChildren } from "react";
import { Pressable, PressableProps, StyleSheet, ViewProps } from "react-native";

const styles = StyleSheet.create({
	card: {
		alignSelf: "center",
		flexDirection: "column",
		borderRadius: 4,
		backgroundColor: "#FFFFFF",
		borderWidth: 1,
		borderColor: "rgba(217, 226, 232, 0.5)",
		shadowColor: "rgb(199, 199, 204)",
		shadowOpacity: 1,
		shadowRadius: 2,
		elevation: 3,
	},
});

const CardButton: React.FC<PropsWithChildren<PressableProps & ViewProps>> = (
	props,
) => (
	<Pressable
		className={c("p-4 rounded-lg w-full")}
		{...props}
		style={StyleSheet.compose(styles.card, props.style)}
		android_ripple={{
			borderless: false,
			color: "#F3F5F7",
		}}
	>
		{props.children}
	</Pressable>
);

export default CardButton;
