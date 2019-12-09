import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { emailFormat, passwordFormat } from '../../utils/constants';

// Functioness components
import Input from './components/Input';
import Button from './components/Button';

// Important data
import Style from './style';
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
        <View style = {Style.container}>
         {/*LOGO*/}
            <Image
                style = {Style.icon__content}
                source = {require('./assets/images/spotafindericon.png')}
                resizeMode = 'contain'
           />
           
            
       
            <Input
                style      = {[Style.inputContainer, Style.inputIcon, Style.inputs]}
                //image      = {{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}
                textHolder = 'Enter Email'
                isSecure   = {false}
                keyboard   = 'email-address'
                underline  = 'transparent'
                input      = {inputEmail}
            />
            <Input
                style      = {[Style.inputContainer, Style.inputIcon, Style.inputs]}
               // image      = {{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}
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
                    sign_in(emailFormat.test(email) && passwordFormat.test(password), email, password);
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