import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/login/scene';
import Register from '../screens/register/scene';
import Home from '../screens/home/scene';
import Area from '../screens/area/scene';
import Friend from '../screens/friend/scene';
import User from '../screens/friend/user';

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
