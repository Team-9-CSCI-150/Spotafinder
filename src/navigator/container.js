import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import login from '../screens/login/scene';
import register from '../screens/register/scene';
import home from '../screens/home/scene';
import area from '../screens/area/scene';
import friend from '../screens/friend/scene';
import setting from '../screens/setting/scene';

export default createAppContainer(
    createSwitchNavigator(
        {
            'Login': {screen: login},
            'Register': {screen: register},
            'Home': {screen: home},
            'Area': {screen: area},
            'Friend': {screen: friend},
            'Setting': {screen: setting}
        },
        {
            initialRouteName: 'Home',
        },
    )
);
