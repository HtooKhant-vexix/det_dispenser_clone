import { View, Text, TouchableHighlight, Image } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import nozzle from "../../assets/nozzle.png";

const PressingBtn = ({onPressIn,onPressOut}) => {

  return (
    <TouchableHighlight
      style={tw`w-[130px] m-2 p-5 h-[130px] py-10 flex items-center justify-center rounded-xl bg-white border-2 border-red-200 `}
      activeOpacity={0.5}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      underlayColor="#FF030320"
      //   onPress={onPress}
    >
      
      <View
        style={tw`relative flex justify-center items-center w-full h-full `}
      >
        <Image style={tw`h-[80px] w-[80px]`} source={nozzle} />
      </View>
    </TouchableHighlight>
  );
};

export default PressingBtn;
