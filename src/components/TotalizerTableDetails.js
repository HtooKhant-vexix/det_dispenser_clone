//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DefaultStyles from '../config/table';
import color from '../config/color';
import TotalizerApi from '../auth/api/addTotalizer';

// create a component
const TotalizerTableDetails = ({ item, no,setSuccess }) => {

    const handleDelete = async (id) => {
        const response = await TotalizerApi.deleteTotalizer(id);
        console.log(response.data)
        if (response.data.result) {
            setSuccess(true);
        }
    };

    return (
          <View style={styles.tableContainer}>
            <View style={[DefaultStyles.tableCell,{width:'16.6%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{no + 1}</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16.6%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{item.fuelType}</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16.6%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{item.nozzleNo}</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16.6%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{item.totalizer_amount}</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16.6%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>{item.totalizer_liter}</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16.6%'}]}>
                <TouchableOpacity onPress={()=>handleDelete(item._id)} style={{
                    backgroundColor: color.danger,
                    padding: 5,
                    borderRadius:3
                }}>
                     <Text style={[DefaultStyles.tableCellText]}>Delete</Text>
               </TouchableOpacity>
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
export default TotalizerTableDetails;
