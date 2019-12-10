import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/login/scene';
import Register from '../screens/register/scene';
import Home from '../screens/home/scene';
import Area from '../screens/area/scene';
import Setting from '../screens/setting/scene';
import Social from '../screens/social/scene';
import Welcome from '../screens/welcome/scene'

export default createAppContainer(
    createSwitchNavigator(
        {
            'Login': {screen: Login},
            'Register': {screen: Register},
            'Home': {screen: Home},
            'Area': {screen: Area},
            'Setting': {screen: Setting},
            'Social': {screen: Social},
            'Welcome': {screen: Welcome},
        },
        {
            initialRouteName: 'Welcome',
        },
    )
);
