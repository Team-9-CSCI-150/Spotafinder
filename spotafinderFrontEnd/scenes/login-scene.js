import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Dimensions, Button } from 'react-native';
import NavigatorService from '../navigator-service';

export default function LoginScene() {
    const [user, userInput] = useState('');
    const [password, passwordInput] = useState('');

    return (
        <View style = {styles.container}>
            <TextInput
                style = {styles.box}
                placeholder = 'Type your username!'
                onChangeText = {user => userInput(user)}
            />
            <TextInput
                style = {styles.box}
                placeholder = 'Type your password!'
                onChangeText = {password => passwordInput(password)}
            />
            <Button
                title = 'Login' 
                onPress = {() => NavigatorService.navigation('Home', {Home: 'Home'})}
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