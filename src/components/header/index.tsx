import { Image, View } from "react-native";
import { styles } from "./styles";

import logo from "@assets/logo.svg";
import { Logo } from "../logo";

export function Header() {
	return (
		<View style={styles.container}>
			<Logo />
		</View>
	);
}
