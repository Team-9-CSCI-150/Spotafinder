import { StyleSheet, Text, View }      from 'react-native';
import { Window_Width, Window_Height } from './src/constant'

import AppContainer from './src/app-container';
import React        from 'react';
import Service      from './src/navigator-service';


export default function App() {
  return (
    <View style = {style.size}>
         <AppContainer
            refs  = {(navigatorRef) => {
                Service.setTopLevelNavigator(navigatorRef);
            }}
        />
    </View>
  );
}

const style = StyleSheet.create({
    size: {
        width: Window_Width, 
        height: Window_Height,
        justifyContent: 'center',
        alignItems: 'center',
    },
});