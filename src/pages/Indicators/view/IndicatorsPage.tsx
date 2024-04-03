import { useFocusEffect } from "@react-navigation/native";
import { Result } from "@shared/model/result";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { IndicatorMenuSection } from "../data/model/in/indicatorMenuItem";
import IndicatorSectionType from "./IndicatorSectionType";
import { useIndicatorsPage } from "./hooks/useIndicatorsPage";

const IndicatorsPage: React.FC = () => {
	const { getIndicatorMenuSections } = useIndicatorsPage();

	const [menuSection, setMenuSection] = useState<
		Result<IndicatorMenuSection[] | null>
	>(new Result(null, null));

	useFocusEffect(
		React.useCallback(() => {
			getIndicatorMenuSections().then(setMenuSection);
		}, [getIndicatorMenuSections]),
	);

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
