import React, { useState } from 'react';
import { View, Image } from 'react-native';

// Functioness components
import Input from './components/Input';
import Button from './components/Button';

// Important data
import Firebase from '../../configs/firebase';
import Router from '../../navigator/router';
import Functions from './utils/functions';
import Constants from './utils/constants';
import Style from './style';

export default function Login() {
    const [email, inputEmail] = useState('');
    const [password, inputPassword] = useState('');
    
    return (
        <View style = {Style.container}>
         {/*LOGO*/}
            <Image
                style = {Style.icon_content}
                source = {Constants.icon}
                resizeMode = 'contain'
           />
           
            <Input
                style      = {[Style.inputContainer, Style.inputIcon, Style.inputs]}
                textHolder = 'Enter Email'
                isSecure   = {false}
                keyboard   = 'email-address'
                underline  = 'transparent'
                input      = {inputEmail}
            />

            <Input
                style      = {[Style.inputContainer, Style.inputIcon, Style.inputs]}
                textHolder = "Enter Password"
                isSecure   = {true}
                keyboard   = 'default'
                underline  = 'transparent'
                input      = {inputPassword}
            />
            
            <Button
                style   = {[Style.buttonContainer, Style.loginButton, Style.loginText]}
                text    = 'Login!'
                onPress = {() => {
                    Functions.sign_in(Firebase, Router, email, password);
                }}
            />
            <Button
                style   = {[Style.buttonContainer, , ]}
                text    = 'Forgot your password?'
                onPress = {() => {
                    Router.navigation('createAccount', {createAccount: 'createAccount'});
                }}
            />
            <Button
                style   = {[Style.buttonContainer, , ]}
                text    = 'Register!'
                onPress = {() => {
                    Router.navigation('Register', {Register: 'Register'});
                }}
            />
      </View>
    );
}