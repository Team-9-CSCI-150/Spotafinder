import { StyleSheet, Image } from 'react-native';

import { Window_Width, Window_Height } from '../../utils/constants';

export default styles = StyleSheet.create({
    //container for screen
    container: {
        flex: 1,
        backgroundColor: '#D2D2D2',
        //backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    map_txt: {
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        paddingTop: 60,
        fontWeight: 'bold',
        //textDecorationLine: 'underline',
    },

    //cancel or done layout
    cancel_done: {
        //backgroundColor: 'pink',
        //flex: 1,
        margin: 10,
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

    //third container
    third_container: {
        flex: 1,
        alignItems: 'center',
    },

    //settings container
    settings_cont: {
        width: Window_Width * .50,
        height: 60,
        alignContent: 'center',
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },

    //settings text
    settings_txt: {
        textAlign: 'center',
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },

    //fourth container
    fourth_container: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
    },

    //text for profile and notifications
    topic_txt: {
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 15,
    },

    user_content: {
        width: Window_Width * 0.60,
        height: Window_Height * 0.05,
        marginTop: Window_Height * 0.005,
        marginBottom: Window_Height * 0.030,
        borderRadius: 15,
        backgroundColor: 'white'
    },

    logOut: {
        width: Window_Width * 0.40,
        height: Window_Height * 0.05,
        marginBottom: Window_Height * 0.030,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
});