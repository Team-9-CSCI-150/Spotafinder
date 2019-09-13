import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Home from '../scenes/home-scene';
import Library from '../scenes/library-secne';
import Login from '../scenes/login-scene';

const SwitchNavigator = createSwitchNavigator(
    {
        Login: Login,
        Home: Home,
        Library: Library,
    },
    {
        initialRouteName: 'Login',
    },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;