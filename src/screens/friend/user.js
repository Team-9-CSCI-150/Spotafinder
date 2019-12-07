import React, { useState, useEffect } from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

import Firebase from '../../configs/firebase';
import Style from './style';

function Item(prop) {
    return (
      <View>
        <TouchableOpacity style = {Style.size}
            onPress = {() => {
                var currUser = Firebase.auth().currentUser.uid;
                var currFriends = Firebase.firestore().collection('friends').doc(currUser).collection(prop.id); 
                currFriends.get().then((doc) => {
                        Firebase.firestore().collection('friends').doc(currUser).set({
                            [prop.id]: true
                        }, {merge: true});
                })
            }}
        >
            <Text>{prop.title}</Text>
        </TouchableOpacity>
      </View>
    );
}

function get_users() {
    return new Promise((resolve) => {
        var array = []; 
        var currUser = Firebase.auth().currentUser.uid;
        var users = Firebase.firestore().collection('users');
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

export default function User() {
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
        <FlatList
            data = {data}
            renderItem = {({ item }) => <Item title={item.name} id={item.id}/>}
            keyExtractor={(item) => item.id}
        />
    );
}