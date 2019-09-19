import {StyleSheet, Text, View} from 'react-native';

import React            from 'react';
import AppContainer     from './navigators/app-container'
import NavigatorService from './navigators/navigator-service';


export default function App() {
  return (
    <View>
        <AppContainer ref = {navigatorRef => {
            NavigatorService.setTopLevelNavigator(navigatorRef);
        }}/>
    </View>
  );
}

