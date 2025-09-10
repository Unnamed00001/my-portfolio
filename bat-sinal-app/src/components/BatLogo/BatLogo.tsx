import React from 'react';
import {Image} from 'react-native';
import batlogo from "../../../assets/PinClipart.com_batmobile-clipart_522384.png"

export function BatLogo() {
  return (
    <>
      <Image
        source={batlogo}
        style ={{
          resizeMode: "contain",
          height: 130
        }}
      ></Image>
    
    </>
    
  );
}