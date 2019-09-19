import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppContainer from './navigators/app-container'
import NavigatorService from './navigator-service';


export default function App() {
  return (
    <View>
        <AppContainer ref = {navigatorRef => {
            NavigatorService.setTopLevelNavigator(navigatorRef);
        }}/>
    </View>
  );
}

