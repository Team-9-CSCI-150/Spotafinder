import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Home from '../scenes/home-scene';
import Library from '../scenes/library-scene';
import Login from '../scenes/login-scene';
import Register from '../scenes/register-scene';

const SwitchNavigator = createSwitchNavigator(
    {
        Register: Register,
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