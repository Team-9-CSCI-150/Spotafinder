import React, { useState } from 'react'
import { 
    View, 
    TextInput, 
    Button, 
    Image, 
    Text 
} from 'react-native';
import { nameFormat, emailFormat, passwordFormat } from '../../utils/constants';

import Router from '../../navigator/router';
import FireBase from '../../configs/firebase';
import Style from './style';

function sign_up(valid, firstName, lastName, email, password) { 
    if (valid) {
        FireBase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            var uID = FireBase.auth().currentUser.uid;
            var db = FireBase.firestore();

            db.collection('users').doc(uID).set({ //This might be a function
                ID: uID,
                name: firstName + lastName,
                email: email,
                password: password,
            }).catch((error) => {
                alert(error.message);
            })

            //FireBase.storage().ref().child(uID + '/images');
            Router.navigation('Home', {Home: 'Home'});
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
    const [firstName, inputFirst] = useState('');
    const [lastName, inputLast] = useState('');
    const [email, inputEmail] = useState('');
    const [password, inputPassword] = useState('');
    const [confirm, inputConfirm] = useState('');

    const [isFirstName, validFirstName] = useState(false);
    const [isLastName, validLastName] = useState(false);
    const [isEmail, validEmail] = useState(false);
    const [isPassowrd, validPassword] = useState(false);
    const [isConfirmPassword, validConfirmPassword] = useState(false);

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
                        inputFirst(firstName);
                        validFirstName(nameFormat.test(firstName));
                    }}
                />
                {/*LAST NAME*/}
                <TextInput
                    style = {Style.user_content}
                    placeholder = 'Last Name'
                    textAlign = 'center'
                    onChangeText = {(lastName) => {
                        inputLast(lastName);
                        validLastName(nameFormat.test(lastName));
                    }}
                />
                {/*EMAIL; incorporate error if invalid email*/}
                <TextInput
                    style = {Style.user_content}
                    placeholder = 'Organization Email'
                    textAlign = 'center'
                    onChangeText = {(email) => { 
                        inputEmail(email);
                        validEmail(emailFormat.test(email));
                    }}
                />
                {/*CREATE PASSWORD*/}
                <TextInput
                    style = {Style.user_content}
                    placeholder = 'Create Password'
                    onChangeText = {(password) => {
                        inputPassword(password);
                        validPassword(passwordFormat.test(password));
                    }}
                    textAlign = 'center'
                />
                {/*CONFIRM PASSWORD*/}
                <TextInput
                    style = {Style.user_content}
                    placeholder = 'Confrim Password'
                    textAlign = 'center'
                    onChangeText = {(confirm) => {
                        inputConfirm(confirm);
                        validConfirmPassword(confirm == password);
                    }} 
                />
            </View>
            <View style = {Style.confirm_button}>
                {/*CONFIRM*/}
                <Button
                    //style = {styles.confirm_button}
                    title = 'Sign Up'
                    onPress = {() => {
                        var valid = isFirstName && isLastName && isEmail && isPassowrd && isConfirmPassword;
                        sign_up(valid, firstName, lastName, email, password);
                    }}
                />
            </View>
        </View>
    );
}