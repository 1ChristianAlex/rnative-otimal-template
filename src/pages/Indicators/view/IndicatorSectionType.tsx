import { Icon } from "@rneui/themed";
import c from "classnames";
import React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import Card from "../../../shared/components/Card/Card";
interface Props {
	cardItem: { name: string; iconName: string }[];
	name: string;
}

const IndicatorSectionType: React.FC<Props> = ({ cardItem, name }) => {
	const width = Dimensions.get("window").width;

	return (
		<View className="w-full p-4">
			<View className="flex flex-row content-center items-center gap-2">
				<Icon name="grass" color="rgb(19, 161, 184)" />
				<Text className="text-lg text-black">{name}</Text>
			</View>

			<View className="w-full mt-3 flex flex-wrap items-stretch flex-row">
				{cardItem.map((item) => (
					<Card
						key={`${item.iconName}-${item.name}-card`}
						className={"mb-2 mr-2 h-[100]"}
						style={{ width: width / 2 - (32 - 8) }}
					>
						<View className="flex items-start">
							<Icon name={item.iconName} color="#155873" size={19} />
						</View>
						<Text className="flex mt-2 text-black">{item.name}</Text>
					</Card>
				))}
			</View>
		</View>
	);
};

export default IndicatorSectionType;
