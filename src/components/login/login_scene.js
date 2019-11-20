import React, { useState } from 'react';
import Styles from './login_style';
//import NavigatorService from '../navigators/navigator-service';
import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
} from 'react-native';

export default function Login() {
    [email, inputEmail] = useState('');
    [password, inputPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                <TextInput style={styles.inputs}
                    placeholder = "Email"
                    keyboardType = "email-address"
                    underlineColorAndroid = 'transparent'
                    onChangeText = {(email) => {
                        inputEmail(email);
                    }}
                />
            </View>
        
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                <TextInput style={styles.inputs}
                    placeholder = "Password"
                    secureTextEntry = {true}
                    underlineColorAndroid = 'transparent'
                    onChangeText = {(password) => {
                        inputPassword(password);
                    }}
                />
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => NavigatorService.navigation('Library', {Library: 'Library'})}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() => NavigatorService.navigation('createAccount', {createAccount: 'createAccount'})}>
                <Text>Forgot your password?</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress = {() => NavigatorService.navigation('Register', {Register: 'Register'})}>
                <Text>Register</Text>
            </TouchableHighlight>
      </View>
    );
}