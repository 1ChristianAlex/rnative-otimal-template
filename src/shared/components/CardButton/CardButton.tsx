import c from "classnames";
import { NativeWindStyleSheet } from "nativewind";
import React, { PropsWithChildren } from "react";
import { Pressable, PressableProps, ViewProps } from "react-native";

NativeWindStyleSheet.create({
	styles: {
		"card-item": {
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
	},
});

const CardButton: React.FC<PropsWithChildren<ViewProps & PressableProps>> = (
	props,
) => (
	<Pressable
		android_ripple={{
			borderless: false,
			color: "#F3F5F7",
		}}
		className={c("p-4 rounded-lg w-full card-item")}
		{...props}
	>
		{props.children}
	</Pressable>
);

export default CardButton;
