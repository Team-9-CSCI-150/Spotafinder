import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login/scene';

export default createAppContainer(
    createSwitchNavigator(
        {
            Login: {screen: Login},
        },
        {
            initialRouteName: 'Login',
        },
    )
);
