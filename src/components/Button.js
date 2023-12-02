//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import color from '../config/color';

// create a component
const Button = ({title,width,color,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
        width:width,
        borderRadius: 5,
        marginTop:5,
        padding:10,
        backgroundColor:color
            }}>
                <AppText style={styles.text}>{title}</AppText>
                 </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    text: {
        color: color.white,
        textAlign: 'center',
        fontSize:14
    }
});

//make this component available to the app
export default Button;
