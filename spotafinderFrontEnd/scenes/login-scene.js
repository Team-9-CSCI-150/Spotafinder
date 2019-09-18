import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Dimensions, Button } from 'react-native';
import NavigatorService from '../navigator-service';
import { AuthSession } from 'expo';

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
        backgroundColor: 'pink',
        width: Dimensions.get('window').width * 0.5, 
        height: Dimensions.get('window').height * 0.05,
        borderRadius: 15,
        marginBottom: 10,
        textAlign: 'center',
    },
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
    }
});