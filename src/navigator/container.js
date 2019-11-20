import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login/scene';
import Map from '../screens/Map/scene';

export default createAppContainer(
    createSwitchNavigator(
        {
            'Login': {screen: Login},
            'Map': {screen: Map},
        },
        {
            initialRouteName: 'Login',
        },
    )
);
