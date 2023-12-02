import React from 'react'
import { View,Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../config/color';


function LoginFail({title}) {
  return (
    <View style={{
                backgroundColor: color.danger,
                padding: 5,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems:'center',
                gap:20,
                marginVertical:5,
                marginLeft:'auto',
                marginRight:'auto'
            }}>
                 <MaterialCommunityIcons name='information' size={30} color={color.light}/>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color:color.light
                    }}>{title}</Text>
                   </View> 
  )
}

export default LoginFail