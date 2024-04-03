import ElevatedCard from "@components/ElevatedCard/ElevatedCard";
import { Icon } from "@rneui/themed";
import React from "react";
import { Text, View } from "react-native";

const OxQuoteCard: React.FC<React.ComponentProps<typeof View>> = (props) => (
	<ElevatedCard {...props}>
		<View className="flex flex-1 flex-col justify-between">
			<View className="flex flex-row flex-wrap items-center">
				<View className="w-fit pr-1">
					<Icon
						name="confirmation-number"
						type="material"
						color="#155873"
						size={16}
						solid={false}
					/>
				</View>

				<Text className="flex-1 font-semibold text-sm text-[#373737]">
					Cotação do boi
				</Text>
			</View>
			<View className="flex flex-row flex-wrap items-center bg-[#F9FAFB] p-2 rounded-lg justify-between gap-y-1">
				<Text className="text-[#373737] text-xs font-bold">São Paulo</Text>
				<Text className="text-[#373737] text-xs font-medium">R$ 279,00</Text>
				<Text className="text-[#37373799] text-xs font-normal">
					Variação dia
				</Text>
				<Text className="text-[#4CAF50] text-xs font-bold">+0.71%</Text>
			</View>

			<View className="flex flex-row flex-wrap items-center justify-between">
				<Text className="text-[10px] text-[#939297]">Fonte: CEPEA</Text>
				<Text className="text-[#1C98F3] text-xs">Saiba mais</Text>
			</View>
		</View>
	</ElevatedCard>
);

export default OxQuoteCard;
