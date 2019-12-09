import React, { useState } from 'react'
import { 
    View, 
    TextInput, 
    Button, 
    Image, 
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import { nameFormat, emailFormat, passwordFormat } from '../../utils/constants';

import Router from '../../navigator/router';
import FireBase from '../../configs/firebase';
import Style from './style';

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

                Router.navigation('Login', {Login: 'Login'});
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
        <KeyboardAvoidingView style={Style.container} behavior="padding" enabled>
            <View style = {Style.second_cotainer}>
                {/*LOGO*/}
                <Image
                    style = {Style.icon_content}
                    source = {require('../../assets/spotafinder_logo.png')}
                    resizeMode = 'contain'
                />
                <View style = {Style.fl_container}>
                    {/*FIRST NAME*/}
                    <TextInput
                        style = {Style.small_content}
                        placeholder = 'First Name'
                        onChangeText = {(firstName) => {
                            inputFirst({name: firstName, valid: nameFormat.test(firstName)});
                        }}
                        textAlign = 'center'
                    />
                    {/*LAST NAME*/}
                    <TextInput
                        style = {Style.small_content}
                        placeholder = 'Last Name'
                        onChangeText = {(lastName) => {
                            inputLast({name: lastName, valid: nameFormat.test(lastName)});
                        }}
                        textAlign = 'center'
                    />
                </View>
                {/*EMAIL; incorporate error if invalid email*/}
                <TextInput
                    style = {Style.large_content}
                    placeholder = 'Organization Email'
                    onChangeText = {(email) => { 
                        inputEmail({name: email, valid: emailFormat.test(email)});
                    }}
                    textAlign = 'center'
                />
                {/*CREATE PASSWORD*/}
                <TextInput
                    style = {Style.large_content}
                    placeholder = 'Create Password'
                    onChangeText = {(password) => {
                        inputPassword({name: password, valid: passwordFormat.test(password)});
                    }}
                    textAlign = 'center'
                />
                {/*CONFIRM PASSWORD*/}
                <TextInput
                    style = {Style.large_content}
                    placeholder = 'Confrim Password'
                    onChangeText = {(confirm) => {
                        inputConfirm(confirm == password.name);
                    }}
                    textAlign = 'center'
                />
                {/* </View> */}
                <View style = {Style.confirm_button}>
                    {/*CONFIRM*/}
                    <Button
                        //style = {styles.confirm_button}
                        title = 'Sign Up'
                        color = 'white'
                        onPress = {() => {
                            var valid = firstName.valid && lastName.valid && email.valid && password.valid && confirm;
                            sign_up(valid, firstName.name, lastName.name, email.name, password.name);
                        }}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}