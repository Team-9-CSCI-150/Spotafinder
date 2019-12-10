import React, { useState } from 'react'
import { 
    View, 
    TextInput, 
    Button, 
    Image, 
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';
import { nameFormat, emailFormat, passwordFormat } from '../../utils/constants';

import FireBase from '../../configs/firebase';
import Router from '../../navigator/router';
import Functions from './utils/functions';
import Constants from './utils/constants';
import Style from './style';

export default function Register() {
    const [firstName, inputFirst] = useState({name: '', valid: false});
    const [lastName, inputLast] = useState({name: '', valid: false});
    const [email, inputEmail] = useState({name: '', valid: false});
    const [password, inputPassword] = useState({name: '', valid: false});
    const [confirm, inputConfirm] = useState(false);

    return(
        <KeyboardAvoidingView style={Style.container} behavior="padding" enabled>
            <TouchableOpacity onPress={() => Router.navigation('Login', {Login: 'Login'})}>
                {/*LOGO*/}
                <Image
                    style = {Style.icon_content}
                    source = {Constants.icon}
                    resizeMode = 'contain'
                />
            </TouchableOpacity>

            <View style = {Style.fl_container}>
                {/*FIRST NAME*/}
                <TextInput
                    style = {Style.small_content}
                    placeholder = 'First Name'
                    textAlign = 'center'
                    onChangeText = {(firstName) => {
                        inputFirst({name: firstName, valid: nameFormat.test(firstName)});
                    }} 
                />

                {/*LAST NAME*/}
                <TextInput
                    style = {Style.small_content}
                    placeholder = 'Last Name'
                    textAlign = 'center'
                    onChangeText = {(lastName) => {
                        inputLast({name: lastName, valid: nameFormat.test(lastName)});
                    }}
                />
            </View>

            {/*EMAIL; incorporate error if invalid email*/}
            <TextInput
                style = {Style.large_content}
                placeholder = 'Organization Email'
                keyboardType = 'email-address'
                textAlign = 'center'
                onChangeText = {(email) => { 
                    inputEmail({name: email, valid: emailFormat.test(email)});
                }}
            />

            {/*CREATE PASSWORD*/}
            <TextInput
                style = {Style.large_content}
                placeholder = 'Create Password'
                secureTextEntry = {true}
                textAlign = 'center'
                onChangeText = {(password) => {
                    inputPassword({name: password, valid: passwordFormat.test(password)});
                    inputConfirm(confirm == password.name);
                }}
            />

            {/*CONFIRM PASSWORD*/}
            <TextInput
                style = {Style.large_content}
                placeholder = 'Confrim Password'
                textAlign = 'center'
                secureTextEntry = {true}
                onChangeText = {(confirm) => {
                    inputConfirm(confirm == password.name);
                }}
            />

            {/* </View> */}
            <View style = {Style.confirm_button}>
                
                {/*CONFIRM*/}
                <Button
                    title = 'Sign Up'
                    color = 'white'
                    onPress = {() => {
                        var error = '';
                        if (!firstName.valid) {
                            error += 'First name is not valid.\n';
                        }

                        if (!lastName.valid) {
                            error += 'Last name is not valid.\n';
                        }

                        if (!email.valid) {
                            error += 'Email is not a valid.\n';
                        }

                        if (!password.valid) {
                            error += 'Password is not a valid.\n';
                        }

                        if (!confirm) {
                            error += 'Password doesnt match.\n';
                        }
                            
                        if (error == '') {
                            Functions.sign_up(FireBase, Router, firstName.name, lastName.name, email.name, password.name);
                        }
                        else {
                            alert("Errors: \n" + error);
                        }
                    }}
                />
            </View>
        </KeyboardAvoidingView>
    );
}