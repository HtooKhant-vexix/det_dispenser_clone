// import { View, Text } from 'react-native'
// import React from 'react'

// const LiveData = () => {
//   return (
//     <View>
//       <Text>LiveData</Text>
//     </View>
//   )
// }

// export default LiveData

import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import ButtonCard from "../components/ButtonCard";
import Dispenser from "../data/Dispenser";
import nozzle from "../assets/nozzle.png";
import WaitingScreen from "./WaitingScreen";
import PressingBtn from "../components/PressingBtn";
import { per } from "../features/counter/counterSlice";

const LiveData = ({ navigation }) => {
  const dispatch = useDispatch();
  const nav = () => navigation.navigate("dispenser");
  const [count, setCount] = useState(false);
  const [pcount, setpCount] = useState({
    liter: 0.0,
    kyat: 0.0,
  });
  const [pressTimer, setPressTimer] = useState(null);
  const [wait, setWait] = useState(true);
  const [revMsg, setRevMsg] = useState();
  const [kyat, setKyat] = useState(3);
  const [apr, setApr] = useState([]);

  const dis = useSelector((state) => state.counter.dis_no);
  const perApr = useSelector((state) => state.counter.col_permit);
  const noz = useSelector((state) => state.counter.noz_no);
  const nozzles = Dispenser.filter((e) => e.no == dis);
  const nozzleData = nozzles[0].nozzle;

  const permit = `${noz.length == 1 ? "0" + noz : noz}appro`;
  const permit2 = `${noz}appro`;

  useEffect(() => {
    client.onMessageArrived = onMessageArrived;
  }, []);

  useEffect(() => {
    if (permit == revMsg) {
      setWait(false);
      dispatch(per([...perApr, { revMsg, price: 1000 }]));
      // setApr([...apr, revMsg]);
    }
  }, [revMsg, permit]);

  console.log("===========aprrrr=========================");
  console.log(perApr);
  console.log("===========aprrrrr========================");

  const arrTest = perApr.find((e) => e.revMsg == permit);
  console.log("====testtt================================");
  console.log(arrTest);
  !arrTest ? console.log("true") : console.log("false");
  console.log("====testtt================================");
  const onMessageArrived = (message) => {
    const msg = message.payloadString;
    const topic = message.topic;
    if (topic == `detpos/local_server/${dis}`) {
      setRevMsg(msg);
    } else {
      console.log("not equal");
    }
  };
  // useEffect(() => {
  //   count &&
  //     client.publish(
  //       `detpos/device/livedata/${dis}`,
  //       `${noz.length == 1 ? "0" + noz : noz}L${pcount.liter.toFixed(
  //         3
  //       )}P${parseFloat(pcount.kyat)}`
  //     );
  // }, []);

  useEffect(() => {
    const publishData = () => {
      client.publish(
        `detpos/device/livedata/${dis}`,
        `${noz.length == 1 ? "0" + noz : noz}L${pcount.liter.toFixed(
          3
        )}P${parseFloat(pcount.kyat)}`
      );
    };

    if (count) {
      publishData();
    }

    return () => {
      client.unsubscribe("detpos/device/livedata/#");
    };
  }, [count, pcount]);

  return (
    <View style={tw`flex-1 justify-center items-center `}>
      <View style={tw` flex gap-5 ml-[-135px] items-start `}>
        <View style={tw`flex-row mb-[-20px]`}>
          <Text style={tw`text-3xl pt-3 font-bold text-gray-500`}>
            Dispenser :{" "}
          </Text>
          <Text style={tw`text-3xl pt-3 text-red-500 ml-3`}>{dis}</Text>
        </View>
        <View style={tw`flex-row`}>
          <Text style={tw`text-3xl pt-3 font-bold text-gray-500`}>
            Nozzle :{" "}
          </Text>
          <Text style={tw`text-3xl pt-3 text-red-500 ml-3`}>{noz}</Text>
        </View>
      </View>
      <View
        style={tw`flex w-[95%] flex-wrap flex-row gap-3 justify-center items-center`}
      >
        <View
          style={tw` gap-4 rounded-md flex flex-row justify-center items-center py-4 pl-10  pr-10 w-[96%]`}
        >
          <View style={tw`flex-col`}>
            <View style={tw`flex flex-row items-center mb-5 gap-4`}>
              <View
                style={tw`pt-6 pb-4  flex border-2  border-gray-700 rounded-md justify-center items-center `}
              >
                <Text style={tw`text-2xl pl-6 pr-6 text-gray-700`}>LITERS</Text>
              </View>
              <View
                style={tw`border-2 border-gray-700 rounded-md  pt-6 pb-4 px-16 flex justify-center items-center`}
              >
                <Text style={tw`text-2xl text-gray-700`}>KYATS</Text>
              </View>
            </View>
            <View style={tw`flex flex-row gap-4`}>
              <View
                style={tw`bg-red-300 bg-gray-700 w-32 h-20 rounded-sm flex justify-center items-center `}
              >
                <Text style={tw`text-3xl text-gray-300 pt-5 font-bold`}>
                  {pcount.liter.toFixed(2)}
                </Text>
              </View>
              <View
                style={tw`bg-red-300 bg-gray-700 w-50 h-20 rounded-sm flex justify-center items-center`}
              >
                <Text style={tw`text-3xl text-gray-300 pt-5 font-bold`}>
                  {pcount.kyat.toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={tw`flex items-center flex-row w-full justify-around `}>
          <TouchableOpacity
            onPress={() => {
              client.publish("detpos/local_server", `${noz}/D1S1`);
              navigation.navigate("dispenser");
            }}
            style={tw`w-[45%]`}
          >
            <View
              style={tw`bg-[#F7665E] rounded-md pt-5 pb-3 pl-10  pr-10 flex items-center`}
            >
              <Text style={tw`text-2xl text-center text-white`}>Cancel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              client.publish(
                `detpos/device/Final/${dis}`,
                `${
                  noz.length == 1 ? "0" + noz : noz
                }S2000L${pcount.liter.toFixed(3)}P${parseFloat(
                  pcount.kyat
                )}T123.456`
              );
              client.publish("detpos/local_server", `${noz}/D1S1`);
              navigation.navigate("dispenser");
            }}
            style={tw``}
          >
            <View
              style={tw`bg-green-500 rounded-md pt-5 pb-3 pl-10  pr-10 flex items-center`}
            >
              <Text style={tw`text-2xl text-center text-white`}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
        <PressingBtn
          onPressIn={() => {
            console.log(pressTimer), setCount(true);
            setPressTimer(
              setInterval(() => {
                setpCount((prevCount) => ({
                  ...prevCount,
                  liter: prevCount.liter + 0.02,
                  kyat: prevCount.kyat + 20,
                }));
              }, 150)
            );
          }}
          onPressOut={() => {
            clearInterval(pressTimer);
            setCount(false);
            setpCount((prevCount) => ({
              ...prevCount,
              liter: parseFloat(prevCount.liter.toFixed(2)),
              kyat: parseFloat(prevCount.kyat.toFixed(2)),
            }));
          }}
        />
      </View>
    </View>
  );
  // return !arrTest ? (
  //   <WaitingScreen
  //     onPress={() => {
  //       client.publish("detpos/device/req", `${noz}/cancel`);
  //       navigation.navigate("dispenser");
  //     }}
  //   />
  // ) : (
  //   <View style={tw`flex-1 justify-center items-center `}>
  //     <View style={tw` flex gap-5 ml-[-135px] items-start `}>
  //       <View style={tw`flex-row mb-[-20px]`}>
  //         <Text style={tw`text-3xl pt-3 font-bold text-gray-500`}>
  //           Dispenser :{" "}
  //         </Text>
  //         <Text style={tw`text-3xl pt-3 text-red-500 ml-3`}>{dis}</Text>
  //       </View>
  //       <View style={tw`flex-row`}>
  //         <Text style={tw`text-3xl pt-3 font-bold text-gray-500`}>
  //           Nozzle :{" "}
  //         </Text>
  //         <Text style={tw`text-3xl pt-3 text-red-500 ml-3`}>{noz}</Text>
  //       </View>
  //     </View>
  //     <View
  //       style={tw`flex w-[95%] flex-wrap flex-row gap-3 justify-center items-center`}
  //     >
  //       <View
  //         style={tw` gap-4 rounded-md flex flex-row justify-center items-center py-4 pl-10  pr-10 w-[96%]`}
  //       >
  //         <View style={tw`flex-col`}>
  //           <View style={tw`flex flex-row items-center mb-5 gap-4`}>
  //             <View
  //               style={tw`pt-6 pb-4  flex border-2  border-gray-700 rounded-md justify-center items-center `}
  //             >
  //               <Text style={tw`text-2xl pl-6 pr-6 text-gray-700`}>LITERS</Text>
  //             </View>
  //             <View
  //               style={tw`border-2 border-gray-700 rounded-md  pt-6 pb-4 px-16 flex justify-center items-center`}
  //             >
  //               <Text style={tw`text-2xl text-gray-700`}>KYATS</Text>
  //             </View>
  //           </View>
  //           <View style={tw`flex flex-row gap-4`}>
  //             <View
  //               style={tw`bg-red-300 bg-gray-700 w-32 h-20 rounded-sm flex justify-center items-center `}
  //             >
  //               <Text style={tw`text-3xl text-gray-300 pt-5 font-bold`}>
  //                 {pcount.liter.toFixed(2)}
  //               </Text>
  //             </View>
  //             <View
  //               style={tw`bg-red-300 bg-gray-700 w-50 h-20 rounded-sm flex justify-center items-center`}
  //             >
  //               <Text style={tw`text-3xl text-gray-300 pt-5 font-bold`}>
  //                 {pcount.kyat.toFixed(2)}
  //               </Text>
  //             </View>
  //           </View>
  //         </View>
  //       </View>

  //       <View style={tw`flex items-center flex-row w-full justify-around `}>
  //         {/* <TouchableOpacity
  //           onPress={() => {
  //             client.publish("detpos/local_server", `${noz}/D1S1`);
  //             navigation.navigate("Dispenser");
  //           }}
  //           style={tw`w-[45%]`}
  //         >
  //           <View
  //             style={tw`bg-[#F7665E] rounded-md pt-5 pb-3 pl-10  pr-10 flex items-center`}
  //           >
  //             <Text style={tw`text-2xl text-center text-white`}>Cancel</Text>
  //           </View>
  //         </TouchableOpacity> */}
  //         <TouchableOpacity
  //           onPress={() => {
  //             client.publish(
  //               `detpos/device/Final/${dis}`,
  //               `${
  //                 noz.length == 1 ? "0" + noz : noz
  //               }S2000L${pcount.liter.toFixed(3)}P${parseFloat(
  //                 pcount.kyat
  //               )}T123.456`
  //             );
  //             client.publish("detpos/local_server", `${noz}/D1S1`);
  //             navigation.navigate("dispenser");
  //           }}
  //           style={tw``}
  //         >
  //           <View
  //             style={tw`bg-green-500 rounded-md pt-5 pb-3 pl-10  pr-10 flex items-center`}
  //           >
  //             <Text style={tw`text-2xl text-center text-white`}>Submit</Text>
  //           </View>
  //         </TouchableOpacity>
  //       </View>
  //       <PressingBtn
  //         onPressIn={() => {
  //           console.log(pressTimer), setCount(true);
  //           setPressTimer(
  //             setInterval(() => {
  //               setpCount((prevCount) => ({
  //                 ...prevCount,
  //                 liter: prevCount.liter + 0.02,
  //                 kyat: prevCount.kyat + 20,
  //               }));
  //             }, 150)
  //           );
  //         }}
  //         onPressOut={() => {
  //           clearInterval(pressTimer);
  //           setCount(false);
  //           setpCount((prevCount) => ({
  //             ...prevCount,
  //             liter: parseFloat(prevCount.liter.toFixed(2)),
  //             kyat: parseFloat(prevCount.kyat.toFixed(2)),
  //           }));
  //         }}
  //       />
  //     </View>
  //   </View>
  // );
};

export default LiveData;
