import { View, Text, Button, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dSet } from "../features/counter/counterSlice";
import ButtonCard from "../components/ButtonCard";
import tw from "twrnc";
import Dispenser from "../data/Dispenser";
import dispenser from "../assets/dispenser.png";
// import Nozzle from "./Nozzle";
// import mq
import Paho from "paho-mqtt";

const Whole = ({ navigation }) => {
  // const [receivedMessage, setReceivedMessage] = useState(""); // State to store received message
  // const [value, setValue] = useState();
  // const nozzle = () => navigation.navigate("nozzle");
  const dispatch = useDispatch();

  useEffect(() => {
    client = new Paho.Client(
      "192.168.0.100",
      Number(9001), // this has to be a port using websockets
      `mqqt-async-test-${parseInt(Math.random() * 100)}`
      // `android-${parseInt(Math.random() * 100)}`
    );

    client.onMessageArrived = onMessageArrived;

    mqtt_option = {
      onSuccess: () => {
        console.log("Mqtt is Connected");
        client.subscribe("detpos/device/#");
        client.subscribe("detpos/local_server/#");
        // client.publish("detpos/device/whreq","sent")
        // console.log("====================================");
        // console.log(onMessageArrived);
        // console.log("====================================");

        // client.subscribe("detpos/local_server/#");
      },
      onFailure: (err) => {
        console.log("fail",err);
      },
      userName: "detpos",
      password: "asdffdsa",
      useSSL: false,
    };

    client.connect(mqtt_option);
    // client.onMessageArrived = onMessage;
  }, []);

  const onMessageArrived = (message) => {
    console.log("Received message from whole:", message.payloadString);
    // setReceivedMessage(message.payloadString); // Store received message in state
  };

  return (
    <ScrollView style={tw``}>
      <View style={tw`flex-1 justify-center items-center`}>
        <View
          style={tw`flex-1 mt-10  flex-wrap flex-row overflow-scroll items-center justify-center`}
        >
          {Dispenser.map((data) => (
            <ButtonCard
              key={parseInt(data.no)}
              onPress={() => {
                console.log(data.no);
                dispatch(dSet(data.no));
                client.publish("detpos/device/whreq", data.no);
                navigation.navigate("nozzle");
              }}
              img={dispenser}
              {...data}
            />
          ))}
        </View>
        {/* <ButtonCard
          onPress={() => {
            changeValue(client);
          }}
        /> */}
      </View>
    </ScrollView>
  );
};

export default Whole;
