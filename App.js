import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import AuthContext from './src/auth/context/context';
import { useContext, useEffect, useState } from 'react';
import storage from './src/auth/storage/storage';
import AuthNavigation from './src/navigation/authNavigation';

export default function App() {
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await storage.getToken();
    if (!token) return;
  };

  useEffect(() => {
    restoreToken();
  },[user])
  
  return (
    <AuthContext.Provider value={{user,setUser}}>
      <NavigationContainer>
        {user ? <AuthNavigation/> : <Login/>}
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
