import React, { useEffect, useState } from "react";
import { View, Text, Image, Button } from "react-native";

import Divider from "../Divider";
import BuyButton from "../BuyButton";

import { CAR_ASSENTS_BASE_URL } from "../../constants/car";

import logo from "../../../assets/logo-lamborhini.png"
import { styles } from "./style";
import { CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCartData } from "./actions";

export default function CardView(){
    const [carData, setCarData] = useState<CarModel | null>(null)

    useEffect(()=>{
        (async () =>{
            await loadCartData(1, setCarData)
        })();

    },[]);

    const renderLogoBox = () => (
        <View style = {styles.logoContainer}>
             <Image style={styles.imageLogo} source={logo}/>
        </View>
    );

    const renderCarDetalis = () => (
        <View style = {{alignItems:"center",}}>
            <Text style ={styles.carBrand}>Lamborghini</Text>
            <Text style ={styles.carName}>{carData?.carName}</Text>
        </View>
    );

    const renderCarImage = () => (
        <Image 
            style = {styles.image}
            source={{uri: `${CAR_ASSENTS_BASE_URL}${carData?.id}.png`,}}
        />
    );

    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
            <Button title="<"
                color={"#01A6B3"}
                onPress={() =>{handlePreviousItem(carData, setCarData)}}
                
            />
            <Text style={styles.priceLabel}>{carData?.price}</Text>
            <Button title=">"
                color={"#01A6B3"}
                onPress={() =>{handleNextItem(carData, setCarData)}}
            />
        </View>
    );
    

    return(
        <View style={styles.ImageContainer}>
            {renderLogoBox()}

            <Divider/>
            {renderCarDetalis()}
            {renderCarImage()}
            
            <Divider/>
            <BuyButton/>
            {renderPriceControls()}

        </View>
    );
}