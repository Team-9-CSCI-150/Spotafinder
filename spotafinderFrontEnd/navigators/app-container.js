import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import React    from 'react';
import Welcome  from '../scenes/welcome-scene';
//import Splash from '../scenes/splash-scene';
import Home     from '../scenes/home-scene';
import Library  from '../scenes/library-scene';
import Login    from '../scenes/login-scene';
import Register from '../scenes/register-scene';

const SwitchNavigator = createSwitchNavigator(
    {
        Register: Register,
        Login: Login,
        Home: Home,
        Library: Library,
        //Splash,Splash
        Welcome: Welcome,  
    },
    {
        initialRouteName: 'Welcome',
    },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;