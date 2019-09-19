import React from 'react';
import {Text, View, Button} from 'react-native';
import NavigatorService from '../navigator-service';

export default function Home() {
    //Possible need a hook
    return (
        <View>
            <Button 
                title = "Home"
                color = "red"
                onPress = {() => NavigatorService.navigation('Library', {Library: 'Library'})}
            />
        </View>
    );
}
