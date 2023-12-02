//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppPicker from '../components/AppPicker';
import Button from '../components/Button';
import color from '../config/color';
import TankTable from '../components/TankTable';
import AddTankApi from '../auth/api/AddTank';
import ErrorCom from '../components/Error';
import ResetCom from '../components/resetCom';
import SuccessCom from '../components/Success';
import LoadingIndicator from '../components/LoadingIndicator';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import StationPicker from '../components/StationPicker';
import axios from 'axios';
import authStorage from '../auth/storage/storage';

const tank_no = [
    { label: 'Tank 1', value: 1 },
    { label: 'Tank 2', value: 2 },
    { label: 'Tank 3', value: 3 },
    { label: 'Tank 4', value: 4 },
    { label: 'Tank 5', value: 5 },
    { label: 'Tank 6', value: 6 },
    { label: 'Tank 7', value: 7 },
    { label: 'Tank 8', value: 8 },
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
const AddTank = () => {
    const [tankNo, setTankNo] = useState();
    const [tankCapacity, setTankCapacity] = useState();
    const [opening, setOpening] = useState();
    const [nozzleNumberOne, setNozzleNumberOne] = useState();
    const [nozzleNumberTwo, setNozzleNumberTwo] = useState();
    const [nozzleNumberThree, setNozzleNumberThree] = useState();
    const [nozzleNumberFour, setNozzleNumberFour] = useState();
    const [nozzleNumberFive, setNozzleNumberFive] = useState();
    const [nozzleNumberSix, setNozzleNumberSix] = useState();
    const [nozzleNumberSeven, setNozzleNumberSeven] = useState();
    const [nozzleNumberEight, setNozzleNumberEight] = useState();
    const [nozzleNumberNine, setNozzleNumberNine] = useState();
    const [nozzleNumberTen, setNozzleNumberTen] = useState();
    const [fuelType, setFuelType] = useState();

    const [error, setError] = useState(false);
    const [data, setData] = useState();
    const [reset, setReset] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const [height, setHeight] = useState(0);
    const [items, setItems] = useState();
    const [stationId, setStationId] = useState();


    const handleNext = async () => { 
        
        if (tankCapacity == undefined && opening == undefined && tankNo == undefined && nozzleNumberOne == undefined && nozzleNumberTwo == undefined && fuelType == undefined) {
            setError(true);

        } else {
          setError(false);
          const formData = new FormData();
          formData.append("stationId", stationId._id);
          formData.append("capacity", tankCapacity);
          formData.append("opening", opening);
          formData.append("tankNo", tankNo.value);
          formData.append("fuelType", fuelType.label);
          formData.append("nozzles", nozzleNumberOne.value);
          formData.append("nozzles", nozzleNumberTwo.value);
          
          
          nozzleNumberThree?.value && formData.append('nozzles', nozzleNumberThree.value);
          nozzleNumberFour?.value && formData.append('nozzles', nozzleNumberFour.value);
          nozzleNumberFive?.value && formData.append('nozzles', nozzleNumberFive.value);
          nozzleNumberSix?.value && formData.append('nozzles', nozzleNumberSix.value);
          nozzleNumberSeven?.value && formData.append('nozzles', nozzleNumberSeven.value);
          nozzleNumberEight?.value && formData.append('nozzles', nozzleNumberEight.value);
          nozzleNumberNine?.value && formData.append('nozzles', nozzleNumberNine.value);

            setLoading(true);
            const response = await AddTankApi.addTank(formData);

            console.log(response.data.result);
         

            if (response.data.result) {
                setSuccess(false);
                const data = await AddTankApi.getTank();
                setData(data.data.result);
                setHeight(0);
                setTankCapacity();
                setOpening();
                setTankNo();
                setFuelType();
                setNozzleNumberOne();
                setNozzleNumberTwo();
                setNozzleNumberThree();
                setNozzleNumberFour();
                setNozzleNumberFive();
                setNozzleNumberSix();
                setNozzleNumberSeven();
                setNozzleNumberEight();
                setNozzleNumberNine();
            }
            setLoading(false);


        }
    };

    const handleReset = async () => {
        setLoading(true);
        const response = await AddTankApi.deleteTank();
        console.log(response.data);
      

       
        if (response.data) {
            setReset(false);
            setHeight(0);
            setTankCapacity();
            setOpening();
            setTankNo();
            setFuelType();
            setNozzleNumberOne();
            setNozzleNumberTwo();
            setNozzleNumberThree();
            setNozzleNumberFour();
            setNozzleNumberFive();
            setNozzleNumberSix();
            setNozzleNumberSeven();
            setNozzleNumberEight();
            setNozzleNumberNine();
            const data = await AddTankApi.getTank();
            setData(data.data.result);
        }
         setLoading(false);

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


        const fetchIt = async () => {
            const response = await AddTankApi.getTank();
            if (response.data.result) {
            setData(response.data.result);
            }
        };
        fetchIt();

    }, []);


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

 
   const handleAdd = () => { 
       if (height < 525) {
       setHeight((prev) => prev + 75)
       } else if (height == 525) {
           setHeight(0);
       }
   };
    
    const handleRemove = () => {
        if (height > 0) {
            setHeight((prev) => prev - 75)
        }
    };


    // useEffect(() => { 
    //     const fetchit = async () => {
    //         const response = await StationApi.stationId();
    //         setItems(response.data.result);
    //     };
    //     fetchit();
    // }, []);



    return (
        <>
            <ScrollView>
                 {
                    loading && <LoadingIndicator/>
                }
        <View style={styles.container}> 
          
                {
                    error && <ErrorCom/>
                }
                {
                    reset && <ResetCom/>
                }
                {
                    success && <SuccessCom/>
                }
               
            <View style={{flexDirection:'row'}}>
            <AppTextInput width='40%' onChangeText={(value)=>setTankCapacity(value)} placeholder="Tank Capacity" icon={'approximately-equal-box'} value={tankCapacity} />
            <AppTextInput width='40%' onChangeText={(value)=>setOpening(value)} value={opening} placeholder="Opening" icon={'circle-outline'} />
            </View>
           <View style={{flexDirection:'row'}}>
             <StationPicker 
            width='40%'
            selectedItem={stationId}
            onSelectedItem={item=> setStationId(item)}
            item={items} placeholder="Station Id" icon={'arrange-bring-to-front'}
                        />
            <AppPicker
               width='40%'
                selectedItem={tankNo}
                onSelectedItem={item => setTankNo(item)}
                item={tank_no} placeholder="Tank No" icon={'air-humidifier'} />
           </View>
           <View style={{flexDirection:'row'}}>
                <AppPicker 
                width='40%'
                selectedItem={fuelType}
                onSelectedItem={item=> setFuelType(item)}
                item={fuel_type} placeholder="Fuel Type" icon={'fuel'} />
            <AppPicker 
                width='40%'
                selectedItem={nozzleNumberOne}
                onSelectedItem={item=> setNozzleNumberOne(item)}
                item={nozz_no} placeholder="Nozzle No" icon={'cosine-wave'} />
           </View>
            <AppPicker 
                selectedItem={nozzleNumberTwo}
                onSelectedItem={item=> setNozzleNumberTwo(item)}
                item={nozz_no} placeholder="Nozzle No" icon={'cosine-wave'} />
           
            <View style={{
                height: height,
                overflow:'hidden'
            }}>
                 <AppPicker 
                selectedItem={nozzleNumberThree}
                onSelectedItem={item=> setNozzleNumberThree(item)}
                item={nozz_no} placeholder="Nozzle No" icon={'cosine-wave'} />
            <AppPicker 
                selectedItem={nozzleNumberFour}
                onSelectedItem={item=> setNozzleNumberFour(item)}
                item={nozz_no} placeholder="Nozzle No" icon={'cosine-wave'} />
            <AppPicker 
                selectedItem={nozzleNumberFive}
                onSelectedItem={item=> setNozzleNumberFive(item)}
                item={nozz_no} placeholder="Nozzle No" icon={'cosine-wave'} />
            <AppPicker 
                selectedItem={nozzleNumberSix}
                onSelectedItem={item=> setNozzleNumberSix(item)}
                item={nozz_no} placeholder="Nozzle No" icon={'cosine-wave'} />
            <AppPicker 
                selectedItem={nozzleNumberSeven}
                onSelectedItem={item=> setNozzleNumberSeven(item)}
                item={nozz_no} placeholder="Nozzle No" icon={'cosine-wave'} />
            <AppPicker 
                selectedItem={nozzleNumberEight}
                onSelectedItem={item=> setNozzleNumberEight(item)}
                item={nozz_no} placeholder="Nozzle No" icon={'cosine-wave'} />
            <AppPicker 
                selectedItem={nozzleNumberNine}
                onSelectedItem={item=> setNozzleNumberNine(item)}
                item={nozz_no} placeholder="Nozzle No" icon={'cosine-wave'} />
            <AppPicker 
                selectedItem={nozzleNumberTen}
                onSelectedItem={item=> setNozzleNumberTen(item)}
                item={nozz_no} placeholder="Nozzle No" icon={'cosine-wave'} />
            </View>
         
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems:'center'
                }}>
               <TouchableOpacity onPress={handleAdd}>
                    <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: color.secondary,
                    gap: 20,
                    justifyContent: 'center',
                    padding: 10,
                    borderRadius:5,
                    width: '50%',
                    marginLeft: 'auto',
                    marginRight:'auto'
                }}>
                <MaterialCommunityIcons name='plus-thick'/>
                <Text>Add More Nozzles</Text>
                </View>  
               </TouchableOpacity>
               <TouchableOpacity onPress={handleRemove}>
                    <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: color.secondary,
                    gap: 20,
                    justifyContent: 'center',
                    padding: 10,
                    borderRadius:5,
                    width: '50%',
                    marginLeft: 'auto',
                    marginRight:'auto'
                }}>
                <MaterialCommunityIcons name='minus'/>
                <Text>Remove Nozzle</Text>
                </View>  
               </TouchableOpacity>
              </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent:'space-around',
                    alignItems: 'center',
                    marginTop:20
                }}>
                <Button title={"Reset"} onPress={handleReset} color={color.primary} width={200} />
                <Button title={"Add"} onPress={handleNext} color={color.activeColor} width={200} />
                </View>  
                <TankTable item={data} />
            <View>
               
            </View>
            </View>
                </ScrollView>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       paddingTop:'5%',
       backgroundColor:color.background
   }
});

//make this component available to the app
export default AddTank;
