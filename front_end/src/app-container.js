import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Entrance from './screens/entrance';
import Home    from './screens/home';
import Library from './screens/library';

const SwitchNavigator = createSwitchNavigator(
    {
        Entrance: Entrance,
        Home: Home,
        Library: Library,
    },
    {
        initialRouteName: 'Entrance',
    },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;