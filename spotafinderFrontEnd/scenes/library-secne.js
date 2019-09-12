import React from 'react';
import {Text, View, Button} from 'react-native';
import NavigatorService from '../navigator-service';

export default function LibaryScene() {

    return (
        <View> 
            <Button 
                title = "Library"
                color = "blue"
                onPress = {() => NavigatorService.navigation('Home', {Home: 'HomeScene'})}
            />
        </View>
    );
}