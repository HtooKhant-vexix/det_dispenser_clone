import { NavigationContainer } from "@react-navigation/native";
// import Navigation from "./Navigation";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./app/store";
import AuthNavigation from "./src/navigation/authNavigation";

export default function App() {
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
