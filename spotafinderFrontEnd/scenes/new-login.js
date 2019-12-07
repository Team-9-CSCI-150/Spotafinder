import React, { useState } from 'react';
import { View } from 'react-native';
import { emailFormat, passwordFormat } from './scenes/constants';

// Functioness components
import Input from 'Input';
import Button from 'Button';

// Important data

import NavigationService from './navigators/navigator-service';
import Firebase from 'firebase';

function sign_in(valid, email, password) {
    if (valid) {
        Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            if (Firebase.auth().currentUser.emailVerified) {
                NavigationService.navigation('Home', {Home: 'Home'});
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

export default function newLogin() {
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});