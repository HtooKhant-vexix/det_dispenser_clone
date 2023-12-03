import { View, Text, TouchableHighlight, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const ButtonCard = ({ no, n_no, img,onPress,onPressIn,onPressOut }) => {
    // console.log('====================================');
    // console.log(onPress);
    // console.log('====================================');
  // const dispenser = {require('../assets/dispenser.png')}

  return (
    <TouchableHighlight
      style={tw`w-[140px] m-2 p-5 h-[140px] py-10 flex items-center justify-center rounded-xl bg-white border-2 border-red-200 `}
      activeOpacity={0.5}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      underlayColor="#FF030320"
      onPress={onPress}
    >
      <View
        style={tw`relative flex justify-center items-center w-full h-full `}
      >
        <Image style={tw`h-[100px] w-[100px]`} source={img} />
        <View
          style={tw`h-[50px] mt-[-65px] ml-[-6px] justify-center bg-gray-500 flex items-center w-[50px] rounded-xl `}
        >
          <Text style={tw`text-2xl text-white pt-2 font-bold`}>{no || n_no}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ButtonCard;
