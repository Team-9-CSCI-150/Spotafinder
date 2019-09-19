import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import DashBoardScreen from './screens/DashBoardScreen';
import LoadingScreen from './screens/LoadingScreen';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
 render(){
   return (<AppNavigator />

   );
  }
}
const AppSwitchNavigator = createSwitchNavigator({

  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashBoardScreen:DashBoardScreen
});

const AppNavigator = createAppContainer
(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  form:{
    flex:1
  }
});
