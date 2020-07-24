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
import GoalInput from "./components/GoalInput";

export type CourseGoal = {
	key: string;
	value: string;
};

export default function App() {
	const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);

	function addGoalHandler(enteredGoal: string) {
		console.log(enteredGoal);
		setCourseGoals((prevState: CourseGoal[]) => [
			...prevState,
			{ key: Math.random().toString(), value: enteredGoal },
		]);
	}

	return (
		<View style={styles.screen}>
			<GoalInput addGoalHandler={addGoalHandler} />
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
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1,
	},
});
