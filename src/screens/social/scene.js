import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Friend from './components/Friend';

import Firebase from '../../configs/firebase';
import Router from '../../navigator/router';
import Functions from './utils/functions';
import Style from './style';

export default function Social() {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     // Create an scoped async function in the hook
    //     async function get_fetch() {
    //         setData(await Functions.get_users(Firebase));
    //     }
    //     // Execute the created function directly
    //     get_fetch();
    // }, []);

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
                renderItem = {({item}) => <Friends title={item.name} styler={[[Style.size, {alignItems: 'center'}], Style.bar]}/>}
                keyExtractor={(item) => item.id}
            />             */}
        </View>
    );
}