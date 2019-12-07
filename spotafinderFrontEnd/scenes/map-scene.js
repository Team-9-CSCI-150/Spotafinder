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
import firebase from 'firebase';

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
        var path = firebase.firestore().collection('buildings').doc('s9FBU4nWcBzsit7qmXnL');
        path.get().then((doc) => {
            var buildings = Object.keys(doc.data()).map((key) => { return {name: key} });
            resolve(buildings);
        });
    });
}

function get_wifi() {
    return new Promise((resolve) => {
        var path = firebase.database().ref().child('Engineering East').child('rooms').child('ASME');
        path.on('value', (snapshot) => {
            var number = 0;
            snapshot.forEach((snapChild) => {
                number = snapChild.val();
                resolve(number)
            });
        });
    });
}


export default function Map() {
    const [building, setBuilding] = useState([]);
    const [example, setSnitch] = useState(0);

    useEffect(() => {
        // Create an scoped async function in the hook
        setInterval(() => {
            async function get_fetch() {
                setBuilding(await get_building());
                setSnitch(await get_wifi());
            }
            get_fetch();
        }, 100);
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

const  styles = StyleSheet.create({
    //container for screen
    container: {
        //width: Window_Width,
        //height: Window_Height,
        flex: 1,
        backgroundColor: 'white',
        //alignItems: 'center',
    },
    
    //fresno state text
    map_txt: {
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        paddingTop: 60,
        fontWeight: 'bold',
        //textDecorationLine: 'underline',
    },

    //Search Bar, Back button Flex
    shortcuts: {
        //backgroundColor: 'pink',
        //flex: 1,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    //Back Button
    back_button: {
        width: 70,
        height: Window_Height * .05,
        borderRadius: 15,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },

    back_text: {
        fontSize: 10,
        textDecorationLine: 'underline',
    },

    //Search Bar
    search_bar: {
        width: Window_Width * 0.45,
        height: Window_Height * 0.05,
        borderRadius: 15,
        backgroundColor: 'pink'
    },

    /*
    //second container; NOT USING
    second_container: {
        backgroundColor: 'pink',
        //width: Window_Width * .80,
        //height: Window_Height * .80,
        //marginTop: 24,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10, 
        marginBottom: 40,
        padding: 10, 
        //paddingLeft: 10,
        //paddingRight: 10,
        flex: 1,
        alignItems: 'center',
        //By deafault the direction is set to column
        flexDirection: 'column',
        overflow: 'scroll',
    },
    */

    //Building Place Holder
    building_cont: {
        width: Window_Width * .90,
        height: 90,
        borderRadius: 15, 
        backgroundColor: 'pink',
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    /*NOT USING
    room_container: {
        width: 300,
        height: 500,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginTop: 48,
    },
    */
});