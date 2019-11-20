import { StyleSheet, View } from 'react-native';
//import { Window_Width, Window_Height }  from './style';

import React from 'react';
import Router from './src/navigator/router';
import AppContainer from './src/navigator/container';

export default function App() {
  return (
    <View>
        <AppContainer
            ref = {(navigatorRef) => {
                Router.setTopLevelNavigator(navigatorRef);
            }}
        />
    </View>
  );
}