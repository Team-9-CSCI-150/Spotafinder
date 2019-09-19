import React, { useState, useEffect } from 'react'
import { View, 
         TextInput, 
         StyleSheet, 
         Dimensions, 
         Button } from 'react-native';
import Style from '../style';
import NavigatorService from '../navigators/navigator-service';
import FireBase from '../firebase';

async function createAccount(user, password) {
    try {
        await FireBase.auth().createUserWithEmailAndPassword(user, password);
    } catch (error) {
        console.log(error.toString())
    }
}



export default function Register() {
    const [userName, inputName] = useState('');
    const [newUser, inputUser] = useState('');
    const [newPassword, inputPassword] = useState('');
    const [confirmPassowrd, inputConfirmPassword] = useState('');

    return(
        <View style = {Style.center}>
            <TextInput
                style = {styles.box}
                placeholder = 'Input Name'
                onChangeText = {userName => inputName(userName)}
            />
            <TextInput
                style = {styles.box}
                placeholder = 'Create Users!'
                onChangeText = {newUser => inputUser(newUser)}
            />
            <TextInput
                style = {styles.box}
                placeholder = 'Create Password'
                onChangeText = {newPassword => inputPassword(newPassword)}
            />
            <TextInput
                style = {styles.box}
                placeholder = 'Confrim Password'
                onChangeText = {confirmPassowrd => inputConfirmPassword(confirmPassowrd)}
            />
            <Button
                title = 'Register Done!'
                onPress = {() => {NavigatorService.navigation('Home', {Home: 'Home'}); createAccount(newUser, newPassword)}}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    box: {
        backgroundColor: 'pink',
        width: Dimensions.get('window').width / 2, 
        height: 40,
        marginBottom: 20,
    },
    container: {
        backgroundColor: 'red',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
    }
});