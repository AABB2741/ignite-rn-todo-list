import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: "#262626",
		borderRadius: 8,
		padding: 12,
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		marginBottom: 8,
		marginHorizontal: 24,
	},
	check: {
		width: 18,
		height: 18,
		borderWidth: 2,
		borderColor: "#4EA8DE",
		borderRadius: 50,
	},
	checked: {
		width: 18,
		height: 18,
		borderRadius: 50,
		backgroundColor: "#5E60CE",
		alignItems: "center",
		justifyContent: "center",
	},
	name: {
		fontSize: 14,
		color: "#fff",
		flex: 1,
	},
	deleteButton: {
		padding: 10,
	},
});
