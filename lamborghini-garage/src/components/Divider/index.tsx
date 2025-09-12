import { View } from "react-native";
import { styles } from "./style";

export default function Divider(){
    return(
        <View style = {styles.dividerConteiner}> 
            <View style = {styles.divider}></View>
        </View>
    )
}