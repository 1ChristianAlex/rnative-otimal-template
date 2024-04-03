import ElevatedCard from "@components/ElevatedCard/ElevatedCard";
import { Icon } from "@rneui/themed";
import React from "react";
import { Text, View } from "react-native";

const AnimalsNumberCard: React.FC<React.ComponentProps<typeof View>> = (
	props,
) => {
	const pastureAnimals = {
		quantity: "10.562",
		icon: "grass",
		title: "Pasto",
		description: "animais no pasto",
	};

	const fenceAnimals = {
		quantity: "14.897",
		icon: "fence",
		title: "Confinamento",
		description: "animais no confinamento",
	};
	return (
		<ElevatedCard {...props} className="p-4">
			<View className="flex flex-1 flex-col justify-between">
				<View className="flex flex-row flex-wrap items-center">
					<View className="w-fit pr-1">
						<Icon
							name="cruelty-free"
							type="material"
							color="#F69B17"
							size={16}
							solid={false}
						/>
					</View>

					<Text className="flex-1 font-semibold text-sm text-[#373737]">
						Número de animais
					</Text>

					<Text className="font-normal italic text-[10px] text-right">
						26/10/23
					</Text>
				</View>
				<View className="flex flex-row flex-1 justify-between">
					{[pastureAnimals, fenceAnimals].map(
						({ description, icon, quantity, title }) => (
							<View
								key={title}
								className="mt-3 flex-1 basis-1/2 flex-col flex-wrap"
							>
								<Text className="font-medium text-xs text-[#373737B2]">
									{title}:
								</Text>
								<View>
									<View className="flex flex-row flex-wrap items-center">
										<Icon
											name={icon}
											type="material"
											color="#14A0B7"
											size={28}
											solid={false}
										/>
										<Text className="pl-1 font-medium text-3xl text-[#373737]">
											{quantity}
										</Text>
									</View>

									<Text className="font-normal text-xs">{description}</Text>
								</View>
							</View>
						),
					)}
				</View>
			</View>
		</ElevatedCard>
	);
};
export default AnimalsNumberCard;
