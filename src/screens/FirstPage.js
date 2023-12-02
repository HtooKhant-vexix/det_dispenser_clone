//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppPicker from '../components/AppPicker';
import color from '../config/color';
import Button from '../components/Button';
import ErrorCom from '../components/Error';
import AddDeviceApi from '../auth/api/addDevice';
import LoadingIndicator from '../components/LoadingIndicator';
import SuccessCom from '../components/Success';
import Table from '../components/Table';
import ResetCom from '../components/resetCom';
import axios  from 'axios';
import authStorage from '../auth/storage/storage';

const dep_no = [
    { label: 'Dispenser 1', value: 1 },
    { label: 'Dispenser 2', value: 2 },
    { label: 'Dispenser 3', value: 3 },
    { label: 'Dispenser 4', value: 4 },
];

const nozz_no = [
    { label: 'Nozzle 1', value: '01' },
    { label: 'Nozzle 2', value: '02' },
    { label: 'Nozzle 3', value: '03' },
    { label: 'Nozzle 4', value: '04' },
    { label: 'Nozzle 5', value: '05' },
    { label: 'Nozzle 6', value: '06' },
    { label: 'Nozzle 7', value: '07' },
    { label: 'Nozzle 8', value: '08' },
    { label: 'Nozzle 9', value: '09' },
    { label: 'Nozzle 10', value: '10' },
    { label: 'Nozzle 11', value: '11' },
    { label: 'Nozzle 12', value: '12' },
    { label: 'Nozzle 13', value: '13' },
    { label: 'Nozzle 14', value: '14' },
    { label: 'Nozzle 15', value: '15' },
    { label: 'Nozzle 16', value: '16' },
    { label: 'Nozzle 17', value: '17' },
    { label: 'Nozzle 18', value: '18' },
    { label: 'Nozzle 19', value: '19' },
    { label: 'Nozzle 20', value: '20' },
    { label: 'Nozzle 21', value: '21' },
    { label: 'Nozzle 22', value: '22' },
    { label: 'Nozzle 23', value: '23' },
    { label: 'Nozzle 24', value: '24' },
    { label: 'Nozzle 25', value: '25' },
    { label: 'Nozzle 26', value: '26' },
    { label: 'Nozzle 27', value: '27' },
    { label: 'Nozzle 28', value: '28' },
    { label: 'Nozzle 29', value: '29' },
    { label: 'Nozzle 30', value: '30' },
    { label: 'Nozzle 31', value: '31' },
    { label: 'Nozzle 32', value: '32' },
];

const fuel_type = [
    { label: '001-Octane Ron(92)', value: 1 },
    { label: '002-Octane Ron(95)', value: 2 },
    { label: '004-Diesel', value: 3 },
    { label: '005-Premium Diesel', value: 4 },
];



// create a component
const FirstPage = ({route}) => {
    const [depNumber, setDepNumber] = useState();
    const [nozzleNumber, setNozzleNumber] = useState();
    const [fuelType, setFuelType] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [reset, setReset] = useState(false);


    const [nozzleCount, setNozzleCount] = useState(0);
    const [depNo, setDepNo] = useState(0);
    const [devices, setDevices] = useState([]);



    const handleNext = async() => {
        if (depNumber == undefined && nozzleNumber == undefined && fuelType == undefined) {
            setError(true);
        } else {
            setError(false);
            const bomb = {
                dep_no: depNumber.value,
                nozzle_no: nozzleNumber.value,
                fuel_type: fuelType.label
            };

            setLoading(true);
            const response = await AddDeviceApi.addDevice(bomb);
            setLoading(false);


            if (response.data.result) {
            setSuccess(true);
                setDevices(current => [...current, response.data.result]);
                setDepNumber();
                setNozzleNumber();
                setFuelType();
            }

        }
    };

    const handleReset = async () => {
        const response = await AddDeviceApi.deleteDevice();


        if (response.data.result) {
            setReset(true);
            setDevices([]);  
        } else {
            setReset(false);
        }

    };


// useEffect(() => {
//         const fetchIt = async () => {
//             const response = await AddDeviceApi.getDevice();
//             if (response.data.result) {
//             setDevices(response.data.result);
//             };
//         };

//         fetchIt();
// },[])

useEffect(() => {
    const fetchIt = async () => {
        setLoading(true);
      const authToken = await authStorage.getToken();
      axios.get('http://192.168.0.100:9000/api/device', {
        headers: {
              'Authorization': 'Bearer ' + authToken,
              "content-type": "multipart/form-data",
        }
      })
          .then(function (response) {
          if (response.data.result) {
          
           setDevices(response.data.result);
          }
        })
        .catch(function (error) {
        });
        setLoading(false);

    };
    fetchIt();
},[])

 useEffect(() => {
    const interval = setInterval(() => {
     
      
        setReset(false);

  
    }, 2000); // Update the values every second

    return () => {
      clearInterval(interval);
    };
  }, [reset]);
   
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
           
            <View style={styles.container}>
                  {
                loading && <LoadingIndicator/>
            }
        <ScrollView>
                
            {/* <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 20,
                padding:20,
            }}>
            <Text style={styles.title}>Dispenser - (<Text style={{color:color.primary,fontSize:20,fontWeight:'bold'}}>2</Text> / {nozzleCount})</Text>
            <Text style={styles.title}>Nozzle - (<Text style={{color:color.secondary,fontSize:20,fontWeight:'bold'}}>4</Text> / {depNo})</Text>
            </View> */}
            {
                error && <ErrorCom/>
            }
            {
                success && <SuccessCom/>
            }
            {
                reset && <ResetCom/>
            }
        <View style={{flexDirection:'row',marginTop:'5%'}}>
             <AppPicker
                width='40%'
                selectedItem={depNumber}
                onSelectedItem={item => setDepNumber(item)}
                item={dep_no} placeholder="Dispenser No" icon={'air-humidifier'} />
        <AppPicker 
                width='40%'
                selectedItem={nozzleNumber}
                onSelectedItem={item=> setNozzleNumber(item)}
                item={nozz_no} placeholder="Nozzle No" icon={'cosine-wave'}/>
        </View>
        <View style={{flexDirection:'row'}}>
               <AppPicker 
                width='40%'
                selectedItem={fuelType}
                onSelectedItem={item=> setFuelType(item)}
                item={fuel_type} placeholder="Fuel Type" icon={'fuel'} />
                <View style={{width:'50%'}}></View>
        </View>
            
            <View style={styles.buttonContainer}>
                <Button title='Reset' width={150} onPress={handleReset} color={color.danger} />
                <Button title='Add' width={150} onPress={handleNext} color={color.activeColor}/>
                    </View>
            <Table data={devices} />
         </ScrollView>
        </View>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      backgroundColor:color.background  
    },
    button: {
        borderWidth: 1,
        backgroundColor:color.primary
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop:30,
        justifyContent:'space-around'
    },
    
});

//make this component available to the app
export default FirstPage;
