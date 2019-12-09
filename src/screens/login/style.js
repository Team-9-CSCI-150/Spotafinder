import { StyleSheet } from 'react-native';
import { Window_Width, Window_Height} from '../../utils/constants';

export default styles = StyleSheet.create({
  container: {
    width: Window_Width,
    height: Window_Height,
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    //backgroundColor: '#d1d1d1',
    
},

    // container: {
    //   // flex: 1,
    //   width: Window_Width,
    //   height: Window_Height,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#DCDCDC',
    // },
    icon__content: {
      width: 160,
     height: 160,
     marginTop: Window_Height * 0.15,
      marginBottom: Window_Height * 0.045
  },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#465362",
    },
    loginText: {
      color: 'white',
    }
  });
   