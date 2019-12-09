import { StyleSheet } from 'react-native';
import { Window_Width, Window_Height} from '../../utils/constants';

export default styles = StyleSheet.create({
    //container for screen
    // container: {
    //     //width: Window_Width,
    //     //height: Window_Height,
    //     flex: 1,
    //     backgroundColor: 'white',
    //     //alignItems: 'center',
    // },
    container: {
        flex: 1,
        //backgroundColor: '#D2D2D2',
        backgroundColor: '#E2E2E2',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    
    second_cotainer: {
        width: Window_Width * .90,
        height: Window_Height * .9,
        backgroundColor: '#E2E2E2',
        alignItems: 'center',
        //shadowColor: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    
    //fresno state text
    map_txt: {
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        paddingTop: 60,
        fontWeight: 'bold',
        //textDecorationLine: 'underline',
    },

    //Search Bar, Back button Flex
    shortcuts: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    //Back Button
    back_button: {
        width: 70,
        height: Window_Height * .05,
        borderRadius: 15,
        // backgroundColor: '#465362',
        backgroundColor: '#D65821',
        alignItems: 'center',
        justifyContent: 'center',
    },

    back_text: {
        fontSize: 10,
        //textDecorationLine: 'underline',
    },

    //Search Bar
    search_bar: {
        width: Window_Width * 0.45,
        height: Window_Height * 0.05,
        borderRadius: 15,
        backgroundColor: 'white'
    },

    //Building Place Holder
    building_cont: {
        width: Window_Width * .90,
        height: 90,
        borderRadius: 15, 
        // backgroundColor: '#D65821',
        backgroundColor: '#465362',
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});