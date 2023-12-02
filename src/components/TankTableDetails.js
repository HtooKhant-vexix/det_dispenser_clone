//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DefaultStyles from '../config/table';


// create a component
const TankTableDetails = ({ item, no }) => {
    const nozzlesText = item.nozzles.map((nozzle) => nozzle.toString()).join(', ');
    return (
        <View style={styles.tableContainer}>
           <View style={[DefaultStyles.tableCell,{width:'4%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{no + 1}</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{item.capacity}</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{item.opening}</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{item.tankNo}</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'32%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{nozzlesText}</Text>
            </View>

            <View style={[DefaultStyles.tableCell,{width:'16%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{item.fuelType}</Text>
            </View>
            </View>
    );
};

// define your styles
const styles = StyleSheet.create({
      tableContainer: {
        flexDirection: 'row',
    }
});

//make this component available to the app
export default TankTableDetails;
