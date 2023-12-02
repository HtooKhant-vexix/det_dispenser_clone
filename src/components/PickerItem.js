//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import color from '../config/color';

// create a component
const PickerItem = ({label,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{label}</AppText>
       </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    text: {
        padding: 20,
        color:color.activeColor
   }
});

//make this component available to the app
export default PickerItem;
