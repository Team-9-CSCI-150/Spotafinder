import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';

import Router from '../../navigator/router';
import Functions from './utils/functions';
import Style from './style';

export default function Setting() {
    const [user, setUser] = useState({});

    useEffect(() => {
        async function get_fetch() {
            setUser(await Functions.displaying());
        }
        get_fetch();
    }, []);

    return(
        //NEED LOGOUT FIREBASE AUTHENTICATION
        //Conatiner of page has flex 1 to fill the whole display
        <ScrollView contentContainerStyle = {Style.container}>
            <Text style = {Style.map_txt}>
                SETTINGS
            </Text>
            
            {/* </View> */}
            <View style = {Style.fourth_container}>

                <Text style = {Style.topic_txt}>
                    PROFILE
                </Text>

                <TextInput
                    editable = {false}
                    style = {Style.user_content}
                    defaultValue = {user.first_name}
                    textAlign = 'center'
                />

                <TextInput
                    editable = {false}
                    style = {Style.user_content}
                    defaultValue = {user.last_name}
                    textAlign = 'center'
                />

                <TextInput
                    editable = {false}
                    style = {Style.user_content}
                    defaultValue = {user.email}
                    textAlign = 'center'
                />

                <View style = {Style.button}>
                    <Button
                        title = 'Log Out'
                        color = 'white'
                        onPress = {() => {
                            Functions.sign_up();
                            Router.navigation('Login', {Login: 'Login'});
                        }}
                    />
                </View>
  
                <View style = {Style.logOut}>
                    <Button
                        title = 'Back'
                        color = 'white'
                        onPress = {() => Router.navigation('Home', {Home: 'Home'})}
                    />
                </View>
            </View>
        </ScrollView>
    );
}