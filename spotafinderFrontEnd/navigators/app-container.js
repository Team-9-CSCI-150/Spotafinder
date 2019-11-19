import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import React    from 'react';
import Welcome  from '../scenes/welcome-scene';
//import Splash from '../scenes/splash-scene';
import Home     from '../scenes/home-scene';
import Library  from '../scenes/library-scene';
import Register from '../scenes/register-scene';
import newLogin from '../scenes/new-login';
import mapScene      from '../scenes/map-scene';

const SwitchNavigator = createSwitchNavigator(
    {
        Register: Register,
        Home: Home,
        Library: Library,
        //Splash,Splash
        Welcome: Welcome,  
        newLogin: newLogin,
        mapScene: mapScene,
    },
    {
        initialRouteName: 'mapScene',
    },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;