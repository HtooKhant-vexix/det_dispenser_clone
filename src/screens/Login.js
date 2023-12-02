//import liraries
import React, { Component,useContext,useState } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import Button from '../components/Button';
import color from '../config/color';
import ErrorCom from '../components/Error';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AuthContext from '../auth/context/context';
import storage from '../auth/storage/storage';
import axios from 'axios';
import LoginFail from '../components/LoginFail';

// create a component
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);
    const [failed, setFailed] = useState(false);
    const authContext = useContext(AuthContext);



    const handleLogin = async () => {
        if (email == undefined && password == undefined) {
            setError(true);
        } else {
            setError(false);
            const bombObj = {
                email: email,
                password: password
            };

    axios.post('https://detfsmm.com/api/user/login', bombObj)
  .then(function (response) {
      console.log(response.data.result);
      if (response.data.result) {
            setFailed(false);
            const user = {
                email: response.data.result.email,
                name: response.data.result.name
            };

            storage.storeToken(response.data.result.token);
            authContext.setUser(user);
      } else {
          setFailed(true);
      }
  })
  .catch(function (error) {
    console.log(error);
  });
        }   
    };


    return (
        <View style={styles.container}>
            <Image style={{position:'absolute',height:'100%',top:0,left:0,bottom:0,opacity:0.3}} source={require('../../assets/aq.png')}/>
            <View >
                <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
                      <Text style={{
                    fontSize: 30,
                    fontWeight:'bold',
                    color: color.light,
                    marginBottom:5
                }}>Digital Engineering Tech</Text>
              </View>
                <Text style={{
                    fontSize: 20,
                    color: color.activeColor
                }}>Use Smart Devices To Become Smart Life</Text>
            </View>
            <View style={{ backgroundColor: color.bgLight, padding: 15, elevation: 30, paddingVertical: 40, width: '40%' }}>
             <Text style={{
                color:color.light,
                textTransform:'uppercase',
                fontWeight:'bold',
                marginBottom:5,
             }}>Welcome Our Installer</Text>
                  {
                error && <LoginFail title={"Please Fill The Form!"}/>
            }
            {
                failed && <LoginFail title={"Something went wrong!"} />
            }
            <View>
             
            <AppTextInput width='100%' onChangeText={setEmail} value={email}  placeholder="Email" icon={'account'} /> 
            <AppTextInput width='100%' onChangeText={setPassword} value={password} placeholder="Password" icon={'lock'} /> 
            <Button width={200} onPress={handleLogin} title={"Login"} color={color.activeColor}/>
        </View>
          </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        gap:40,
        alignItems: 'center',
        backgroundColor: color.background,
        position:'relative'
    },
});

//make this component available to the app
export default Login;
