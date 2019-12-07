import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    ImageBackground 
} from 'react-native';

import React, { Component } from 'react';
import TimeSlideShow from 'react-native-timed-slideshow';
import Style from './style'
import Router from '../../navigator/router';


export default class Home extends Component {

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
              style={Style.New}
            />
    
    <View style={Style.slider}>
          <TimeSlideShow
          
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
  
      <View style={Style.MainContainer1}>
        <TouchableOpacity Style={styles.MapStyle} activeOpacity={0.5}  onPress = {() => NavigatorService.navigation('Home', {Home: 'Home'})}>
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
                style={Style.ImageIconStyle}
             />
        <View style={Style.SeparatorLine} />
            
             <Text style={Style.TextStyle}> Map </Text>
        </TouchableOpacity>
  
         <TouchableOpacity style={Style.FriendsListStyle} activeOpacity={0.5}  onPress = {() => NavigatorService.navigation('Home', {Home: 'Home'})}>
              <Image
                //We are showing the Image from online
                source={{
                  uri:
                    'https://im4.ezgif.com/tmp/ezgif-4-d838b4f750f9.gif',
                }}
               //You can also show the image from you project directory like below
               //source={require('./Images/google-plus.png')}
               //Image Style
                style={Style.ImageIconStyle}
               />
            <View style={Style.SeparatorLine} />
            <Text style={Style.TextStyle}> ONE </Text>
          </TouchableOpacity>
  
        </View>
  
        
  
        <View style={Style.MainContainer2}>
          <TouchableOpacity style={Style.SettingStyle} activeOpacity={0.5}  onPress = {() => NavigatorService.navigation('Home', {Home: 'Home'})}>
            <Image
              //We are showing the Image from online
              source={{
                uri:
                  'https://im4.ezgif.com/tmp/ezgif-4-fe34d8f82245.webp',
              }}
              //You can also show the image from you project directory like below
              //source={require('./Images/google-plus.png')}
              //Image Style
              style={Style.ImageIconStyle}
            />
            
            <Text style={Style.TextStyle}> TWO </Text>
          </TouchableOpacity>
  
          <TouchableOpacity Style={styles.NewsStyle} activeOpacity={0.5}  onPress = {() => NavigatorService.navigation('Home', {Home: 'Home'})}>
            <Image
              //We are showing the Image from online
              source={{
                uri:
                  'https://im4.ezgif.com/tmp/ezgif-4-3bddfa8aa356.gif',
              }}
             
              //You can also show the image from you project directory like below
              //source={require('./Images/google-plus.png')}
              //Image Style
              style={Style.ImageIconStyle}
            />
            
            <Text style={Style.TextStyle}> TWO </Text>
          </TouchableOpacity>
        </View>
    </View>
   
    </ImageBackground>
      );
    }
  }