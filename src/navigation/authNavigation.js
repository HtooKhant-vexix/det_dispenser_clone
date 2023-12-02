import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Whole from '../../screens/Whole';
import Nozzle from '../../screens/Nozzle';
// import Whole from "./screens/Whole";
// import Nozzle from "./screens/Nozzle";
import LiveData from "../../screens/LiveData";



function AuthNavigation() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="dispenser">
      {/* <Stack.Screen name="live" component={Live} /> */}
      <Stack.Screen name="dispenser" component={Whole} />
      <Stack.Screen name="nozzle" component={Nozzle} />
      <Stack.Screen name="liveData" component={LiveData} />
      {/* <Stack.Screen name="waiting" component={WaitingScreen} /> */}
    </Stack.Navigator>
  );
}

export default AuthNavigation