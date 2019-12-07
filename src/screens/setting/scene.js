import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, ScrollView } from 'react-native';

import router from '../../navigator/router';
import style from './style';

export default function Setting() {

    return(
        //NEED LOGOUT FIREBASE AUTHENTICATION
        //Conatiner of page has flex 1 to fill the whole display
        <ScrollView contentContainerStyle = {style.container}>
            {/*Fresno State Title*/}
            <View style = {style.second_cotainer}>
                <View style = {style.cancel_done}>
                    <View style = {style.back_button}>
                        <Button
                            title = 'Cancel'
                            color = 'gray'
                            onPress = {() => router.navigation('Library', {Library: 'Library'})}
                        />
                    </View>
                    <View>
                        <Button
                        title = 'Done'
                        color = 'gray'
                        />
                    </View>
                </View>
                <View style = {style.third_container}>
                    <View style =  {style.settings_cont}>
                        <Text style = {style.settings_txt}>
                            SETTINGS
                        </Text>
                    </View>
                    <View style = {style.fourth_container}>
                        <Text style = {style.topic_txt}>
                            PROFILE
                        </Text>
                        <TextInput
                            style = {style.user_content}
                            placeholder = 'First Name'
                            //onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                            textAlign = 'center'
                        />
                        <TextInput
                            style = {style.user_content}
                            placeholder = 'Last Name'
                            //onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                            textAlign = 'center'
                        />
                        <TextInput
                            style = {style.user_content}
                            placeholder = 'Organization Email'
                            //onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                            textAlign = 'center'
                        />
                        <TouchableOpacity style = {style.logOut} onPress = {() => router.navigation('newLogin', {newLogin: 'newLogin'})}>  
                            <Text>
                                Log Out
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}