import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ListComponent from "../components/list.component";
import { Apartment } from "../models/apartment.model";
import { getApartment, getApartments } from "../network/services/apartments.service";


const ApartmentScreen = ({ navigation, route }: any) => {
    const [apartment, setApartment] = useState<Apartment>();

    useEffect(() => {
        getApartment(route.params.apartmentId)
        .then((res)=>{
            setApartment(res.data);
        })
    },[])
    return (        
            apartment ? 
        (  <View style={{ gap: 10 }}>
                <Text style={{fontSize: 30, fontWeight: "bold", color: "black" }}>Name: {apartment.name}</Text>
                <Text style={{fontSize: 30, fontWeight: "bold", color: "black" }}>About: {apartment.about}</Text>
                <Text style={{fontSize: 30, fontWeight: "bold", color: "black" }}>Area: {apartment.area}</Text>
                <Text style={{fontSize: 30, fontWeight: "bold", color: "black" }}>Price: {apartment.price}</Text> 
                <Text style={{fontSize: 30, fontWeight: "bold", color: "black" }}>Bedrooms: {apartment.bedrooms}</Text>
                <Text style={{fontSize: 30, fontWeight: "bold", color: "black" }}>Bathrooms: {apartment.bathrooms}</Text>  
                {apartment.resale && <Text>Resale</Text>}
            </View>) : (
            <View></View>
        )
    )
	
};
export default ApartmentScreen;
