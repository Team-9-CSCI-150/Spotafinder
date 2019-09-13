import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import NavigatorService from '../navigator-service';

export default function LoginScene() {
    const [user, userInput] = useState("");
    const [password, passwordInput] = useState("");

    return (
        <View style={styles.container}>
             <TextInput 
                style={styles.box}
                placeholder = "Type your username!"
                onChangeText = {user => userInput(user)}
            />
            <TextInput
                placeholder = "Type your password!"
                onChangeText = {password => passwordInput(password)}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    box: {
        marginTop: '100%',
        marginBottom: '30%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});