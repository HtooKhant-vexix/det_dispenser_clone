import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import ButtonCard from "../components/ButtonCard";
import Dispenser from "../data/Dispenser";
import nozzle from "../assets/nozzle.png";
import { nSet } from "../features/counter/counterSlice";
import Paho from "paho-mqtt";

// client = new Paho.Client(
//   "192.168.0.100",
//   Number(9001), // this has to be a port using websockets
//   `mqqt-async-test-${parseInt(Math.random() * 100)}`
//   // `android-${parseInt(Math.random() * 100)}`
// );

const Nozzle = ({ navigation }) => {
  const dis = useSelector((state) => state.counter.dis_no);
  console.log(dis);
  const dispatch = useDispatch();
  const nozzles = Dispenser.filter((e) => e.no == dis);
  const nozzleData = nozzles[0].nozzle;

  // function onMessage(message) {
  //   if (message.destinationName === "detpos/device/#") {
  //     setValue(parseInt(message.payloadSrting));
  //   }
  // }

  //   const noz = useSelector(state=>state)
  // useEffect(() => {
  //   mqtt_option = {
  //     onSuccess: () => {
  //       // console.log("Mqtt is Connected");
  //       client.subscribe("detpos/device/#");
  //       // client.publish("detpos/device/whreq","sent")
  //       client.onMessageArrived = onMessage;

  //       // client.subscribe("detpos/local_server/#");
  //     },
  //     onFailure: (err) => {
  //       console.log("fail");
  //     },
  //     userName: "detpos",
  //     password: "asdffdsa",
  //     useSSL: false,
  //   };

  //   client.connect(mqtt_option);
  //   // client.onMessageArrived = onMessage;
  // }, []);
  //   console.log(dis);

  //   console.log(nozzleData);
  return (
    <ScrollView>
      <View style={tw`flex-1 justify-center items-center `}>
        {/* <View>
        <Text style={tw`text-3xl font-semibold`}>{dis}</Text>
      </View> */}
        <View
          style={tw`flex w-[100%] flex-wrap gap-3 mt-20 flex-row justify-center items-center`}
        >
          {nozzleData.map((data) => (
            <Text key={parseInt(data)} style={tw``}>
              <ButtonCard
                n_no={data}
                onPress={() => {
                  client.publish(`detpos/device/permit/${dis}`, data);
                  dispatch(nSet(data));
                  console.log(data);
                  navigation.navigate("liveData");
                }}
                img={nozzle}
              />
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Nozzle;
