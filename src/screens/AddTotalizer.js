import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Screen from '../components/Screen'
import StationPicker from '../components/StationPicker'
import axios from 'axios';
import authStorage from '../auth/storage/storage';
import AppPicker from '../components/AppPicker';
import AppTextInput from '../components/AppTextInput';
import Button from '../components/Button';
import color from '../config/color';
import ErrorCom from '../components/Error';
import totalizerApi from '../auth/api/addTotalizer';
import TotalizerTable from '../components/TotalizerTable';
import LoadingIndicator from '../components/LoadingIndicator';


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

const fuel_type = [
    { label: '001-Octane Ron(92)', value: 1 },
    { label: '002-Octane Ron(95)', value: 2 },
    { label: '004-Diesel', value: 3 },
    { label: '005-Premium Diesel', value: 4 },
];

function AddTotalizer() {
    const [items, setItems] = useState();
    const [stationId, setStationId] = useState();
    const [fuelType, setFuelType] = useState();
    const [nozzleNo, setNozzleNo] = useState();
    const [saleLiter, setSaleLiter] = useState();
    const [totalizerLiter, setTotalizerLiter] = useState();
    const [totalizerAmount, setTotalizerAmount] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [error, setError] = useState(false);
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);



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
         
        setLoading(true);
        const response = await totalizerApi.getTotalizer();
        setLoading(false);

        if (response.data.result) {
            setItem(response.data.result);
        }

    };

    fetchIt();
    
  

  }, []);
    
  const handleClick = async()=>{
      if (stationId == undefined && fuelType == undefined && nozzleNo == undefined  && totalizerAmount == undefined && totalizerLiter == undefined ) {
          setError(true);
      } else {
          setError(false);
      const formData = new FormData();
      formData.append('stationDetailId',stationId._id);
      formData.append('vehicleType','Car');
      formData.append('fuelType',fuelType.label);
      formData.append('vocono','037/c1/test/36');
      formData.append('nozzleNo',nozzleNo.value);
      formData.append('saleLiter','0');
      formData.append('totalizer_amount',totalizerAmount);
      formData.append('totalizer_liter',totalizerLiter);
      formData.append('totalPrice','0');
      formData.append('casherCode','m1');
      formData.append('asyncAlready','2');
      formData.append('device','tablet');
      formData.append('carNo','car/1test');
      
      setLoading(true);
      const response =await totalizerApi.addTotalizer(formData);
    
      if (response.data.result) {
          setSuccess(true);
          setFuelType('');
          setNozzleNo('');
          setTotalizerAmount('');
          setTotalizerLiter('');
        setLoading(false);
      }
          setLoading(false);

      }
      setLoading(false);
  };
    
    
    useEffect(() => {
        if (success == true) {
        
        const fetchIt = async () => {
            setLoading(true);
            const response = await totalizerApi.getTotalizer();
            setLoading(false);

            if (response.data.result) {
                setItem(response.data.result);
            }
        };

        fetchIt();
    }
      
    }, [success]);

    useEffect(() => {
         const interval = setInterval(() => {
        setSuccess(false);
    }, 2000); // Update the values every second


    return () => {
      clearInterval(interval);
    };
    }, [success]);
    

  return (
      <Screen>
          {
              loading && <LoadingIndicator/>
          }
          <ScrollView>
          {
              error && <ErrorCom/>
          }
       
              <View style={{
                  flexDirection: 'row',
                  marginTop:'5%'
           }}>
             <StationPicker
            width='40%'
            selectedItem={stationId}
            onSelectedItem={item=> setStationId(item)}
            item={items} placeholder="Station Id" icon={'arrange-bring-to-front'}
          />
          <AppPicker 
            width="40%"
            selectedItem={fuelType}
            onSelectedItem={item=> setFuelType(item)}
            item={fuel_type} placeholder="Fuel Type" icon={'fuel'} />
           </View>
        <View style={{
                  flexDirection:'row'
          }}>
             <AppPicker
            width='40%'
            selectedItem={nozzleNo}
            onSelectedItem={item => setNozzleNo(item)}
            item={nozz_no} placeholder="Nozzle No" icon={'air-humidifier'} />
          <AppTextInput
            width='40%'
            onChangeText={(value) => setTotalizerAmount(value)}
            placeholder="Totalizer Amount"
            icon={'cup'}
            value={totalizerAmount}
          />
          </View>
          <View style={{flexDirection:'row'}}>
             
        <AppTextInput
            width='40%'
            onChangeText={(value) => setTotalizerLiter(value)}
            placeholder="Totalizer Liter"
            icon={'cup-water'}
            value={totalizerLiter}
          />
          <View style={{width:'50%'}}></View>
          </View>
         <View style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
         }}>
        <View style={{
            flexDirection:'row',
            width:'80%',
            justifyContent:'space-around',
            marginTop:20
                  }}>
              <Button onPress={handleClick} title={"Add"} color={color.activeColor} width={'250%'}/>
        </View>
         </View>
         <TotalizerTable setSuccess={setSuccess} data={item}/>
        </ScrollView>
    </Screen>
  )
}

export default AddTotalizer