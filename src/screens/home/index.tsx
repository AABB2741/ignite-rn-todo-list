import {
	Alert,
	FlatList,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

import { Header } from "@/components/header";
import { styles } from "./styles";
import { CirclePlus, ClipboardList } from "lucide-react-native";
import { Task, TaskInfos } from "@/components/task";
import { useState } from "react";

export function Home() {
	const [newTaskName, setNewTaskName] = useState("");
	const [tasks, setTasks] = useState<TaskInfos[]>([]);

	function handleAddTask() {
		const name = newTaskName.trim();

		if (!name) {
			return Alert.alert("Por favor, digite o nome da nova tarefa!");
		}

		setTasks((prevState) => [
			...prevState,
			{
				id: Math.random(),
				name,
				isChecked: false,
			},
		]);

		setNewTaskName("");
	}

	function handleToggleTask(id: number) {
		setTasks((prevState) => {
			const newState = [...prevState];
			const index = newState.findIndex((item) => item.id === id);
			newState[index].isChecked = !newState[index].isChecked;

			return newState;
		});
	}

	function handleRemoveTask(id: number) {
		setTasks((prevState) => {
			return prevState.filter((item) => item.id !== id);
		});
	}
	console.log(tasks);

	return (
		<View style={styles.container}>
			<Header />

			<View style={styles.form}>
				<TextInput
					style={styles.taskInput}
					placeholder="Adicione uma nova tarefa"
					placeholderTextColor="#808080"
					value={newTaskName}
					onChangeText={setNewTaskName}
				/>
				<TouchableOpacity
					style={styles.taskAdd}
					onPress={handleAddTask}
				>
					<CirclePlus size={16} color="#fff" />
				</TouchableOpacity>
			</View>

			<View style={styles.summary}>
				<View style={styles.countContainer}>
					<Text style={[styles.countLabel, { color: "#4EA8DE" }]}>
						Criadas
					</Text>
					<Text style={styles.count}>{tasks.length}</Text>
				</View>
				<View style={styles.countContainer}>
					<Text style={[styles.countLabel, { color: "#8284FA" }]}>
						Concluídas
					</Text>
					<Text style={styles.count}>
						{tasks.filter((task) => task.isChecked).length}
					</Text>
				</View>
			</View>

			<View style={styles.tasksContainer}>
				<FlatList
					style={{ flex: 1 }}
					data={tasks.sort((a, b) => {
						if (a.isChecked && !b.isChecked) {
							return 1;
						} else if (!a.isChecked && b.isChecked) {
							return -1;
						}

						return a.name.toLowerCase() > b.name.toLowerCase()
							? 1
							: -1;
					})}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<Task
							{...item}
							onToggle={handleToggleTask}
							onRemove={handleRemoveTask}
						/>
					)}
					ListEmptyComponent={() => (
						<View style={styles.noTasksContainer}>
							<ClipboardList size={56} color="#3d3d3d" />
							<Text style={styles.noTasksTitle}>
								Você ainda não tem tarefas cadastradas
							</Text>
							<Text style={styles.noTasksHint}>
								Crie tarefas e organize seus itens a fazer
							</Text>
						</View>
					)}
				/>
			</View>
		</View>
	);
}
