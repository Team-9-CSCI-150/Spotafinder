import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Button, Image, Text } from 'react-native';
import { Window_Width, Window_Height, Logo } from '../style';

import NavigatorService from '../navigators/navigator-service';
import FireBase from '../firebase';

async function createAccount(user, password) {
    try {
        await FireBase.auth().createUserWithEmailAndPassword(user, password);
    } catch (error) {
        alert("Hello! I am an alert box!!");

    }
}

export default function Register() {
    const [userName, inputName] = useState('');
    const [newUser, inputUser] = useState('');
    const [newPassword, inputPassword] = useState('');
    const [confirmPassowrd, inputConfirmPassword] = useState('');

    return(
        <View style = {styles.container}>
            {/*LOGO*/}
            <Image
                style = {styles.icon_content}
                source = {Logo}
                resizeMode = 'contain'
            />
            {/*Registration Title*/}
            <Text style = {styles.registration_txt}>
                Registration
            </Text>
            <View style = {styles.text_container}>
                {/*WELCOME
                <Text>
                    Welcome, Please enter you information down below
                </Text>*/}
                {/*FIRST NAME*/}
                <TextInput
                    style = {styles.user_content}
                    placeholder = 'First Name'
                    onChangeText = {userName => inputName(userName)}
                    textAlign = 'center'
                />
                {/*LAST NAME*/}
                <TextInput
                    style = {styles.user_content}
                    placeholder = 'Last Name'
                    onChangeText = {userName => inputName(userName)}
                    textAlign = 'center'
                />
                {/*EMAIL; incorporate error if invalid email*/}
                <TextInput
                    style = {styles.user_content}
                    placeholder = 'Organization Email'
                    onChangeText = {newUser => inputUser(newUser)}
                    textAlign = 'center'
                />
                {/*CREATE PASSWORD*/}
                <TextInput
                    style = {styles.user_content}
                    placeholder = 'Create Password'
                    onChangeText = {newPassword => inputPassword(newPassword)}
                    textAlign = 'center'
                />
                {/*CONFIRM PASSWORD*/}
                <TextInput
                    style = {styles.user_content}
                    placeholder = 'Confrim Password'
                    onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                    textAlign = 'center'
                />
            </View>
            <View style = {styles.confirm_button}>
                {/*CONFIRM*/}
                <Button
                    //style = {styles.confirm_button}
                    title = 'Sign Up'
                    onPress = {() => {NavigatorService.navigation('Home', {Home: 'Home'}); createAccount(newUser, newPassword)}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Window_Width,
        height: Window_Height,
        alignItems: 'center',
        backgroundColor: 'white',
        //backgroundColor: '#d1d1d1',
    },

    registration_txt: {
        fontSize: 20
    },

    text_container: {
        width: Window_Width * 0.80,
        height: Window_Height * 0.45,
        backgroundColor: '#223954',
        alignItems: 'center',
        paddingTop: 13,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: '#21364d',
    },

    confirm_button: {
        width: Window_Width * 0.45,
        height: Window_Height * 0.05,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: 'pink'
    },

    icon_content: {
        width: 160,
        height: 160,
        marginTop: Window_Height * 0.15,
        marginBottom: Window_Height * 0.045
    },

    user_content: {
        width: Window_Width * 0.45,
        height: Window_Height * 0.05,
        marginTop: Window_Height * 0.005,
        marginBottom: Window_Height * 0.030,
        //paddingTop: 10,
        borderRadius: 15,
        backgroundColor: '#BCF4F5'
        //backgroundColor: 'white'
    }
});