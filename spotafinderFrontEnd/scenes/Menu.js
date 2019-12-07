//This is an example code to show image in a button//
import React, { Component } from 'react';
import NavigatorService from '../navigators/navigator-service';
//import AppIntroSlider from 'react-native-app-intro-slider';
//import react in our code.
 
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
//import all the components we are going to use.
//import { SliderBox } from 'react-native-image-slider-box';
import TimedSlideshow from 'react-native-timed-slideshow';
export default class menu extends Component {

  render() {
    const items = [
      {
          uri: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Fresno_State_Bulldogs_logo.svg/1280px-Fresno_State_Bulldogs_logo.svg.png",
          title: "SHPE",
          text: "Society Hispanic Professional Engineering",
      },
      {
          uri: "http://blog.adrenaline-hunter.com/wp-content/uploads/2018/05/bungee-jumping-barcelona-1680x980.jpg",
          title: "SASE",
          text: "Society of Asian Engineers",
          duration: 4000
      },
      {
          uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
          title: "Mary Gomes",
          text: "Alps",
          //fullWidth: true
      }
  ];
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
  
  <View style={styles.slider}>
        <TimedSlideshow
        
            items={items}
           titleStyle={ {fontSize: 10} }
           textStyle={ {fontSize: 10} }
            footerStyle = {{backgroundColor: (0,0,0,0)}} // rgba   a= opacity
            showProgressBar={false}
            renderCloseIcon={() => {return true}}
            //extraSpacing={0}
           renderIcon={() => {return true}}
           //fullWidth={true}

        />
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
  slider:{
   // padding: 10,
    //margin: 5,
    height: 220,
    width: 500,
    resizeMode: 'stretch',
    marginTop:100,
    marginBottom:50,
    //marginRight:500,
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