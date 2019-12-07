import { 
    View, 
    TextInput, 
    Button, 
    Text, 
    ScrollView, 
    TouchableOpacity,
    FlatList
} from 'react-native';

import React, { useState, useEffect } from 'react';
import Style from './style';
import firebase from '../../configs/firebase';

function Building(prop) {
    return (
        <TouchableOpacity style = {{alignItems: 'center'}}>
            <View style = {Style.building_cont}>
                <Text>
                    {prop.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

function get_building() {
    return new Promise((resolve) => {
        var path = firebase.firestore().collection('buildings').doc('s9FBU4nWcBzsit7qmXnL');
        path.get().then((doc) => {
            var buildings = Object.keys(doc.data()).map((key) => { return {name: key} });
            resolve(buildings);
        });
    });
}


export default function Area() {
    const [building, setBuilding] = useState([]);

    useEffect(() => {
        // Create an scoped async function in the hook
        async function get_fetch() {
            setBuilding(await get_building());
        }
        // Execute the created function directly
        get_fetch();
    }, []);

    return(
        <ScrollView style = {Style.container}> 
            <Text style = {Style.map_txt}>  {/*Fresno State Title*/}
                Fresno State
            </Text>
            <View style = {Style.shortcuts}>
                <View style = {Style.back_button}>
                    {/*Back Button*/}
                    <Button
                        title = 'Back'
                        onPress = {() => NavigatorService.navigation('Library', {Library: 'Library'})}
                    />
                </View>
                {/*Search Bar*/}
                <TextInput
                    style = {Style.search_bar}
                    placeholder = 'Search'
                    //onChangeText = {userName => inputName(userName)}
                    textAlign = 'center'
                />
            </View>
            <FlatList
                data = {building}
                keyExtractor={(item) => {
                    item.name
                }}
                renderItem = {({item}) => 
                    <Building title = {item.name}/>
                }
            />
        </ScrollView>
    );
}