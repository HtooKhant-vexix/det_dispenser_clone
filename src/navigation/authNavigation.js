import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListPage from '../screens/ListPage';
import FirstPage from '../screens/FirstPage';
import AddTank from '../screens/AddTank';
import User from '../screens/User';
import ManagerScreen from '../screens/ManagerScreen';
import CashierOne from '../screens/CashierOne';
import AddRole from '../screens/AddRole';
import AddTotalizer from '../screens/AddTotalizer';
import color from '../config/color';



function AuthNavigation() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="INSTALLER TOOLS"
            component={ListPage}
             options={{
          title: 'INSTALLER TOOLS',
          headerStyle: {
            backgroundColor: color.bgLight,
          },
          headerTintColor: color.light,
          headerTitleStyle: {
              fontWeight: '100',
              fontSize:19
          },
        }}
        />
    <Stack.Screen
            name="FirstPage"
            component={FirstPage}
             options={{
          title: 'ADD DEVICES',
          headerStyle: {
            backgroundColor: color.bgLight,
          },
          headerTintColor: color.light,
          headerTitleStyle: {
              fontWeight: '100',
              fontSize:19
          },
        }}
        />
        <Stack.Screen
            name="Addtank"
            component={AddTank}
             options={{
          title: 'ADD TANKS',
          headerStyle: {
            backgroundColor: color.bgLight,
          },
          headerTintColor: color.light,
          headerTitleStyle: {
              fontWeight: '100',
              fontSize:19
          },
        }}
        />
        <Stack.Screen
            name="Adduser"
              component={User}
               options={{
          title: 'ADD USERS',
          headerStyle: {
            backgroundColor: color.bgLight,
          },
          headerTintColor: color.light,
          headerTitleStyle: {
              fontWeight: '100',
              fontSize:19
          },
        }}
        />
        <Stack.Screen
              name="Totalizer"
              component={AddTotalizer}
               options={{
          title: 'ADD TOTALIZERS',
          headerStyle: {
            backgroundColor: color.bgLight,
          },
          headerTintColor: color.light,
          headerTitleStyle: {
              fontWeight: '100',
              fontSize:19
          },
        }}
          />
        <Stack.Screen
            name="Manager"
              component={ManagerScreen}
               options={{
          title: 'ADD MANAGER',
          headerStyle: {
            backgroundColor: color.bgLight,
          },
          headerTintColor: color.light,
          headerTitleStyle: {
              fontWeight: '100',
              fontSize:19
          },
        }}
        />
        <Stack.Screen
            name="CashierOne"
            component={CashierOne}
             options={{
          title: 'ADD CASHIERS',
          headerStyle: {
            backgroundColor: color.bgLight,
          },
          headerTintColor: color.light,
          headerTitleStyle: {
              fontWeight: '100',
              fontSize:19
          },
        }}
        />
         <Stack.Screen
            name="AddRole"
            component={AddRole}
             options={{
          title: 'ADD ROLE',
          headerStyle: {
            backgroundColor: color.bgLight,
          },
          headerTintColor: color.light,
          headerTitleStyle: {
              fontWeight: '100',
              fontSize:19
          },
        }}
        />
    </Stack.Navigator>
  )
}

export default AuthNavigation