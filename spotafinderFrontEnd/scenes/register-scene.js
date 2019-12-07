import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Button, Image, Text } from 'react-native';
//import { Window_Width, Window_Height, Logo } from '../style';

import NavigatorService from '../navigators/navigator-service';
import FireBase from 'firebase';
import { ScrollView } from 'react-native';

function sign_up(valid, firstName, lastName, email, password) { 
    if (valid) {
        FireBase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            FireBase.auth().currentUser.sendEmailVerification()
            .then(() => {
                alert('Just send a verify email to ' + email);
                FireBase.firestore()
                .collection('users').doc(FireBase.auth().currentUser.uid)
                .set({  
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password,
                }).catch((error) => {
                    alert(error.message);
                });

                NavigatorService.navigation('Login', {Login: 'Login'});
            });
        })
        .catch((error) => {
            alert(error.message);
        })
    }
    else {
        alert('Wrong format!');
    }
}

export default function Register() {
    const [firstName, inputFirst] = useState({name: '', valid: false});
    const [lastName, inputLast] = useState({name: '', valid: false});
    const [email, inputEmail] = useState({name: '', valid: false});
    const [password, inputPassword] = useState({name: '', valid: false});
    const [confirm, inputConfirm] = useState(false);

    return(
        <View style = {Style.container}>
            {/*LOGO*/}
            <Image
                style = {Style.icon_content}
                source = {require('../../assets/logo_red.png')}
                resizeMode = 'contain'
            />
            {/*Registration Title*/}
            <Text style = {Style.registration_txt}>
                Registration
            </Text>
            <View style = {Style.text_container}>
                {/*FIRST NAME*/}
                <TextInput
                    style = {Style.user_content}
                    placeholder = 'First Name'
                    textAlign = 'center'
                    onChangeText = {(firstName) => {
                        inputFirst({name: firstName, valid: nameFormat.test(firstName)});
                    }}
                />
                {/*LAST NAME*/}
                <TextInput
                    style = {Style.user_content}
                    placeholder = 'Last Name'
                    textAlign = 'center'
                    onChangeText = {(lastName) => {
                        inputLast({name: lastName, valid: nameFormat.test(lastName)});
                    }}
                />
                {/*EMAIL; incorporate error if invalid email*/}
                <TextInput
                    style = {Style.user_content}
                    placeholder = 'Organization Email'
                    textAlign = 'center'
                    onChangeText = {(email) => { 
                        inputEmail({name: email, valid: emailFormat.test(email)});
                    }}
                />
                {/*CREATE PASSWORD*/}
                <TextInput
                    style = {Style.user_content}
                    placeholder = 'Create Password'
                    textAlign = 'center'
                    onChangeText = {(password) => {
                        inputPassword({name: password, valid: passwordFormat.test(password)});
                    }}
                />
                {/*CONFIRM PASSWORD*/}
                <TextInput
                    style = {Style.user_content}
                    placeholder = 'Confrim Password'
                    textAlign = 'center'
                    onChangeText = {(confirm) => {
                        inputConfirm(confirm == password.name);
                    }} 
                />
            </View>
            <View style = {Style.confirm_button}>
                {/*CONFIRM*/}
                <Button
                    //style = {styles.confirm_button}
                    title = 'Sign Up'
                    onPress = {() => {
                        var valid = firstName.valid && lastName.valid && email.valid && password.valid && confirm;
                        sign_up(valid, firstName.name, lastName.name, email.name, password.name);
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2D2D2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    //second container
    second_cotainer: {
        width: Window_Width * .90,
        height: Window_Height * .9,
        backgroundColor: '#E2E2E2',
        alignItems: 'center',
    },

    fl_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Window_Width * .90,
    },

    confirm_button: {
        width: Window_Width * 0.45,
        height: Window_Height * 0.05,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: 'pink'
    },

    icon_content: {
        width: 160,
        height: 160,
        marginTop: Window_Height * 0.05,
        marginBottom: Window_Height * 0.05,
    },

    user_content: {
        width: Window_Width * 0.45,
        height: Window_Height * 0.05,
        marginTop: Window_Height * 0.005,
        marginBottom: Window_Height * 0.030,
        borderRadius: 15,
        backgroundColor: '#BCF4F5',
        flexDirection: 'row',
        
    },
});