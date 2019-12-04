import { StyleSheet } from 'react-native';
import { Window_Width, Window_Height } from '../../utils/constants'

export default style = StyleSheet.create({
    size: {
        width: Window_Width * 0.30,
        height: Window_Height * 0.16, 
        backgroundColor: 'red',
        borderRadius: 5,
        margin: 5,
    },
    direction: {
        flexDirection: "row",
    },
    bar: {
        width: Window_Width * .90,
        height: 90,
        borderRadius: 15, 
        backgroundColor: 'pink',
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
});