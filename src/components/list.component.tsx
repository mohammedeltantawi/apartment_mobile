import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { ApartmentsStack } from "../navigation/apartments/apartments.stack";
import { Apartment } from "_models/apartment.model";
import useNavigation from "../hooks/useNavigation";

interface listType {
	apartment: Apartment
}

const ListComponent = (
    { apartment }: listType
) => {
    const navigation = useNavigation();

    function goToApartment() {
        console.log("navigation");
        navigation.navigate(ApartmentsStack.menuList?.ApartmentDetails.id, {apartmentId: apartment._id});
    }

	return (
		<View>
			<Text style={{fontSize: 20, fontWeight: "bold", color: "black" }}>{apartment.name}</Text>
            <Text style={{fontSize: 20, fontWeight: "bold", color: "black" }}>{apartment.about}</Text>
            <Button  onPress={goToApartment} title="More Details"/>
        </View>
	);
};
export default ListComponent;
