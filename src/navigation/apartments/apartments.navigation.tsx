import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ApartmentsListScreen from "../../screens/apartments-list.screen"
import { ApartmentsStack } from "./apartments.stack";
import ApartmentScreen from "../../screens/apartment.screen";

const ApartmentsNavigation = () => {
    const Stack = createStackNavigator();
	return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={ApartmentsStack.menuList.ApartmentsList.id}
                component={ApartmentsListScreen}
            />
            <Stack.Screen
                name={ApartmentsStack.menuList.ApartmentDetails.id}
                component={ApartmentScreen}
            />
        </Stack.Navigator>
    );
};
export default ApartmentsNavigation;