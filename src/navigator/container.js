import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login/scene';
import Register from '../screens/Register/scene';
import Home from '../screens/Home/scene';
import Area from '../screens/Area/scene';

export default createAppContainer(
    createSwitchNavigator(
        {
            'Login': {screen: Login},
            'Register': {screen: Register},
            'Home': {screen: Home},
            'Area': {screen: Area},
        },
        {
            initialRouteName: 'Login',
        },
    )
);
