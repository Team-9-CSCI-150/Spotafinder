import { StyleSheet } from 'react-native';
import { Window_Width, Window_Height } from '../../utils/constants';
import { BorderlessButton } from 'react-native-gesture-handler';

export default styles = StyleSheet.create({
    background_size: {
        width: Window_Width,
        height: Window_Height,
        alignItems: 'center'
    },
    profile_size: {
        width: Window_Width * 0.3,
        height: Window_Height * 0.15,
        marginTop: Window_Height * 0.1,
        marginBottom: Window_Height * 0.03,
        borderRadius: 10,
        borderWidth: Window_Width * 0.002
    },
    slider_size: {
        width: Window_Width * 0.9,
        height: Window_Height * 0.3,
        overflow: "hidden",
        borderRadius: Window_Width * 0.05,
        borderWidth: Window_Width * 0.002
    },
    container: {
        width: Window_Width * 0.8,
        height: Window_Height * 0.4,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
        
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button_size: {
        width: Window_Width * 0.3,
        height: Window_Height * 0.15,
        overflow: "hidden",
        borderRadius: Window_Width * 0.04,
    }
});
  

  // New:{
    //   padding: 10,
    //   margin: 5,
    //   height: 100,
    //   width: 100,
    //   resizeMode: 'stretch',
    //   marginTop:50,
    //   marginLeft:180,
    //   alignItems: 'center',
    // },
    // slider:{
    //  // padding: 10,
    //   //margin: 5,
    //   height: 220,
    //   width: 500,
    //   resizeMode: 'stretch',
    //   marginTop:100,
    //   marginBottom:50,
    //   //marginRight:500,
    // },
    // //First View----------------------------------
    // MainContainer1: {
    //   position: 'absolute',
    //   bottom:0,
    //   left:0,
    //  // margin:2,
    //  // margin:20,
    //   flexDirection: 'row',
    //  // marginTop: 20,
    //  //alignItems: 'center',
    //  //marginRight:300,
      
    // },
    // MapStyle: {
    //   flexDirection: 'row',
    //   //alignItems: 'center',
    //   backgroundColor: 'white',
    //   borderWidth: 0.5,
    //   borderColor: 'black',
    //   height: 145,
    //   width: 190, 
    //   borderRadius: 5,
    //   margin: 5,
    //   marginBottom: 135,
    //  // marginLeft:20,
    //   //borderRadius: 5,
    //  // marginTop: 25,
    //   //marginLeft:25,
    // },
    // FriendsListStyle: {
    //   flexDirection: 'row',
    //   //alignItems: 'center',
    //   backgroundColor: 'black',
    //   borderWidth: 0.5,
    //   borderColor: '#fff',
    //   height: 145,
    //   width: 190, 
    //   borderRadius: 5,
    //   margin: 5,
    //   marginBottom: 285,
    //   marginLeft:7,
    //  // marginTop:105,
    //   //borderRadius: 5,
    //  // marginTop: 25,
    //  // marginRight:100,
    // },
    // //---------------------------------------
  
    // //Second View----------------------------
    // MainContainer2: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   margin: 20,
    //   flexDirection: 'row',
    //     marginTop: 225,
    //     marginBottom:200,
    //     //height: 145,
    //   //width: 190, 
    // },
    // SettingStyle: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   backgroundColor: 'black',
    //   borderWidth: 0.5,
    //   borderColor: '#fff',
    //   height: 145,
    //   width: 190, 
    //   borderRadius: 5,
    //   margin: 5,
    // },
    // NewsStyle: {
    //   flexDirection: 'row',
    //   //alignItems: 'center',
    //   backgroundColor: 'black',
    //   borderWidth: 0.5,
    //   borderColor: '#fff',
    //   height: 145,
    //   width: 190, 
    //   borderRadius: 5,
    //   margin: 5,
    // },
   
    // //-------------------------------------------
    // ImageIconStyle: {
    //   padding: 10,
    //   margin: 5,
    //   height: 135,
    //   width: 178,
    //   resizeMode: 'stretch',
    // },
    // TextStyle: {
    //   color: '#fff',
    //   marginBottom: 4,
    //   marginRight: 50,
    // },
    // SeparatorLine: {
    //   backgroundColor: '#fff',
    //   width: 1,
    //   height: 40,
    // },
    // title: {
    //   fontSize: 26,
    //   color: '#fff',
    //   fontWeight: 'bold',
    //   textAlign: 'center',
    //   marginTop: 20,
    // },
    // text: {
    //   color: '#fff',
    //   fontSize: 20,
    // },
    // image: {
    //   width: 200,
    //   height: 200,
    //   resizeMode: 'contain'
    // },
  
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