import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
// Types
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

type Props = {
	addGoalHandler: (enteredGoal: string) => void;
};

export default function GoalInput({ addGoalHandler }: Props) {
	const [enteredGoal, setEnteredGoal] = useState("");

	function onChangeHandler(enteredText: string) {
		setEnteredGoal(enteredText);
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholder="Enter Goal"
				style={styles.input}
				onChangeText={onChangeHandler}
				value={enteredGoal}
			/>
			<Button title="Hello" onPress={() => addGoalHandler(enteredGoal)} />
		</View>
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
