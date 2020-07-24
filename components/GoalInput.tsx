import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

type Props = {
	addGoalHandler: (enteredGoal: string) => void;
	isModalVisible: boolean;
};

export default function GoalInput({ addGoalHandler, isModalVisible }: Props) {
	const [enteredGoal, setEnteredGoal] = useState("");

	function onChangeHandler(enteredText: string) {
		setEnteredGoal(enteredText);
	}

	return (
		<Modal visible={isModalVisible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Enter Goal"
					style={styles.input}
					onChangeText={onChangeHandler}
					value={enteredGoal}
				/>
				<Button
					title="Hello"
					onPress={() => addGoalHandler(enteredGoal)}
				/>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	input: {
		width: "80%",
		borderBottomColor: "black",
		borderBottomWidth: 1,
	},
});
