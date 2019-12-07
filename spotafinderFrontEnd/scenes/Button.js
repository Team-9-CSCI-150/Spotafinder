import React from 'react';
import { TouchableHighlight, Text } from 'react-native'

export default function Button(prop) {
    return(
        <TouchableHighlight 
            style = {[prop.style[0], prop.style[1]]}
            onPress = {prop.onPress} >
            <Text style={prop.style[2]}> {prop.text} </Text>
        </TouchableHighlight>
    );
}