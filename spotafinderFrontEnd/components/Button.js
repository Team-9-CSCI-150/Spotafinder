import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) =>{
    return(
        <TouchableOpacity
        onPress={onPress}>
<Text>{ children } </Text>
        </TouchableOpacity>
    )
}

const 