import React   from 'react';
import Service from '../navigator-service';

import { Text, View, Button } from 'react-native';

export default function Library() {
    return (
        <View> 
            <Button 
                title = "Library"
                color = "blue"
                onPress = {() => Service.navigation('Home', {Home: 'Home'})}
            />
        </View>
    );
}