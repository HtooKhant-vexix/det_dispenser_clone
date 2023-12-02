//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../config/color';

// create a component
const AppTextInput = ({icon,width = '90%',...otherProps}) => {
    return (
        <View style={{
        backgroundColor: color.light,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        marginLeft: 'auto',
        marginRight:'auto',
        padding: 10,
        marginVertical: 10,
    }}>
            <MaterialCommunityIcons size={20} style={styles.icon} color={color.bgLight} name={icon} />
            <TextInput  style={styles.text} {...otherProps} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    // container: { 
    //     backgroundColor: color.light,
    //     borderRadius: 5,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     width: '90%',
    //     marginLeft: 'auto',
    //     marginRight:'auto',
    //     padding: 10,
    //     marginVertical: 10,
    //     borderWidth:0.5
    // },
    text: {
        fontSize: 18,
        color:color.bgLight
    },
    icon: {
        marginRight:20
    }
});

//make this component available to the app
export default AppTextInput;
