import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";

const WaitingScreen = ({navigation,onPress}) => {
    // const noz = useSelector((state) => state.counter.noz_no);
  
  return (
    <View style={tw`flex-1 justify-center items-center `}>
      <Text>
        <Loader />
      </Text>
      <TouchableOpacity onPress={onPress} style={tw`w-[45%] mt-5`}>
        <View
          style={tw`bg-[#F7665E] rounded-md pt-5 pb-3 pl-10  pr-10 flex items-center`}
        >
          <Text style={tw`text-2xl text-center text-white`}>Cancel</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WaitingScreen;
