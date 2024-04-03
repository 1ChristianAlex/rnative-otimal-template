import ElevatedCard from "@components/ElevatedCard/ElevatedCard";
import { Icon } from "@rneui/themed";
import React from "react";
import { Text, View } from "react-native";

const WeatherCard: React.FC<React.ComponentProps<typeof View>> = (props) => (
	<ElevatedCard {...props}>
		<View className="flex flex-col flex-nowrap">
			<View className="flex flex-row flex-wrap">
				<View className="w-fit pr-1">
					<Icon
						name="location-on"
						type="material"
						color="rgba(31, 146, 209, 1)"
						size={16}
						solid={false}
					/>
				</View>

				<Text className="flex-1 tracking-tight text-gray-700 text-xs">
					Belo Horizonte - MG
				</Text>
			</View>
			<View className="flex flex-row flex-wrap mt-2 items-center">
				<Text className="flex-1 basis-1/2 font-semibold text-5xl text-[#1F8AB8]">
					24°
				</Text>

				<View className="flex-1 basis-1/3 h-fit">
					<Icon
						name="thunderstorm"
						type="material"
						color="rgb(230, 231, 232)"
						size={20}
						solid={false}
					/>
				</View>
				<Text className="text-[#373737] text-xs flex-1 basis-full">
					Parcialmente nublado
				</Text>
			</View>
			<View className="flex flex-row flex-wrap">
				<Text className="text-[#939297] text-xs flex-1 basis-1/5 mt-4">
					Max:29°
				</Text>
				<Text className="text-[#939297] text-xs flex-1 basis-2/5 mt-4">
					Min:19°
				</Text>

				<Text className="text-[#373737] text-xs flex-1 basis-full">
					<Text className="text-[#F44336]">41mm</Text> nas ultimas 24h
				</Text>
			</View>
		</View>
	</ElevatedCard>
);

export default WeatherCard;
