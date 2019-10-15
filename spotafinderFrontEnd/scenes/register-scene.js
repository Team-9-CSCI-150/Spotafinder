import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Button, Image } from 'react-native';
import { Window_Width, Window_Height, Icon } from '../style';

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
            <Image
                style = {styles.icon_content}
                source = {Icon}
                resizeMode = 'contain'
            />
            <TextInput
                style = {styles.user_content}
                placeholder = 'Name'
                onChangeText = {userName => inputName(userName)}
                textAlign = 'center'
            />
            <TextInput
                style = {styles.user_content}
                placeholder = 'User'
                onChangeText = {newUser => inputUser(newUser)}
                textAlign = 'center'
            />
            <TextInput
                style = {styles.user_content}
                placeholder = 'Create Password'
                onChangeText = {newPassword => inputPassword(newPassword)}
                textAlign = 'center'
            />
            <TextInput
                style = {styles.user_content}
                placeholder = 'Confrim Password'
                onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                textAlign = 'center'
            />
            <Button
                style = {styles.user_content}
                title = 'Register Done!'
                onPress = {() => {NavigatorService.navigation('Home', {Home: 'Home'}); createAccount(newUser, newPassword)}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Window_Width * 0.60,
        height: Window_Height,
        alignItems: 'center',
        backgroundColor: 'pink',
    },

    icon_content: {
        marginTop: Window_Height * 0.15,
        marginBottom: Window_Height * 0.045
    },

    user_content: {
        width: Window_Width * 0.45,
        height: Window_Height * 0.05,
        marginTop: Window_Height * 0.005,
        marginBottom: Window_Height * 0.005,
        borderRadius: 15,
        backgroundColor: 'white'
    }
});