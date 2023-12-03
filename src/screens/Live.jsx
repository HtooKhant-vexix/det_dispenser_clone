import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, per } from "../features/counterSlice";
import ButtonCard from "../components/ButtonCard";
import PressingBtn from "../components/PressingBtn";

const Live = ({ navigation }) => {
  const whole = () => navigation.navigate("dispenser");
  const nozzle = () => navigation.navigate("nozzle");
  const liveData = () => navigation.navigate("liveData");
  const [count, setCount] = useState(0.0);
  const [pressTimer, setPressTimer] = useState(null);
  const perApr = useSelector((state) => state.counter.col_permit);
  console.log('=pppppp===================================');
  console.log(perApr?.filter(e=>e.revMsg != "01appro"));
  console.log('=ppppp===================================');
  // const handlePress = () => {
  //   setCount(count + 1);
  // };
  // console.log(onPress);
  // console.log('====================================');
  // console.log(pressTimer);
  // console.log('====================================');
  // client.subscribe("detpos/device/#");
  // useEffect(() => {
  //   client.onMessageArrived = onMessageArrived;
  // }, []);
  // const onMessageArrived = (message) => {
  //   console.log("Received message:", message.payloadString);
  //   // setReceivedMessage(message.payloadString); // Store received message in state
  // };

  const counter = useSelector((state) => state.counter.col_permit);
  console.log(counter);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Counter:{count?.toFixed(2)}</Text>
      <Button title="in" onPress={() => dispatch(increment())} />
      <Button title="towhole" onPress={whole} />
      <Button title="nozzle" onPress={nozzle} />
      <Button title="liveData" onPress={liveData} />
      <Button title="ttt" onPress={()=>dispatch(per([]))} />
      <ButtonCard
        // onPress={handlePress}
        onPressIn={() => {
          console.log(pressTimer),
            setPressTimer(
              setInterval(() => {
                setCount((prevCount) => prevCount + 0.88);
              }, 100)
            );
        }}
        onPressOut={() => {
          console.log(pressTimer), clearInterval(pressTimer);
        }}
      />

      <PressingBtn />
    </View>
  );
};

export default Live;
