//import liraries
import React, { Component, useState,useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import Button from '../components/Button';
import color from '../config/color';
import ErrorCom from '../components/Error';
import CreateManagerApi from '../auth/api/manager';
import StationPicker from '../components/StationPicker';
import SuccessUser from '../components/SuccessUser';
import authStorage from '../auth/storage/storage';
import axios from 'axios';
import Screen from '../components/Screen';

// create a component
const CashierOne = () => {

    const [stationId, setStationId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [comparePassword, setComparePassword] = useState();
    const [success, setSuccess] = useState(false);

    const [items, setItems] = useState();

    const [error, setError] = useState();


    const handleRegister = async () => {
        if (stationId == undefined && name == undefined && email == undefined && phone == undefined && password == undefined && comparePassword == undefined) {
            setError(true);
        } else {
            const managerObj = {
                name: name,
                email: email,
                phone: phone,
                password: password,
                comparePassword: comparePassword,
                stationNo: 22,
                stationId: stationId._id,
            };



            const response = await CreateManagerApi.addManager(managerObj);
                if (response.data.result) {
                setSuccess(true);
                setName();
                setEmail();
                setPhone();
                setPassword();``
                setComparePassword();
            }
        }
    };


    
  useEffect(() => {

    const fetchIt = async () => {
      const authToken = await authStorage.getToken();
      axios.get('https://detfsmm.com/api/station-detail/1', {
        headers: {
          'Authorization': 'Bearer ' + authToken
        }
      })
        .then(function (response) {
          console.log(response.data)
          if (response.data.result) {
              
            setItems(response.data.result);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchIt();

  }, []);


    useEffect(() => {
    const interval = setInterval(() => {
     
      
        setSuccess(false);

  
    }, 2000); // Update the values every second

    return () => {
      clearInterval(interval);
    };
    }, [success]);

    return (
        <>
         
            <Screen>
                  <ScrollView>
   {
                success && <SuccessUser/>
            }
            {
                error && <ErrorCom/>
            }
               <View style={styles.container}>
            <Text style={{
                textAlign: 'center',
                marginTop: 20,
                marginBottom:30,
                color:color.light
            }}>Cashier  Register</Text>
            <View style={{
                flexDirection:'row'
            }}>
            <StationPicker 
              width='40%'
              selectedItem={stationId}
              onSelectedItem={item=> setStationId(item)}
              item={items} placeholder="Station Id" icon={'arrange-bring-to-front'}
                        />
            <AppTextInput onChangeText={(value)=>setName(value)} value={name} width='40%' placeholder="Cashier Code" icon={'account'}/>
           </View>
            <View style={{
                flexDirection:'row'
            }}>
            <AppTextInput onChangeText={(value)=>setEmail(value)} value={email} width='40%' placeholder="Name" icon={'email'}/>
            <AppTextInput  onChangeText={(value)=>setPhone(value)} value={phone} width='40%' placeholder="Phone" icon={'phone'}/>
           </View>
            <View style={{
                flexDirection:'row'
            }}>
            <AppTextInput onChangeText={(value)=>setPassword(value)} value={password} width='40%' placeholder="Password" icon={'lock'}/>
            <AppTextInput onChangeText={(value)=>setComparePassword(value)} value={comparePassword} width='40%' placeholder="Compare Password" icon={'lock'}/>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 30,
                marginTop:30
            }}>
                <Button title={'Register'} onPress={handleRegister} width={200} color={color.activeColor}/>
            </View>
        </View>
        </ScrollView>
          </Screen>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default CashierOne;
