import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

import Firebase from '../../configs/firebase';
import Style from './style';
import Router from '../../navigator/router';

function Friends(prop) {
    //When user click, it will move to the chat 
    return (
        <TouchableOpacity style = {[Style.size, {alignItems: 'center'}]}>
            <Text style = {Style.bar}> 
                {prop.title} 
            </Text>
        </TouchableOpacity>
    );
}

function get_users() {
    return new Promise((resolve) => {
        var array = []; 
        var currUser = Firebase.auth().currentUser.uid;
        var users = Firebase.firestore().collection('users')
        users.get().then((query) => {
            query.forEach((doc) => {
                if (currUser !== doc.id) {
                    array.push(doc.data());
                }
            })
            resolve(array);
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    });
}

// Chat or Message. Friend will be a subset ->> Social
export default function Friend() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Create an scoped async function in the hook
        async function get_fetch() {
            setData(await get_users());
        }
        // Execute the created function directly
        get_fetch();
    }, []);

    return (
        <View>
            <TouchableOpacity
                style = {Style.size}
                onPress = {() => {
                    Router.navigation('Home', {User:'Home'})
                }}
            >
                <Text>
                    Back
                </Text>
            </TouchableOpacity>
            {/* <FlatList
                data = {data}
                renderItem = {({item}) => <Friends title={item.name}/>}
                keyExtractor={(item) => item.id}
            />             */}
        </View>
    );
}