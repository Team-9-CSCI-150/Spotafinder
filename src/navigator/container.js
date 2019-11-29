import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login/scene';
import Register from '../screens/Register/scene';
import Home from '../screens/Home/scene';
import Area from '../screens/Area/scene';
import Friend from '../screens/Friend/scene';
import User from '../screens/Friend/user';

export default createAppContainer(
    createSwitchNavigator(
        {
            'Login': {screen: Login},
            'Register': {screen: Register},
            'Home': {screen: Home},
            'Area': {screen: Area},
            'Friend': {screen: Friend},
            'User': {screen: User}
        },
        {
            initialRouteName: 'Login',
        },
    )
);
