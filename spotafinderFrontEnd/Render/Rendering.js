/*import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Input } from './components/Input' ;
import { Button } from './components/Button';

class Rendering extends Component {
state = {
    email: '',
    password: '', 
    authenticating:false,
  }


  UNSAFE_componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAXVNY8iNj1XQHfoBgJMdwjEItbt4n2I5s',
      authDomain:'spotafinder.firebaseapp.com',    
  }

  firebase.initializeApp(firebaseConfig);
}

onPressSignIn(){
  this.setState({
    authenticating:true,
  });
}

renderCurrentState() {
  if(this.state.authenticating) {
    return(
    <View style={styles.form}>
      <ActivityIndicator size='large'/>
    </View>
    )
}
return(
  <View style={styles.form}>
  <Input
  placeholder='Enter your email...'
  label='Email'
  onChangeText={email => this.setState({ email })}
  value={this.state.email}
  /> 
 

<Input
  placeholder='Enter your password...'
  label='Password'
  secureTextEntry
  onChangeText={password => this.setState({ password })}
  value={this.state.password}
  
  />

<Button onPress={() => this.onPressSignIn()}> Log In </Button>
</View>
)
  } 
  

  render() {
    return (
      <View style={styles.container}>
      {this.renderCurrentState()}
      </View>
     );
  }
export default Rendering
  

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
  */