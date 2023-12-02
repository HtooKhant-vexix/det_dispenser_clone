//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import color from '../config/color';
import DefaultStyles from '../config/table';
import TableDetails from './TableDetails';
import TotalizerTableDetails from './TotalizerTableDetails';

// create a component
const TotalizerTable = ({ data,setSuccess }) => {
    
    return (
        <View style={styles.container}>
        <View style={styles.tableContainer}>
            <View style={[DefaultStyles.tableCell,{width:'16.6%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>no</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16.6%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>Fuel Type</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16.6%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>Nozzle No</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16.6%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>Totalizer Amount</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16.6%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>Totalizer Liter</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16.6%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>Buttons</Text>
            </View>
            </View>
            <ScrollView horizontal={true} contentContainerStyle={{flexGrow:1}}>
                <FlatList
                    data={data}
                    keyExtractor={(data) => data._id.toString()}
                    renderItem={({item, index}) => <TotalizerTableDetails item={item} no={index} setSuccess={setSuccess} />}
                />
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: color.background,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5%',
        marginBottom: 50,
    },
    tableContainer: {
        marginTop:20,
        flexDirection: 'row',
        backgroundColor:color.background
    }
});

//make this component available to the app
export default TotalizerTable;
