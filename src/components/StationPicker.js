//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput,TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText';
import color from '../config/color';
import defaultStyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';

// create a component
const StationPicker = ({ icon,width =  '90%',placeholder,item,selectedItem,onSelectedItem, ...otherProps }) => {
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <>
          <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
             <View style={{
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 5,
    flexDirection: "row",
    width: width,
    padding: 10,
    marginVertical: 10,
    marginLeft: 'auto',
    marginRight:'auto'
  }}>
            <MaterialCommunityIcons size={20} style={styles.icon} color={color.bgLight} name={icon} />
            <AppText style={styles.text}>{selectedItem?selectedItem.name:placeholder}</AppText>
            <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
            />
        </View>
       </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button onPress={() => setModalVisible(false)} title='Close' />
                    <FlatList
                        data={item}
                        keyExtractor={item => item._id.toString()}
                        renderItem={({ item }) =>
                            <PickerItem
                                label={item.name}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectedItem(item)
                                }}
                            />
                    }
                        
                    />
             </Screen>
       </Modal>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

//make this component available to the app
export default StationPicker;
