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
    
    //second container
    second_cotainer: {
        width: Window_Width * .90,
        height: Window_Height * .9,
        backgroundColor: '#E2E2E2',
        //backgroundColor: 'white',
        //alignItems: 'center',
    },

    //cancel or done layout
    cancel_done: {
        //backgroundColor: 'pink',
        //flex: 1,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        backgroundColor: '#BCF4F5'
    },

    logOut: {
        width: Window_Width * 0.60,
        height: Window_Height * 0.06,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
});