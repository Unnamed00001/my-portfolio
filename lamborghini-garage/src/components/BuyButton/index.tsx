import {View, TouchableOpacity, Text} from "react-native"
import { styles } from "./style"
import {Entypo} from '@expo/vector-icons';

export default function BuyButton(){
    return(
        <View style ={styles.container}>
            <TouchableOpacity style ={styles.button}>
                <Entypo 
                    name="shopping-cart" 
                    size={24} 
                    color="white"
                    style={styles.icon}
                />
                <Text style={styles.buttonText}> Buy This</Text>
            </TouchableOpacity>
        </View>
    )
}