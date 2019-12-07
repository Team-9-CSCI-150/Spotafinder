import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
import TimedSlideshow from 'react-native-timed-slideshow';
 
export default class App extends Component {
  render() {
    const items = [
        {
            uri: "http://www.lovethemountains.co.uk/wp-content/uploads/2017/05/New-Outdoor-Sports-and-Music-Festival-For-Wales-4.jpg",
            title: "Michael Malik",
            text: "Minnesota, USA",
        },
        {
            uri: "http://blog.adrenaline-hunter.com/wp-content/uploads/2018/05/bungee-jumping-barcelona-1680x980.jpg",
            title: "Victor Fallon",
            text: "Val di Sole, Italy",
            duration: 4000
        },
        {
            uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
            title: "Mary Gomes",
            text: "Alps",
            fullWidth: true
        }
    ];

    return (
      <View style={styles.slider}>
        <TimedSlideshow
        
            items={items}
            titleStyle={ {fontSize: 5} }
            textStyle={ {fontSize: 5} }
            showProgressBar={false}
            renderCloseIcon={() => {return true}}

        />
        </View>
    );
}
}

const styles = StyleSheet.create({
slider:{
  padding: 10,
  margin: 5,
  height: 200,
  width: 430,
  resizeMode: 'stretch',
  marginTop:100,
},
title: {
  fontSize: 5,
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 20,
},
});

