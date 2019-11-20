import React, { useState } from 'react'
import { 
    View, 
    TextInput, 
    Button, 
    Image, 
    Text 
} from 'react-native';

import Router from '../../navigator/router';
import FireBase from '../../configs/firebase';
import Style from './style';

async function createAccount(user, password) {
    try {
        await FireBase.auth().createUserWithEmailAndPassword(user, password);
    } catch (error) {
        alert("Hello! I am an alert box!!");

    }
}

export default function Register() {
    const [userName, inputName] = useState('');
    const [newUser, inputUser] = useState('');
    const [newPassword, inputPassword] = useState('');
    const [confirmPassowrd, inputConfirmPassword] = useState('');

    return(
        <View style = {Style.container}>
            {/*LOGO*/}
            <Image
                style = {Style.icon_content}
                source = {Logo}
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
                    onChangeText = {userName => inputName(userName)}
                    textAlign = 'center'
                />
                {/*LAST NAME*/}
                <TextInput
                    style = {Style.user_content}
                    placeholder = 'Last Name'
                    onChangeText = {userName => inputName(userName)}
                    textAlign = 'center'
                />
                {/*EMAIL; incorporate error if invalid email*/}
                <TextInput
                    style = {Style.user_content}
                    placeholder = 'Organization Email'
                    onChangeText = {newUser => inputUser(newUser)}
                    textAlign = 'center'
                />
                {/*CREATE PASSWORD*/}
                <TextInput
                    style = {Style.user_content}
                    placeholder = 'Create Password'
                    onChangeText = {newPassword => inputPassword(newPassword)}
                    textAlign = 'center'
                />
                {/*CONFIRM PASSWORD*/}
                <TextInput
                    style = {Style.user_content}
                    placeholder = 'Confrim Password'
                    onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
                    textAlign = 'center'
                />
            </View>
            <View style = {Style.confirm_button}>
                {/*CONFIRM*/}
                <Button
                    //style = {styles.confirm_button}
                    title = 'Sign Up'
                    onPress = {() => {Router.navigation('Home', {Home: 'Home'}); createAccount(newUser, newPassword)}}
                />
            </View>
        </View>
    );
}