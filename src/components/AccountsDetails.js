//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../config/color';
import AppPicker from './AppPicker';
import PermitPicker from './PermitPicker';
import Button from './Button';
import PermitsApi from './../auth/api/permits';
import RolesApi from './../auth/api/roles';

// create a component
const AccountDetails = ({ item,handlePermit,handleRole }) => {
    
    const [permitsArr, setPermitsArr] = useState();
    const [rolesArr, setRolesArr] = useState();


    const [userChoPermit, setUserChoPermit] = useState();
    const [userChoRoles, setUserChoRoles] = useState();
    const [userId, setUserId] = useState();

    


    const permits = item.permits.map((nozzle) => nozzle.name.toString()).join(', ');
    const roles = item.roles.map((nozzle) => nozzle.name.toString()).join(', ');


    useEffect(() => {
        setUserId(item._id);
   },[])

    useEffect(() => {


        const fetchIt = async () => {
            const response = await PermitsApi.permits();
            console.log(response);
            setPermitsArr(response.data.result);
        };

        fetchIt();
       
    }, []);

    useEffect(() => {
        const fetchIt = async () => {
            const respnose = await RolesApi.roles();
            console.log(respnose.data)
            setRolesArr(respnose.data.result);
        }

        fetchIt();
    },[])
    




    return (
        <View style={{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'white',
            elevation:40,
            borderRadius: 5,
            marginVertical:10
        }}>
         <View style={styles.container}>
          <View>
            <Text>Email - {item.email}</Text>
            <Text>Cashier Code - {item.name}</Text>
          </View>
          <View>
             <Text>
              Roles - {roles}       
            </Text>
            <Text>
                Permits - {permits}
            </Text>
          </View>
            </View>
            <View style={styles.container_two_width}>
                <Text style={{
                    fontSize:16
                }}>Roles</Text>
                <View style={styles.container_two}> 
                <View style={{
                        width: '50%',
                        justifyContent:'flex-start',
                        alignItems:'center'
                    
                }}>
               <PermitPicker  
               item={rolesArr}
               placeholder={"Roles"}
               selectedItem={userChoRoles}
               onSelectedItem={setUserChoRoles}
               icon={'mail'} 
               width='50%'/>
               <Button onPress={()=>handleRole(item._id,userChoRoles)} title={"Add Roles"} width={'50%'} color={color.secondary}/>
                </View>
                <View style={{
                    flexDirection: 'row',
                    gap: 10,
                    width: '50%', 
                    }}>
                        {
                            item.roles.map((nozzle) => <View style={{ borderWidth: 0.5, padding: 10, backgroundColor: color.secondary }}><Text>{nozzle.name}</Text></View>)
                        }
                  
                </View>
            </View>
            </View>
            <View>

                <View style={styles.container_two_width}> 
                    <Text style={{
                        fontSize: 16,
                }}>Permit</Text>
                <View style={styles.container_two}>
                <View style={{
                width: '50%',
                justifyContent:'flex-start',
                alignItems:'center'
                }}>
               <PermitPicker 
               placeholder={"Permits"}
               selectedItem={userChoPermit}
               onSelectedItem={setUserChoPermit}
               item={permitsArr} 
               icon={'mail'} 
               width='50%'/>
               <Button onPress={()=>handlePermit(item._id,userChoPermit)} title={"Add Permits"} width={'50%'} color={color.secondary}/>
                </View>
                <View style={{
                    flexDirection: 'row',
                    gap: 10,
                    width: '50%', 
                        }}>
                            {
                                item.permits.map((nozzle) => <View style={{ borderWidth: 0.5, padding: 10, backgroundColor: color.secondary }}><Text>{nozzle.name}</Text></View>)  
                            }
                </View>
                </View>
            </View>
        </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 50,
        padding: 10,
        marginTop: 10,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom:20
    },
    container_two_width: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    container_two: {
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
});

//make this component available to the app
export default AccountDetails;
