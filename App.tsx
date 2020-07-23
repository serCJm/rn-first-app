import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";

export type CourseGoal = {
	key: string;
	value: string;
};

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState("");
	const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);

	function onChangeHandler(enteredText: string) {
		setEnteredGoal(enteredText);
	}

	function addGoalHandler() {
		console.log(enteredGoal);
		setCourseGoals((prevState: CourseGoal[]) => [
			...prevState,
			{ key: Math.random().toString(), value: enteredGoal },
		]);
	}

	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Enter Goal"
					style={styles.input}
					onChangeText={onChangeHandler}
					value={enteredGoal}
				/>
				<Button title="Hello" onPress={addGoalHandler} />
			</View>
			<FlatList
				data={courseGoals}
				renderItem={(itemData) => (
					<GoalItem text={itemData.item.value}></GoalItem>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
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
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1,
	},
});
