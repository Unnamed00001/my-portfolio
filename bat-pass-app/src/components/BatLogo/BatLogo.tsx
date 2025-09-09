import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './BatLogStyle';
import batLogo from "../../../assets/bat-logo.png"

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>
            BAT PASS GENERATOR
        </Text>

        <Image 
        source = {batLogo}
        style = {{
            resizeMode: "contain",
            height: 180,

        }}
        ></Image>

    </>
  );
}