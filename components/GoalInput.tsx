import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

type Props = {
	addGoalHandler: (
		enteredGoal: string,
		setEnteredGoal: (goal: string) => void
	) => void;
	isModalVisible: boolean;
	onCancel: () => void;
};

export default function GoalInput({
	addGoalHandler,
	isModalVisible,
	onCancel,
}: Props) {
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
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="Cancel"
							onPress={() => onCancel()}
							color="red"
						/>
					</View>
					<View style={styles.button}>
						<Button
							title="Add Goal"
							onPress={() =>
								addGoalHandler(enteredGoal, setEnteredGoal)
							}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		width: "80%",
		borderBottomColor: "black",
		borderBottomWidth: 1,
		marginBottom: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "60%",
	},
	button: {
		width: "40%",
	},
});
