import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import CardButton from "../../../shared/components/CardButton/CardButton";
import { IndicatorRouteNames } from "../routes";
interface Props {
	cardItem: { name: string; iconName: string }[];
	name: string;
}

const IndicatorSectionType: React.FC<Props> = ({ cardItem, name }) => {
	const width = Dimensions.get("window").width;
	const navigation = useNavigation();

	return (
		<View className="w-full p-4">
			<View className="flex flex-row content-center items-center gap-2">
				<Icon name="grass" color="rgb(19, 161, 184)" />
				<Text className="text-lg text-black">{name}</Text>
			</View>

			<View className="w-full mt-3 flex flex-wrap items-stretch flex-row">
				{cardItem.map((item) => (
					<CardButton
						key={`${item.iconName}-${item.name}-card`}
						className={"mb-2 mr-2 h-[100] flex flex-col justify-between"}
						style={{
							width: cardItem.length === 1 ? width - 38 : width / 2 - 24,
						}}
						onPress={() =>
							navigation.navigate(IndicatorRouteNames.FarmMetaPage)
						}
					>
						<View className="flex items-start">
							<Icon name={item.iconName} color="#155873" size={24} />
						</View>
						<Text className="flex mt-2 text-black text-sm">{item.name}</Text>
					</CardButton>
				))}
			</View>
		</View>
	);
};

export default IndicatorSectionType;
