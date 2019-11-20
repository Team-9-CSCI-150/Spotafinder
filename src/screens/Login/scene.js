import React, { useState } from 'react';
import { 
    Text, 
    View, 
    TextInput, 
    TouchableHighlight, 
    Image 
} from 'react-native';

import Styles from './style';
import Router from '../../navigator/router';


export default function Login() {
    [email, inputEmail] = useState('');
    [password, inputPassword] = useState('');

    return (
        <View style = {Styles.container}>
            <View style = {Styles.inputContainer}>
                <Image style = {Styles.inputIcon} source = {{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                <TextInput style = {Styles.inputs}
                    placeholder = "Email"
                    keyboardType = "email-address"
                    underlineColorAndroid = 'transparent'
                    onChangeText = {(email) => {
                        inputEmail(email);
                    }}
                />
            </View>
        
            <View style={Styles.inputContainer}>
                <Image style={Styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                <TextInput style={Styles.inputs}
                    placeholder = "Password"
                    secureTextEntry = {true}
                    underlineColorAndroid = 'transparent'
                    onChangeText = {(password) => {
                        inputPassword(password);
                    }}
                />
            </View>

            <TouchableHighlight style={[Styles.buttonContainer, Styles.loginButton]} onPress={() => Router.navigation('Library', {Library: 'Library'})}>
                <Text style={Styles.loginText}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight style={Styles.buttonContainer} onPress={() => Router.navigation('createAccount', {createAccount: 'createAccount'})}>
                <Text>Forgot your password?</Text>
            </TouchableHighlight>

            <TouchableHighlight style={Styles.buttonContainer} onPress = {() => Router.navigation('Register', {Register: 'Register'})}>
                <Text>Register</Text>
            </TouchableHighlight>
      </View>
    );
}