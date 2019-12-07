import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, ScrollView } from 'react-native';

import Router from '../../navigator/router';
import Style from './style';

export default function Setting() {

    return(
        //NEED LOGOUT FIREBASE AUTHENTICATION
        //Conatiner of page has flex 1 to fill the whole display
        <ScrollView contentContainerStyle = {Style.container}>
            {/*Fresno State Title*/}
            <View style = {Style.second_cotainer}>
                <View style = {Style.cancel_done}>
                    <View style = {Style.back_button}>
                        <Button
                            title = 'Cancel'
                            color = 'gray'
                            onPress = {() => Router.navigation('Home', {Home: 'Home'})}
                        />
                    </View>
                    <View>
                        <Button
                        title = 'Done'
                        color = 'gray'
                        />
                    </View>
                </View>
                <View style = {Style.third_container}>
                    <View style =  {Style.settings_cont}>
                        <Text style = {Style.settings_txt}>
                            SETTINGS
                        </Text>
                    </View>
                    <View style = {Style.fourth_container}>
                        <Text style = {Style.topic_txt}>
                            PROFILE
                        </Text>
                        <TextInput
                            style = {Style.user_content}
                            placeholder = 'First Name'
                            //onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                            textAlign = 'center'
                        />
                        <TextInput
                            style = {Style.user_content}
                            placeholder = 'Last Name'
                            //onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                            textAlign = 'center'
                        />
                        <TextInput
                            style = {Style.user_content}
                            placeholder = 'Organization Email'
                            //onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                            textAlign = 'center'
                        />
                        <TouchableOpacity style = {Style.logOut}>  
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