import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Input } from './components/Input' ;

export default function App() {
  state = {
    email: '',
    password: ''
  }


  componentWillMount(){
    const firebaseConfig = {
      apiKey: 'AIzaSyAXVNY8iNj1XQHfoBgJMdwjEItbt4n2I5s',
      authDomain:'spotafinder.firebaseapp.com',    
  }
  firebase.initializeApp(firebaseConfig);
}
  render(){
  return (
    <View style={styles.container}>
      <Input
      placeholder='Enter your email...',
      label='Email'
      onChangeText={email => this.setState({ email })}
      value={this.state.email}
      />

<Input
      placeholder='Enter your password...',
      label='Password'
      secureTextEntry
      onChangeText={password => this.setState({ password })}
      value={this.state.password}
      
      />
    
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
