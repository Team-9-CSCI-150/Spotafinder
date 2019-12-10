import { StyleSheet } from 'react-native';
import { Window_Width, Window_Height} from '../../utils/constants';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2D2D2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    second_cotainer: {
        width: Window_Width * .90,
        height: Window_Height * 0.9,
        backgroundColor: '#E2E2E2',
        alignItems: 'center',
    },

    icon_content: {
        width: 160,
        height: 160,
        marginTop: Window_Height * 0.05,
        marginBottom: Window_Height * 0.05,
    },

    fl_container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: Window_Width * .90,
        //justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: 3,
        paddingRight: 3 
    },

    small_content: {
        width: Window_Width * 0.40,
        height: Window_Height * 0.05,
        marginTop: Window_Height * 0.005,
        marginBottom: Window_Height * 0.030,
        borderRadius: 15,
        //backgroundColor: '#ABA194',
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    large_content: {
        width: Window_Width * 0.83,
        height: Window_Height * 0.05,
        marginTop: Window_Height * 0.005,
        marginBottom: Window_Height * 0.030,
        borderRadius: 15,
        backgroundColor: 'white',
        //backgroundColor: '#c41230',
        //backgroundColor: '#F9DC5C',
        flexDirection: 'row',
    },

    confirm_button: {
        width: Window_Width * 0.40,
        height: Window_Height * 0.05,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: '#465362'
        //backgroundColor: '#F9DC5C',
    },
    // container: {
    //     width: Window_Width,
    //     height: Window_Height,
    //     alignItems: 'center',
    //     backgroundColor: 'white',
    //     //backgroundColor: '#d1d1d1',
        
    // },

    // registration_txt: {
    //     fontSize: 20
    // },

    // text_container: {
    //     width: Window_Width * 0.80,
    //     height: Window_Height * 0.45,
    //     backgroundColor: '#223954',
    //     alignItems: 'center',
    //     paddingTop: 13,
    //     borderWidth: 5,
    //     borderRadius: 10,
    //     borderColor: '#21364d',
    // },

    // confirm_button: {
    //     width: Window_Width * 0.45,
    //     height: Window_Height * 0.05,
    //     marginTop: 20,
    //     borderRadius: 15,
    //     backgroundColor: 'pink'
    // },

    // icon_content: {
    //     width: 160,
    //     height: 160,
    //     marginTop: Window_Height * 0.15,
    //     marginBottom: Window_Height * 0.045
    // },

    // user_content: {
    //     width: Window_Width * 0.45,
    //     height: Window_Height * 0.05,
    //     marginTop: Window_Height * 0.005,
    //     marginBottom: Window_Height * 0.030,
    //     //paddingTop: 10,
    //     borderRadius: 15,
    //     backgroundColor: '#BCF4F5'
    //     //backgroundColor: 'white'
    // }
});