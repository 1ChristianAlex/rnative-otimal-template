import ElevatedCard from "@components/ElevatedCard/ElevatedCard";
import { Icon } from "@rneui/themed";
import React from "react";
import { Text, View } from "react-native";

const SalerProjectionCard: React.FC<React.ComponentProps<typeof View>> = (
	props,
) => {
	const currentMonth = {
		quantity: "1.758",
		icon: "show-chart",
		title: "Previsto vender em Nov",
		meta: 65,
	};

	const nextMonth = {
		quantity: "2.421",
		icon: "show-chart",
		title: "Previsto vender em Jan",
		meta: 98,
	};
	return (
		<ElevatedCard {...props} className="p-4">
			<View className="flex flex-1 flex-col justify-between">
				<View className="flex flex-row flex-wrap items-center">
					<View className="w-fit pr-1">
						<Icon
							name="confirmation-number"
							type="material"
							color="#14A0B7"
							size={16}
							solid={false}
						/>
					</View>

					<Text className="flex-1 font-semibold text-sm text-[#373737]">
						Projeção de vendas - Pasto
					</Text>

					<Text className="font-normal italic text-[10px] text-right">
						26/10/23
					</Text>
				</View>
				<View className="flex flex-row flex-1 justify-between">
					{[currentMonth, nextMonth].map(({ icon, quantity, title, meta }) => (
						<View
							key={title}
							className="mt-3 flex-1 basis-1/2 flex-col flex-wrap"
						>
							<Text className="font-medium text-xs text-[#373737B2]">
								{title}:
							</Text>

							<View className="flex flex-row items-end mt-2">
								<Text className="pl-1 font-medium text-3xl text-[#373737]">
									{quantity}
								</Text>
								<Text className="text-sm pl-1">animais</Text>
							</View>

							<View className="flex flex-row items-center">
								<Icon
									name={icon}
									type="material"
									color="#14A0B7"
									size={28}
									solid={false}
								/>
								<Text className="font-normal text-xs">
									Meta ficara em: {meta}%
								</Text>
							</View>
						</View>
					))}
				</View>
			</View>
		</ElevatedCard>
	);
};
export default SalerProjectionCard;
