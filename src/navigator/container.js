import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../components/login/scene';

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
