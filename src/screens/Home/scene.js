import { View, TouchableOpacity } from 'react-native';

import React from 'react';
import Style from './style'
import Router from '../../navigator/router';

export default function Home() {
    return (
        <View style = {Style.direction}>
            <View>
                <TouchableOpacity
                    style = {Style.size}
                    onPress = {() => {
                        Router.navigation('Friend', {Friend:'Friend'});
                    }}
                />
                <TouchableOpacity
                    style = {Style.size}
                    onPress = {() => {
                        Router.navigation('Area', {Area:'Area'});
                    }}
                />
            </View>
            <View>
                <TouchableOpacity
                    style = {Style.size}
                    /*onPress = {() => {
                        Router.navigation('Friend', {Friend:'Friend'});
                    }}*/
                />
                <TouchableOpacity
                    style = {Style.size}
                />
            </View>
        </View>  
    );
}