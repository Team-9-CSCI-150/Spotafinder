import React, { useState } from 'react';
import { View } from 'react-native';
import { emailFormat, passwordFormat } from '../../utils/constants';

// Functioness components
import Input from './components/Input';
import Button from './components/Button';

// Important data
import Styles from './style';
import Router from '../../navigator/router';
import Firebase from '../../configs/firebase';

function sign_in(valid, email, password) {
    if (valid) {
        Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            if (Firebase.auth().currentUser.emailVerified) {
                Router.navigation('Home', {Home: 'Home'});
            }
            else {
                alert(email + ' has not been verified');
            }
        })
        .catch(function(error) {
            alert(error.message);
        });
    }
    else {
        alert('Invalid format!');
    }
}

export default function Login() {
    const [email, inputEmail] = useState('');
    const [password, inputPassword] = useState('');
    
    return (
        <View style = {Styles.container}>
            <Input
                style      = {[Styles.inputContainer, Styles.inputIcon, Styles.inputs]}
                image      = {{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}
                textHolder = 'Enter Email'
                isSecure   = {false}
                keyboard   = 'email-address'
                underline  = 'transparent'
                input      = {inputEmail}
            />
            <Input
                style      = {[Styles.inputContainer, Styles.inputIcon, Styles.inputs]}
                image      = {{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}
                textHolder = "Enter Password"
                isSecure   = {true}
                keyboard   = 'default'
                underline  = 'transparent'
                input      = {inputPassword}
            />
            
            <Button
                style   = {[Styles.buttonContainer, Styles.loginButton, Styles.loginText]}
                text    = 'Login!'
                onPress = {() => {
                    sign_in(emailFormat.test(email) && passwordFormat.test(password), email, password);
                }}
            />
            <Button
                style   = {[Styles.buttonContainer, , ]}
                text    = 'Forgot your password?'
                onPress = {() => {
                    Router.navigation('createAccount', {createAccount: 'createAccount'});
                }}
            />
            <Button
                style   = {[Styles.buttonContainer, , ]}
                text    = 'Register!'
                onPress = {() => {
                    Router.navigation('Register', {Register: 'Register'});
                }}
            />
      </View>
    );
}