import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Button, Image, Text } from 'react-native';
import { Window_Width, Window_Height, Icon } from 'style';

import NavigatorService from '../navigators/navigator-service';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Settings(){
        //NEED LOGOUT FIREBASE AUTHENTICATION
        //Conatiner of page has flex 1 to fill the whole display
    return(
        <ScrollView contentContainerStyle = {styles.container}>
            {/*Fresno State Title*/}
            <View style = {styles.second_cotainer}>
                <View style = {styles.cancel_done}>
                    <View style = {styles.back_button}>
                        <Button
                            title = 'Cancel'
                            color = 'gray'
                            onPress = {() => NavigatorService.navigation('Library', {Library: 'Library'})}
                        />
                    </View>
                    <View>
                        <Button
                        title = 'Done'
                        color = 'gray'
                        />
                    </View>
                </View>
                <View style = {styles.third_container}>
                    <View style =  {styles.settings_cont}>
                        <Text style = {styles.settings_txt}>
                            SETTINGS
                        </Text>
                    </View>
                    <View style = {styles.fourth_container}>
                        <Text style = {styles.topic_txt}>
                            PROFILE
                        </Text>
                        <TextInput
                            style = {styles.user_content}
                            placeholder = 'First Name'
                            //onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                            textAlign = 'center'
                        />
                        <TextInput
                            style = {styles.user_content}
                            placeholder = 'Last Name'
                            //onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                            textAlign = 'center'
                        />
                        <TextInput
                            style = {styles.user_content}
                            placeholder = 'Organization Email'
                            //onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                            textAlign = 'center'
                        />
                        <TouchableOpacity style = {styles.logOut} onPress = {() => NavigatorService.navigation('newLogin', {newLogin: 'newLogin'})}>  
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

const styles = StyleSheet.create({
    //container for screen
    container: {
        flex: 1,
        backgroundColor: '#D2D2D2',
        //backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    //second container
    second_cotainer: {
        width: Window_Width * .90,
        height: Window_Height * .9,
        backgroundColor: '#E2E2E2',
        //backgroundColor: 'white',
        //alignItems: 'center',
    },

    //cancel or done layout
    cancel_done: {
        //backgroundColor: 'pink',
        //flex: 1,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    //third container
    third_container: {
        flex: 1,
        alignItems: 'center',
    },

    //settings container
    settings_cont: {
        width: Window_Width * .50,
        height: 60,
        alignContent: 'center',
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },

    //settings text
    settings_txt: {
        textAlign: 'center',
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },

    //fourth container
    fourth_container: {
        flex: 1,
        marginTop: 30,
    },

    //text for profile and notifications
    topic_txt: {
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 15,
    },

    user_content: {
        width: Window_Width * 0.60,
        height: Window_Height * 0.05,
        marginTop: Window_Height * 0.005,
        marginBottom: Window_Height * 0.030,
        borderRadius: 15,
        backgroundColor: '#BCF4F5'
    },

    logOut: {
        width: Window_Width * 0.60,
        height: Window_Height * 0.06,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
});