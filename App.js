import { StyleSheet, View } from 'react-native';
import { Window_Width, Window_Height }  from './src/utils/constants';

import React, { useEffect } from 'react';
import Router from './src/navigator/router';
import AppContainer from './src/navigator/container';
import { test } from './src/utils/verify';

export default function App() {
    useEffect(() => {
        setTimeout(test, 2000);
    }, tes);

    return (
        <View style = {styles.container}>
            <AppContainer
                ref = {(navigatorRef) => {
                    Router.setTopLevelNavigator(navigatorRef);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Window_Width,
        height: Window_Height,
        //alignItems: 'center',
        //justifyContent: 'center',
    }
});