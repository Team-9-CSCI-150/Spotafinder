import React from 'react';
import { View, Image, TextInput } from 'react-native'

export default function Input(prop) {
    return (
        <View style = {prop.style[0]}>
            <Image 
                style = {prop.style[1]}
                source = {prop.image}
            />
            <TextInput 
                style = {prop.style[2]}
                placeholder = {prop.textHolder}
                secureTextEntry = {prop.isSecure}
                keyboardType = {prop.keyboard}
                underlineColorAndroid = {prop.underline}
                onChangeText = {(text) => {
                    prop.input(text);
                }}
            />
        </View>
    );
}