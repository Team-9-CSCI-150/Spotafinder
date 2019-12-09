import React, { useState, useEffect } from 'react';
import { 
    View, 
    TextInput, 
    Button, 
    Text, 
    ScrollView, 
    FlatList
} from 'react-native';

import Style from './style';
import Router from '../../navigator/router';
import Functions from './utils/functions';
import Building from './components/Building';

export default function Area() {
    const [rooms, setRoom] = useState({});

    useEffect(() => {
        var isTask = true;
        setInterval(() => {
            async function get_fetch() {
                setRoom(await Functions.get_snitch());
            }
            if (isTask) 
                get_fetch();
        }, 100);

        return () => { isTask = false };
    }, []);

    return(
        <ScrollView style = {Style.container}> 
            <Text style = {Style.map_txt}>  
                Fresno State
            </Text>
            <View style = {Style.shortcuts}>
                <View style = {Style.back_button}>
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
            <FlatList
                data = {rooms}
                keyExtractor={(item) => {
                    item.name
                }}
                renderItem = {({item}) => 
                    <Building 
                        name = {item.name}
                        occupany = {item.occupany}
                    />
                }
            />
        </ScrollView>
    );
}