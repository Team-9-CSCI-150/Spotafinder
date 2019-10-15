import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Router, Scene } from 'react-native-router-flux'
import NavigatorService from '../navigators/navigator-service';

export default class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {

      show_App: false

    };
  }

  onDone = () => {
    this.setState(() => NavigatorService.navigation('Register', {Register: 'Register'}));
    ///this.setState(<Router component ={Home} title="Home" initial = {true} /> );
  };

  onSkip = () => {
    this.setState(() => NavigatorService.navigation('newLogin', {newLogin: 'newLogin'}));
  };

  /*onLogin = () => {
    this.setState(() => NavigatorService.navigation('Login', {Login: 'Login'}));
  };
  */
  

  render() {
    if (this.state.show_App) {
      return (
        <View style={styles.mainapp}>

          <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>

            This is your main App .

          </Text>

        </View>
      );
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this.onDone}
          showSkipButton={true}
          onSkip={this.onSkip}
          //onLogin={this.onLogin}
        />
      );
    }
  }
}
const styles = StyleSheet.create({

  mainapp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});

const slides = [
  {
    key: 's1',
    title: 'SpotaFinder',
    text: 'An app that lets you monitor library congestion',
    image: {
      uri:
        'https://imgur.com/7ClQj9M.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#BCF4F5',
  },
  {
    key: 's2',
    title: ' How to use the app',
    text: 'BLAHABLAHALBAHAABALAHABALAHA if you are ready to sign up hit the done button',
    image: {
      uri:
        'https://imgur.com/BVQ79rh.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#B4EBCA',
  },
  {
    key: 's3',
    title: 'Just Dating ',
    text: 'let hangout and enjoy together with special place and special deal',
    image: {
      uri: 'https://imgur.com/RPI8wie.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#D9F2B4',
  } 
];