import React, { Component } from 'react';
import { 
    View, 
    TouchableOpacity, 
    ImageBackground 
} from 'react-native';

import TimeSlideShow from 'react-native-timed-slideshow';
import ImagePickerExample from './utils/functions';
import Router from '../../navigator/router';
import Constants from './utils/constants';
import Style from './style'

export default class Home extends Component {

    render() {
        return (
            <ImageBackground 
                style = {Style.background_size}
            >
                <ImagePickerExample style={Style.profile_size}/>
                
                <View style = {Style.slider_size}>
                    <TimeSlideShow   
                        items = {Constants.slider}
                        titleStyle = { {fontSize: 10} }
                        textStyle = { {fontSize: 10} }
                        footerStyle = {{backgroundColor: (0,0,0,0)}}
                        showProgressBar = { false }
                        renderCloseIcon = {() => { return true; }}
                        renderIcon = {() => { return true; }}
                    />
                </View>

                <View style = {Style.container}>
                    <View style = {Style.row}>
                        <TouchableOpacity
                            style = {Style.button_size}
                            activeOpacity = {0.5}  
                            onPress = {() => {
                            Router.navigation('Area', {Area: 'Area'});
                        }}>
                            <ImageBackground 
                                source = {Constants.map} 
                                style = {Style.button_size}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style = {Style.button_size}
                            activeOpacity = {0.5}  
                            onPress = {() => {
                            Router.navigation('Social', {Social: 'Social'});
                        }}>
                            <ImageBackground 
                                source = {Constants.friends} 
                                style = {Style.button_size}/>
                        </TouchableOpacity>
                    </View>

                    <View style = {Style.row}>
                        <TouchableOpacity
                            style = {Style.button_size}
                            activeOpacity = {0.5}  
                            onPress = {() => {
                            Router.navigation('Setting', {Setting: 'Setting'});
                        }}>
                            <ImageBackground 
                                source = {Constants.setting}
                                style = {Style.button_size}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style = {Style.button_size}
                            activeOpacity = {0.5}  
                            onPress = {() => {
                            Router.navigation('Welcome', {Welcome: 'Welcome'});
                        }}>
                            <ImageBackground 
                                source = {Constants.news}
                                 //
                                style = {Style.button_size}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}