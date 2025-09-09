import { StatusBar } from "expo-status-bar";
import React from "react";
import {Text,View} from "react-native";
import styles from "./HomeStyle";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {
    return(

        <View style = {styles.styles.appContainer}>

            <View style = {styles.styles.logoContainer}>
                <BatLogo/>
            </View>

            <View style ={styles.styles.inputContainer}>
                <BatButton/>
            </View>

            
            
            

            <StatusBar style='light'/>
        </View>
    )
    
};
