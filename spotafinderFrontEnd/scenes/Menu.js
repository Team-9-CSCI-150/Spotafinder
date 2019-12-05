//This is an example code to show image in a button//
import React, { Component } from 'react';
import NavigatorService from '../navigators/navigator-service';
//import react in our code.
 
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
//import all the components we are going to use.
 
export default class App extends Component<{}> {
  render() {
    return (
      <ImageBackground source={{uri:'https://wallpaperplay.com/walls/full/c/c/1/329974.jpg',}} style={{width: '100%', height: '100%'}}>     
   <View>

   <Image
            //We are showing the Image from online
            source={{
              uri:
                'https://im4.ezgif.com/tmp/ezgif-4-45ca8d9f4568.png',
            }}
            //You can also show the image from you project directory like below
            //source={require('./Images/google-plus.png')}
            //Image Style
            style={styles.New}
          />
  
<View >
          <Image
            //We are showing the Image from online
            source={{
              uri:
                'https://im4.ezgif.com/tmp/ezgif-4-607f3ae6e41d.png',
            }}
            //You can also show the image from you project directory like below
            //source={require('./Images/google-plus.png')}
            //Image Style
            style={styles.Fresno}
          />
          <View style={styles.SeparatorLine} />
          
        </View>

    <View style={styles.MainContainer1}>
      <TouchableOpacity style={styles.MapStyle} activeOpacity={0.5}  onPress = {() => NavigatorService.navigation('Home', {Home: 'Home'})}>
          {/*We can use any component which is used to shows something inside 
             TouchableOpacity. It shows the item inside in horizontal orientation */}
            <Image
            //We are showing the Image from online
              source={{
               uri:
                 'https://i.gifer.com/3Z1H.gif',
             }}
            //You can also show the image from you project directory like below
            //source={require('./Images/facebook.png')}
            //Image Style
              style={styles.ImageIconStyle}
           />
      <View style={styles.SeparatorLine} />
          
           <Text style={styles.TextStyle}> Map </Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.FriendsListStyle} activeOpacity={0.5}  onPress = {() => NavigatorService.navigation('Home', {Home: 'Home'})}>
            <Image
              //We are showing the Image from online
              source={{
                uri:
                  'https://im4.ezgif.com/tmp/ezgif-4-d838b4f750f9.gif',
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
        <TouchableOpacity style={styles.SettingStyle} activeOpacity={0.5}  onPress = {() => NavigatorService.navigation('Home', {Home: 'Home'})}>
          <Image
            //We are showing the Image from online
            source={{
              uri:
                'https://im4.ezgif.com/tmp/ezgif-4-fe34d8f82245.webp',
            }}
            //You can also show the image from you project directory like below
            //source={require('./Images/google-plus.png')}
            //Image Style
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> TWO </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.NewsStyle} activeOpacity={0.5}  onPress = {() => NavigatorService.navigation('Home', {Home: 'Home'})}>
          <Image
            //We are showing the Image from online
            source={{
              uri:
                'https://im4.ezgif.com/tmp/ezgif-4-3bddfa8aa356.gif',
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
 
  </ImageBackground>
    );
  }
}
 
const styles = StyleSheet.create({

  New:{
    padding: 10,
    margin: 5,
    height: 100,
    width: 100,
    resizeMode: 'stretch',
    marginTop:50,
    marginLeft:180,
    alignItems: 'center',
  },
  Fresno: {
    padding: 10,
    margin: 5,
    height: 200,
    width: 430,
    resizeMode: 'stretch',
    marginTop:100,
  },
  //First View----------------------------------
  MainContainer1: {
    position: 'absolute',
    bottom:0,
    left:0,
   // margin:2,
   // margin:20,
    flexDirection: 'row',
   // marginTop: 20,
   //alignItems: 'center',
   //marginRight:300,
    
  },
  MapStyle: {
    flexDirection: 'row',
    //alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
    height: 145,
    width: 190, 
    borderRadius: 5,
    margin: 5,
    marginBottom: 135,
   // marginLeft:20,
    //borderRadius: 5,
   // marginTop: 25,
    //marginLeft:25,
  },
  FriendsListStyle: {
    flexDirection: 'row',
    //alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 145,
    width: 190, 
    borderRadius: 5,
    margin: 5,
    marginBottom: 285,
    marginLeft:7,
   // marginTop:105,
    //borderRadius: 5,
   // marginTop: 25,
   // marginRight:100,
  },
  //---------------------------------------

  //Second View----------------------------
  MainContainer2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    flexDirection: 'row',
      marginTop: 225,
      marginBottom:200,
      //height: 145,
    //width: 190, 
  },
  SettingStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 145,
    width: 190, 
    borderRadius: 5,
    margin: 5,
  },
  NewsStyle: {
    flexDirection: 'row',
    //alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 145,
    width: 190, 
    borderRadius: 5,
    margin: 5,
  },
 
  //-------------------------------------------
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 135,
    width: 178,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 50,
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