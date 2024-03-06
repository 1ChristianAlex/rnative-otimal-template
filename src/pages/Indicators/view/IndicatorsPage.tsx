import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useIndicatorsPage } from "../hooks/useIndicatorsPage";
import IndicatorSectionType from "./IndicatorSectionType";

const IndicatorsPage: React.FC = () => {
	const { menuSection } = useIndicatorsPage();

	if (menuSection.result) {
		return (
			<ScrollView>
				{menuSection.result.map((section) => (
					<View className="mb-1" key={section.name}>
						<IndicatorSectionType
							cardItem={section.items}
							name={section.name}
						/>
					</View>
				))}
			</ScrollView>
		);
	}

	if (menuSection.errorMessage) {
		return (
			<View>
				<Text>{menuSection.errorMessage?.message}</Text>
			</View>
		);
	}

	return (
		<View>
			<Text>Loading</Text>
		</View>
	);
};

export default IndicatorsPage;
