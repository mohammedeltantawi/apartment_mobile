import { useNavigation as RNuseNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export default function useNavigation() {
	const navigation = RNuseNavigation<StackNavigationProp<any>>();

	return navigation;
}
