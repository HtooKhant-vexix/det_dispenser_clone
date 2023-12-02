//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import color from '../config/color';
import DefaultStyles from '../config/table';
import TotalizerTableDetails from './TotalizerTableDetails';
import TankTableDetails from './TankTableDetails';



// create a component
const TankTable = ({ item }) => {

    
    return (
        <View style={styles.container}>
        <View style={styles.tableContainer}>
            <View style={[DefaultStyles.tableCell,{width:'4%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>no</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>Capacity</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>Opening</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'16%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>Tank No</Text>
            </View>
            <View style={[DefaultStyles.tableCell,{width:'32%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>Nozzles</Text>
            </View>

            <View style={[DefaultStyles.tableCell,{width:'16%'}]}>
                <Text style={[DefaultStyles.tableCellText]}>Fuel Type</Text>
            </View>
            </View>
            <ScrollView horizontal={true} contentContainerStyle={{flexGrow:1}}>
                <FlatList
                    data={item}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({item, index}) => <TankTableDetails item={item} no={index} />}
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
        marginBottom:50
    },
    tableContainer: {
        marginTop:60,
        flexDirection: 'row',
    }
});

//make this component available to the app
export default TankTable;
