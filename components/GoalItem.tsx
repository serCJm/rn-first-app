import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
	text: string;
};

export default function GoalItem({ text }: Props) {
	return (
		<View style={styles.listItem}>
			<Text>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1,
		color: "black",
	},
});
