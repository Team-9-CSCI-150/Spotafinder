import { StyleSheet } from 'react-native';
import { Window_Width, Window_Height} from '../../utils/constants';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2D2D2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    // second_cotainer: {
    //     width: Window_Width * .90,
    //     height: Window_Height * .9,
    //     backgroundColor: '#E2E2E2',
    //     alignItems: 'center',
    //     //shadowColor: 'black',
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 8,
    //     },
    //     shadowOpacity: 0.44,
    //     shadowRadius: 10.32,
    //     elevation: 16,
    // },

    icon_content: {
        width: 160,
        height: 160,
        marginTop: Window_Height * 0.005,
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
});