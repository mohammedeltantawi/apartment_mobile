import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ListComponent from "../components/list.component";
import { Apartment } from "../models/apartment.model";
import { getApartments } from "../network/services/apartments.service";


const ApartmentsListScreen = () => {
	const [apartments, setApartments] = useState<[Apartment]>();

	function getApartmentsList() {
		getApartments().then((res) => {
			if (res && res.status === 200) {
				setApartments(res.data);
			}
		});
	}

    useEffect(()=>{
		getApartmentsList();
    },[])

	return (
		<View style={{ gap: 10 }}>
			<Text>Apartments</Text>
			{
				apartments && apartments.map((item: Apartment) => 
                    <ListComponent key={item._id} apartment={item} />
				)
			}
		</View>
	);
};
export default ApartmentsListScreen;
