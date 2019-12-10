import React, { Component } from 'react';
import { View, Text } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import Router from '../../navigator/router';
import Style from './style'
export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_App: false
    };
  }

  onDone = () => {
    this.setState(() => Router.navigation('Register', {Register: 'Register'}));
    ///this.setState(<Router component ={Home} title="Home" initial = {true} /> );
  };

  onSkip = () => {
    this.setState(() => Router.navigation('Login', {Login: 'Login'}));
  };

  /*onLogin = () => {
    this.setState(() => NavigatorService.navigation('Login', {Login: 'Login'}));
  };
  */
  

  render() {
    if (this.state.show_App) {
      return (
        <View style={Style.mainapp}>

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

const slides = [
    {
      key: 's1',
      title: 'SpotaFinder',
      text: 'An app that allows you to find free space to hang out, study or eat. If you are already registered press skip.',
      image: {
        uri:
          'https://cdn.discordapp.com/attachments/653412026416103444/653825645075497001/446075.png',
      },
      titleStyle: Style.title,
      textStyle: Style.text,
      imageStyle: Style.image,
      backgroundColor: '#E2E2E2',
    },
    {
      key: 's2',
      title: ' How to use the app',
      text: 'Click on the map to see if your point of intrest is busy there or not',
      image: {
        uri:
          'https://cdn.discordapp.com/attachments/653412026416103444/653822177489059841/customer-support.png',
      },
      titleStyle: Style.title,
      textStyle: Style.text,
      imageStyle: Style.image,
      backgroundColor:'#FFC17A',
    },
    {
      key: 's3',
      title: 'Ready to Register',
      text: 'Press done when you are ready to register',
      image: {
        uri: 'https://cdn.discordapp.com/attachments/653412026416103444/653822128608509973/approval.png',
      },
      titleStyle: Style.title,
      textStyle: Style.text,
      imageStyle: Style.image,
      backgroundColor: 	'#E2E2E2',
    } 
  ];