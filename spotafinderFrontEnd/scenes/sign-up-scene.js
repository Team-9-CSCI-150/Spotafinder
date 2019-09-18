import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Dimensions, Button } from 'react-native';
import NavigatorService from '../navigator-service';
import FireBase from '../firebase';

async function createAccount(user, password) {
    try {
        await FireBase.auth().createUserWithEmailAndPassword(user, password);
    } catch (error) {
        console.log(error.toString())
    }
}

export default function Register() {
    const [newUser, inputUser] = useState('');
    const [newPassword, inputPassword] = useState('');

    return(
        <View style = {styles.container}>
            <TextInput
                style = {styles.box}
                placeholder = 'Create User!'
                onChangeText = {newUser => inputUser(newUser)}
            />
            <TextInput
                style = {styles.box}
                placeholder = 'Create Password'
                onChangeText = {newPassword => inputPassword(newPassword)}
            />
            <Button
                title = 'Register Done!'
                onPress = {() => { NavigatorService.navigation('Home', {Home: 'Home'}); createAccount(newUser, newPassword) }}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    box: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width / 2, 
        height: 40,
        marginBottom: 20,
    },
    container: {
        backgroundColor: 'red',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
    }
});