import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Window_Width, Window_Height }    from '../constant';

import React   from 'react';
import Service from '../navigator-service';

export default function Home() {
    return (
        <TouchableOpacity
            style = {styles.size}
        />
    );
}


const styles = StyleSheet.create({
    size: {
        width: Window_Width * 0.30,
        height: Window_Height * 0.16, 
        backgroundColor: 'red',
        borderRadius: 5,
    },
});