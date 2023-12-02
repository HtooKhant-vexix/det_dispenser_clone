//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DefaultStyles from '../config/table';

// create a component
const TableDetails = ({item,no}) => {
    return (
       <View style={styles.tableContainer}>
            <View style={[DefaultStyles.tableCell,{width:'10%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{(no + 1)}</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'30%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{item.dep_no}</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'30%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{item.nozzle_no}</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'30%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{item.fuel_type}</Text>
            </View>
            </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    tableContainer: {
       flexDirection:'row'
    },
});

//make this component available to the app
export default TableDetails;
