import { StyleSheet } from 'react-native';
import { Window_Width, Window_Height} from '../../utils/constants';

export default styles = StyleSheet.create({
    //container for screen
    container: {
        //width: Window_Width,
        //height: Window_Height,
        flex: 1,
        backgroundColor: 'white',
        //alignItems: 'center',
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
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },

    back_text: {
        fontSize: 10,
        textDecorationLine: 'underline',
    },

    //Search Bar
    search_bar: {
        width: Window_Width * 0.45,
        height: Window_Height * 0.05,
        borderRadius: 15,
        backgroundColor: 'pink'
    },

    //Building Place Holder
    building_cont: {
        width: Window_Width * .90,
        height: 90,
        borderRadius: 15, 
        backgroundColor: 'pink',
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});