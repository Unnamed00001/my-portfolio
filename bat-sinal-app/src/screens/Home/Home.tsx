import React from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from './styles';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatButton } from '../../components/BatButton/BatButton';

export function Home() {
  return (
    <View style={styles.appContainer}>
        <BatLogo/>
        <BatButton/>
        <Text style={{color: "blue"}}>Roger</Text>

    </View>
  );
}