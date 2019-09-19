import { StyleSheet, Text, View }       from 'react-native';
import { Window_Width, Window_Height }  from './style';

import React            from 'react';
import AppContainer     from './navigators/app-container'
import NavigatorService from './navigators/navigator-service';


export default function App() {
  return (
    <View style = {styles.container}>
        <AppContainer
            ref = {navigatorRef => {
                NavigatorService.setTopLevelNavigator(navigatorRef);
            }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: Window_Width,
        height: Window_Height,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
