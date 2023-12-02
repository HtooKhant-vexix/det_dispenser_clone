import { StyleSheet,Text, TouchableOpacity,View } from "react-native"
import Screen from "../components/Screen"
import color from "../config/color";
import { useContext, useState } from "react";
import AuthContext from "../auth/context/context";
import storage from "../auth/storage/storage";


function ListPage({ navigation }) {
     const { user, setUser } = useContext(AuthContext);
    const [number, setNumber] = useState(0);

  return (
  <Screen>
          <View style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
              backgroundColor: '#2D3240',
              height: '100%',
              padding:20
          }}>
             <TouchableOpacity onPress={()=>navigation.navigate('FirstPage')}>
              <View style={styles.block}>
                
                    <Text style={{ color: color.light, fontWeight: '300',zIndex:10 }}>Add Device</Text>
                    <View style={{
                    width:100,
                    height:100,
                    borderRadius:100,
                    backgroundColor:'#ea3e23',
                    position:'absolute',
                    opacity:0.7,
                    top:-25,
                    right:-25,
                  }}></View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Addtank')}>
              <View style={styles.block}>
                      <Text style={{ color: 'white', fontWeight: '300',zIndex:10 }}>Add Tank</Text>
                        <View style={{
                    width:100,
                    height:100,
                    borderRadius:100,
                    backgroundColor:'#353b48',
                    position:'absolute',
                    top:-25,
                    right:-25,
                  }}></View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Totalizer')}>
              <View style={styles.block}>
                      <Text style={{ color: 'white', fontWeight: '300',zIndex:10 }}>Add Totalizer</Text>
                        <View style={{
                    width:100,
                    height:100,
                    borderRadius:100,
                    backgroundColor:'#353b48',
                    position:'absolute',
                    top:-25,
                    right:-25,
                  }}></View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Manager')}>
              <View style={styles.block}>
                  <Text style={{color:'white',fontWeight:'300',zIndex:10}}>Add Manager</Text>
                    <View style={{
                    width:100,
                    height:100,
                    borderRadius:100,
                    backgroundColor:'#5f01d1',
                    position:'absolute',
                    top:-25,
                    right:-25,
                    opacity:0.7
                  }}></View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('CashierOne')}>
              <View style={styles.block}>
                  <Text style={{color:'white',fontWeight:'300',zIndex:10}}>Add Cashier</Text>
                       <View style={{
                    width:100,
                    height:100,
                    borderRadius:100,
                    backgroundColor:'#353b48',
                    position:'absolute',
                    top:-25,
                    right:-25,
                  }}></View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('AddRole')}>
              <View style={styles.block}>
                      <Text style={{ color: 'white', fontWeight: '300',zIndex:10 }}>Add Role</Text>
                           <View style={{
                    width:100,
                    height:100,
                    borderRadius:100,
                    backgroundColor:'#353b48',
                    position:'absolute',
                    top:-25,
                    right:-25,
                  }}></View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
                        setUser(null);
                        storage.removeToken();
                    }}>
                   <View style={styles.block}>
                      <Text style={{ color: 'white', fontWeight: '300',zIndex:10 }}>Log Out</Text>
                       <View style={{
                    width:100,
                    height:100,
                    borderRadius:100,
                    backgroundColor: '#e1b12c',
                    opacity:0.7,
                    position:'absolute',
                    top:-25,
                    right:-25,
                  }}></View>
              </View>   
                </TouchableOpacity>   
          </View>     
  </Screen> 
  )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: '#242833',
        padding: 15,
        marginVertical: 5,
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor:'#191b1f',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
        position: 'relative',
        overflow:'hidden'
    }
})

export default ListPage