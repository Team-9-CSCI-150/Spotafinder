import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
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