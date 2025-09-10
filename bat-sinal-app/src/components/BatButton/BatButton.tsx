import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from './styles';

export function BatButton() {
  return (
    <View>
        <Pressable>
            <Text 
                style = {styles.texto}
                onPress = {() => console.log("test")}
            >Activate bat signal</Text>
        </Pressable>
        
    </View>
  );
}