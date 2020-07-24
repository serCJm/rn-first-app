import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type Props = {
	text: string;
	itemId: string;
	onDelete: (itemId: string) => void;
};

export default function GoalItem({ text, onDelete, itemId }: Props) {
	return (
		<TouchableOpacity onLongPress={() => onDelete(itemId)}>
			<View style={styles.listItem}>
				<Text>{text}</Text>
			</View>
		</TouchableOpacity>
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
