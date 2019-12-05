//This is an example code to show image in a button//
import React, { Component } from 'react';
//import react in our code.
 
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
//import all the components we are going to use.
 
export default class App extends Component<{}> {
  render() {
    return (
   <View>
    <View style={styles.MainContainer1}>
      <TouchableOpacity style={styles.MapStyle} activeOpacity={0.5}>
          {/*We can use any component which is used to shows something inside 
             TouchableOpacity. It shows the item inside in horizontal orientation */}
            <Image
            //We are showing the Image from online
              source={{
               uri:
                 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
             }}
            //You can also show the image from you project directory like below
            //source={require('./Images/facebook.png')}
            //Image Style
              style={styles.ImageIconStyle}
           />
      <View style={styles.SeparatorLine} />
          
           <Text style={styles.TextStyle}> ONE </Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.FriendsListStyle} activeOpacity={0.5}>
            <Image
              //We are showing the Image from online
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
              }}
             //You can also show the image from you project directory like below
             //source={require('./Images/google-plus.png')}
             //Image Style
              style={styles.ImageIconStyle}
             />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> ONE </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.MainContainer2}>
        <TouchableOpacity style={styles.SettingStyle} activeOpacity={0.5}>
          <Image
            //We are showing the Image from online
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
            }}
            //You can also show the image from you project directory like below
            //source={require('./Images/google-plus.png')}
            //Image Style
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> TWO </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.NewsStyle} activeOpacity={0.5}>
          <Image
            //We are showing the Image from online
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
            }}
            //You can also show the image from you project directory like below
            //source={require('./Images/google-plus.png')}
            //Image Style
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> TWO </Text>
        </TouchableOpacity>
      </View>
  </View>
      
    );
  }
}
 
const styles = StyleSheet.create({
  //First View----------------------------------
  MainContainer1: {
    position: 'absolute',
    bottom:0,
    left:0,
    
    flexDirection: 'row',
   // marginTop: 20,
    
  },
  MapStyle: {
    flexDirection: 'row',
    //alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 200,
    width: 200, 
    borderRadius: 5,
    margin: 5,
  },
  FriendsListStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 200,
    width: 200,
    borderRadius: 5,
    margin: 5,
  },
  //---------------------------------------

  //Second View----------------------------
  MainContainer2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    flexDirection: 'row',
  },
  SettingStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 200,
    width: 200, 
    borderRadius: 5,
    margin: 5,
  },
  NewsStyle: {
    flexDirection: 'row',
    //alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 200,
    width: 200, 
    borderRadius: 5,
    margin: 5,
  },
 
  //-------------------------------------------
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 100,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 20,
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom:0,
    left:0,
    alignContent: 'stretch',
    borderWidth: 1,
    margin: 10,
    width:  400,
   
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 40,
    marginVertical: 2,
    marginHorizontal: 2,
    marginVertical: 5,
    paddingTop: 10,
    
  },
  title: {
    fontSize: 32,
  },
  /*circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: 'red'
},

});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  }
});
*/