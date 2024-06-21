import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Check, Trash2 } from "lucide-react-native";

export interface TaskInfos {
	id: number;
	name: string;
	isChecked: boolean;
}

export interface TaskProps extends TaskInfos {
	onToggle(id: number): void;
	onRemove(id: number): void;
}

export function Task({ id, name, isChecked, onToggle, onRemove }: TaskProps) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={isChecked ? styles.checked : styles.check}
				onPress={() => onToggle(id)}
			>
				{isChecked && <Check size={14} color="#fff" />}
			</TouchableOpacity>
			<Text style={styles.name}>{name}</Text>
			<TouchableOpacity
				style={styles.deleteButton}
				onPress={() => onRemove(id)}
			>
				<Trash2 size={14} color="#808080" />
			</TouchableOpacity>
		</View>
	);
}
