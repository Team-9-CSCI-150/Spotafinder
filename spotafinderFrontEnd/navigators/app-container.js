import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import HomeScene from '../scenes/home-scene';
import LibraryScene from '../scenes/library-secne';

const SwitchNavigator = createSwitchNavigator(
    {
        Home: HomeScene,
        Library: LibraryScene,
    },
    {
        initialRouteName: 'Home',
    },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;