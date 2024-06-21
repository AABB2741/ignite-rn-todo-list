import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1A1A1A",
		flex: 1,
	},
	form: {
		flexDirection: "row",
		gap: 8,
		paddingHorizontal: 24,
		marginTop: -26,
	},
	taskInput: {
		backgroundColor: "#262626",
		flex: 1,
		borderRadius: 6,
		height: 52,
		padding: 16,
		color: "#fff",
		fontSize: 16,
	},
	taskAdd: {
		backgroundColor: "#1E6F9F",
		justifyContent: "center",
		alignItems: "center",
		width: 52,
		height: 52,
		borderRadius: 6,
	},
	summary: {
		marginTop: 32,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
		marginHorizontal: 24,
	},
	countContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	countLabel: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#fff",
	},
	count: {
		fontSize: 12,
		fontWeight: "bold",
		paddingHorizontal: 8,
		paddingVertical: 2,
		backgroundColor: "#333333",
		borderRadius: 12,
		color: "#fff",
	},
	tasksContainer: {
		flex: 1,
	},
	noTasksContainer: {
		alignItems: "center",
		marginHorizontal: 24,
		paddingVertical: 48,
		borderTopWidth: 2,
		borderColor: "#333333",
	},
	noTasksTitle: {
		color: "#808080",
		fontSize: 14,
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 16,
	},
	noTasksHint: {
		color: "#808080",
		fontSize: 14,
		textAlign: "center",
	},
});
