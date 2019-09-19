import { StyleSheet, Dimensions } from 'react-native';

let window_width  = Dimensions.get('window').width;
let window_height = Dimensions.get('window').height;


export default styles = StyleSheet.create({
    center: {
        width: window_width,
        height: window_height,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
