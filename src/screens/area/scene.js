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
import Firebase from '../../configs/firebase';
import Router from '../../navigator/router';

function Building(prop) {
    return (
        <TouchableOpacity style = {{alignItems: 'center'}}>
            <View style = {Style.building_cont}>
                <Text>
                    ASME: {prop.number_wifi}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

function get_building() {
    return new Promise((resolve) => {
        var path = Firebase.firestore().collection('buildings').doc('s9FBU4nWcBzsit7qmXnL');
        path.get().then((doc) => {
            var buildings = Object.keys(doc.data()).map((key) => { return {name: key} });
            resolve(buildings);
        });
    });
}

function get_wifi() {
    return new Promise((resolve) => {
        var path = Firebase.database().ref().child('Engineering East').child('rooms').child('ASME');
        path.on('value', (snapshot) => {
            var number = 0;
            snapshot.forEach((snapChild) => {
                number = snapChild.val();
                resolve(number)
            });
        });
    });
}


export default function Area() {
    const [building, setBuilding] = useState([]);
    const [example, setSnitch] = useState(0);

    useEffect(() => {
        // Create an scoped async function in the hook
        var hasRun = false;
        setInterval(() => {
            hasRun = false
        }, 1000);
        async function get_fetch() {
            if (hasRun) return;
            hasRun = true;
            setBuilding(await get_building());
            setSnitch(await get_wifi());
        }
        get_fetch();
        // Execute the created function directly
    });

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
                        onPress = {() => Router.navigation('Home', {Home: 'Home'})}
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
            
            <Building
                number_wifi = {example}
            />
            {/* <FlatList
                data = {building}
                keyExtractor={(item) => {
                    item.name
                }}
                renderItem = {({item}) => 
                    <Building title = {item.name}/>
                }
            /> */}
        </ScrollView>
    );
}