import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./navigation";
import ApartmentsNavigation from "./apartments/apartments.navigation";
import Stacks from "./stacks/stacks";

export default function Navigation() {
	const MainStack = createStackNavigator();


	return (
		<NavigationContainer ref={navigationRef}>
			<MainStack.Navigator screenOptions={{ headerShown: false }}>
				<MainStack.Screen
					name={Stacks.MainStacks.menuList.Apartments.id}
					component={ApartmentsNavigation}
				/>
			</MainStack.Navigator>
		</NavigationContainer>
	);
}
