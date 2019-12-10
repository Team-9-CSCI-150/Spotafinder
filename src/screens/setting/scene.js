import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, ScrollView } from 'react-native';

import Router from '../../navigator/router';
import Style from './style';
import Functions from './utils/functions';

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
                    editable = 'false'
                    style = {Style.user_content}
                    defaultValue = {user.first_name}
                    //onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                    textAlign = 'center'
                />
                <TextInput
                    editable = 'false'
                    style = {Style.user_content}
                    defaultValue = {user.last_name}
                    //onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                    textAlign = 'center'
                />
                <TextInput
                    editable = 'false'
                    style = {Style.user_content}
                    defaultValue = {user.email}
                    //onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                    textAlign = 'center'
                />
                {/*Log out button*/}
                <TouchableOpacity 
                    style = {Style.logOut}
                    onPress = {() => {
                        Functions.sign_up();
                        Router.navigation('Login', {Login: 'Login'});
                    }}
                >
                    <Text>
                        Log Out
                    </Text>
                </TouchableOpacity>
                {/*Back button*/}
                <TouchableOpacity 
                    style = {Style.logOut}
                    onPress = {() => Router.navigation('Home', {Home: 'Home'})}
                >
                    <Text>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}