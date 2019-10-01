import React, { Component } from 'react';

import { StyleSheet, View, Text, Platform } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

export default class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {

      show_App: false

    };
  }

  onDone = () => {
    this.setState(() => NavigatorService.navigation('Home', {Home: 'Home'}));
  };

  onSkip = () => {
    this.setState({ show_App: true });
  };
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
    text: 'We dont monitor your data ',
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
    title: ' Found match',
    text: 'Good new we Found someone who matching you',
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
  },
  {
    key: 's4',
    title: 'Got new Love',
    text: ' Your not lonly anymore',
    image: {
      uri: 'https://imgur.com/f1GhQo1.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#FFB7C3',
  }
];