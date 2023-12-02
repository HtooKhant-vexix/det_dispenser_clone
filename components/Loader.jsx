import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";

const Loader = ({ navigation }) => {
  // const dis = () => navigation.navigate("dispenser");

  return (
    <View>
      <UIActivityIndicator size={70} color="tomato" />
      <Text style={tw`text-2xl text-gray-400 mt-5`}>Please Wait . . .</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  defaultButtonStyle: {
    height: 50,
  },
  buttonBorderStyle: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "blue",
    borderStyle: "solid",
  },
});
