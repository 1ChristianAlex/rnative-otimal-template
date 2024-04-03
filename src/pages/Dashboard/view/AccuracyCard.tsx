import ElevatedCard from "@components/ElevatedCard/ElevatedCard";
import { Icon } from "@rneui/themed";
import React from "react";
import { Text, View } from "react-native";

type AccuracyData = {
	title: string;
	icon: string;
	number: string;
	description: string;
};

interface AccuracyCardProps {
	rightData: AccuracyData;
	leftData: AccuracyData;
	title: string;
	icon: string;
}

const AccuracyCard: React.FC<
	React.ComponentProps<typeof View> & AccuracyCardProps
> = ({ rightData, leftData, title, icon, ...props }) => (
	<ElevatedCard {...props} className="p-4">
		<View className="flex flex-1 flex-col justify-between">
			<View className="flex flex-row flex-wrap items-center">
				<View className="w-fit pr-1">
					<Icon
						name={icon}
						type="material"
						color="#155873"
						size={16}
						solid={false}
					/>
				</View>

				<Text className="flex-1 font-semibold text-sm text-[#373737]">
					{title}
				</Text>

				<Text className="font-normal italic text-[10px] text-right">
					26/10/23
				</Text>
			</View>
			<View className="flex flex-row flex-1 justify-between">
				<View className="mt-3 basis-2/5">
					<Text className="font-normal text-xs text-[#373737]">
						{leftData.title}
					</Text>
					<View className="flex flex-row gap-x-1 items-center">
						<Icon
							name={leftData.icon}
							type="material"
							color="rgba(244, 67, 54, 1)"
							size={24}
							solid={false}
						/>
						<Text className="font-bold text-3xl text-[#F44336]">
							{leftData.number}
						</Text>
					</View>
					<Text className="font-normal text-[10px] text-[#373737]">
						{leftData.description}
					</Text>
				</View>

				<View className="mt-3">
					<Text className="font-normal text-xs text-[#373737]">
						{rightData.title}
					</Text>
					<View className="flex flex-row gap-x-1 items-center">
						<Icon
							name={rightData.icon}
							type="material"
							color="rgba(76, 175, 80, 1)"
							size={24}
							solid={false}
						/>
						<Text className="font-bold text-3xl text-[#373737]">
							{rightData.number}
						</Text>
					</View>
					<Text className="font-normal text-[10px] text-[#373737]">
						{rightData.description}
					</Text>
				</View>
			</View>
		</View>
	</ElevatedCard>
);
export type { AccuracyCardProps };
export default AccuracyCard;
