import ElevatedCard from "@components/ElevatedCard/ElevatedCard";
import { Icon } from "@rneui/themed";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import AccuracyCard, { AccuracyCardProps } from "./AccuracyCard";
import AnimalsNumberCard from "./AnimalsNumberCard";
import OxQuoteCard from "./OxQuoteCard";
import SalerProjectionCard from "./SalerProjectionCard";
import WeatherCard from "./WeatherCard";

const DashboardPage: React.FC = () => {
	const accuracyCardProps: AccuracyCardProps[] = [
		{
			leftData: {
				description: "em relação aos 5 dias anteriores (17/10 a 21/10).",
				icon: "show-chart",
				number: "8%",
				title: "Queda últimos 5 dias",
			},
			rightData: {
				description: "dos currais",
				icon: "check-circle",
				number: "85",
				title: "Atingiram a exatidão",
			},
			title: "Exatidão da distribuição por dia",
			icon: "local-shipping",
		},
		{
			leftData: {
				description: "em relação aos 5 dias anteriores (17/10 a 21/10).",
				icon: "show-chart",
				number: "22%",
				title: "Queda últimos 5 dias",
			},
			rightData: {
				description: "dos carregamentos",
				icon: "check-circle",
				number: "85",
				title: "Atingiram a exatidão",
			},
			title: "Exatidão do carregamento",
			icon: "agriculture",
		},
	];
	return (
		<ScrollView>
			<View className="p-6 flex flex-row flex-wrap gap-x-4 gap-y-6">
				<WeatherCard className="flex-1" />
				<OxQuoteCard className="flex-1" />
				{accuracyCardProps.map(({ icon, leftData, rightData, title }) => (
					<AccuracyCard
						className="flex-1 basis-full"
						icon={icon}
						leftData={leftData}
						rightData={rightData}
						title={title}
						key={title}
					/>
				))}
				<AnimalsNumberCard className="flex-1 basis-full" />
				<SalerProjectionCard className="flex-1 basis-full" />
			</View>
		</ScrollView>
	);
};

export default DashboardPage;
