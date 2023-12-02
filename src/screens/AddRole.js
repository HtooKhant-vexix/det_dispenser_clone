//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AccountApi from '../auth/api/addRole';
import color from '../config/color';
import AccountDetails from '../components/AccountsDetails';
import PermitApi from '../auth/api/addPermit';
import RoleApi from '../auth/api/addRole';
import LoadingIndicator from '../components/LoadingIndicator';

// create a component
const AddRole = () => {
    const [accounts, setAccounts] = useState([]);

    const [userChoPermit, setUserChoPermit] = useState([]);
    const [userChoRoles, setUserChoRoles] = useState([]);
    const [userId, setUserId] = useState();
    
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


    useEffect(() => { 

        const fetchIt = async () => {
            setLoading(true);
          const response = await AccountApi.accounts();
            setLoading(false);

            if (response.data.result) {
                setAccounts(response.data.result);
            }
           
        };

        fetchIt();

    }, []);

    useEffect(() => {
            const fetchIt = async () => {
                const response = await AccountApi.accounts();
                

            if (response.data.result) {
                setAccounts(response.data.result);
            }
           
        };

        fetchIt();
    },[success])


    const handlePermit = async (id,permit) => {


        if (id && permit._id) {
            let data = new FormData();
            data.append('userId', id);
            data.append('permitId', permit._id);
        
        
            const response = await PermitApi.addPermit(data);
            if (response.data.result) {
                setSuccess((prev)=>!prev);
            }
        
        }
    };

    const handleRole = async (id, role) => { 
        if (id && role._id) {
            let data = new FormData();
            data.append('userId', id);
            data.append('roleId', role._id);

          


            const response = await RoleApi.addRole(data);
          
               if (response.data.result) {
                setSuccess((prev)=>!prev);
            }
        }
    };

    return (
        <>
            {
                loading && <LoadingIndicator/>
            }
                <View style={styles.container}>
            <View>
                 <FlatList
                    data={accounts}
                    keyExtractor={item => item._id.toString()}
                    renderItem={({ item }) => (
                        <AccountDetails
                            item={item}
                            handlePermit={handlePermit}
                            handleRole={handleRole}
                        />
                    )
                    }
                        
                    />
            </View>
        </View>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
 
});

//make this component available to the app
export default AddRole;
