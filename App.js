import { NavigationContainer } from "@react-navigation/native";
// import Navigation from "./Navigation";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./src/app/store";
import AuthNavigation from "./src/navigation/authNavigation";
import Paho from "paho-mqtt";
import { useEffect } from "react";

export default function App() {
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
        client.subscribe("detpos/local_server/mode");
        // client.publish("detpos/device/whreq","sent")
        // console.log("====================================");
        // console.log(onMessageArrived);
        // console.log("====================================");

        // client.subscribe("detpos/local_server/#");
      },
      onFailure: (err) => {
        console.log("fail", err);
      },
      userName: "detpos",
      password: "asdffdsa",
      useSSL: false,
    };

    client.connect(mqtt_option);
    // client.onMessageArrived = onMessage;
  }, []);
  const onMessageArrived = (message) => {
    if (
      message.topic == "detpos/local_server/mode" &&
      message.payloadString != mode
    ) {
      setMode(message.payloadString);
    }
    console.log("Received message from whole:", message.payloadString);
    // setReceivedMessage(message.payloadString); // Store received message in state
  };
  // const [user, setUser] = useState();

  // const restoreToken = async () => {
  //   const token = await storage.getToken();
  //   if (!token) return;
  // };

  // useEffect(() => {
  //   restoreToken();
  // },[user])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
