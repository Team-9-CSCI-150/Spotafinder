import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home    from './screens/home';
import Library from './screens/library'

const SwitchNavigator = createSwitchNavigator(
    {
        Home: Home,
        Library: Library,
    },
    {
        initialRouteName: 'Home',
    },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;