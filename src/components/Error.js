//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import color from '../config/color';

// create a component
const ErrorCom = () => {
    return (
        <View style={{
                backgroundColor: color.danger,
                padding: 10,
                borderRadius: 10,
                width: 450,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems:'center',
                gap:20,
                marginVertical:20,
                marginLeft:'auto',
                marginRight:'auto'
            }}>
                 <MaterialCommunityIcons name='information' size={30} color={color.light}/>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color:color.light
                  }}>Please Select Ingredients</Text>
            </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ErrorCom;
