import { StyleSheet } from 'react-native';
import { Window_Width, Window_Height} from '../../utils/constants';

export default styles = StyleSheet.create({
    container: {
        width: Window_Width,
        height: Window_Height,
        alignItems: 'center',
        backgroundColor: 'white',
        //backgroundColor: '#d1d1d1',
        
    },

    registration_txt: {
        fontSize: 20
    },

    text_container: {
        width: Window_Width * 0.80,
        height: Window_Height * 0.45,
        backgroundColor: '#223954',
        alignItems: 'center',
        paddingTop: 13,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: '#21364d',
    },

    confirm_button: {
        width: Window_Width * 0.45,
        height: Window_Height * 0.05,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: 'pink'
    },

    icon_content: {
        width: 160,
        height: 160,
        marginTop: Window_Height * 0.15,
        marginBottom: Window_Height * 0.045
    },

    user_content: {
        width: Window_Width * 0.45,
        height: Window_Height * 0.05,
        marginTop: Window_Height * 0.005,
        marginBottom: Window_Height * 0.030,
        //paddingTop: 10,
        borderRadius: 15,
        backgroundColor: '#BCF4F5'
        //backgroundColor: 'white'
    }
});