import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Button, Image, Text } from 'react-native';
import { Window_Width, Window_Height, Icon } from '../style';

import NavigatorService from '../navigators/navigator-service';
import { ScrollView } from 'react-native';

export default function Map(){

    return(
        //Conatiner of page has flex 1 to fill the whole display
        <ScrollView style = {styles.container}>
            {/*Fresno State Title*/}
            <Text style = {styles.map_txt}>
                Fresno State
            </Text>
            <View style = {styles.shortcuts}>
                <View style = {styles.back_button}>
                {/*Back Button*/}
                <Button
                    title = 'Back'
                />
                </View>
                {/*Search Bar*/}
                <TextInput
                    style = {styles.search_bar}
                    placeholder = 'Search'
                    //onChangeText = {userName => inputName(userName)}
                    textAlign = 'center'
                />
            </View>
            {/*Second Container; Buildings in this container
            <ScrollView contentContainerStyle = {styles.second_container}>
            */}
            <View style = {{alignItems: 'center'}}> 
                <View style = {styles.building_cont}>
                    <Text>
                        Library
                    </Text>
                </View>
                <View style = {styles.building_cont}>
                    <Text>
                        Engineering East
                    </Text>
                </View>
                <View style = {styles.building_cont}>
                    <Text>
                        Engineering West
                    </Text>
                </View>
                <View style = {styles.building_cont}>
                    <Text>
                        IT
                    </Text>
                </View>
                <View style = {styles.building_cont}>
                    <Text>
                        McKee Fisk
                    </Text>
                </View>
                <View style = {styles.building_cont}>
                    <Text>
                        McKee Fisk
                    </Text>
                </View>
                <View style = {styles.building_cont}>
                    <Text>
                        McKee Fisk
                    </Text>
                </View>
                <View style = {styles.building_cont}>
                    <Text>
                        McKee Fisk
                    </Text>
                </View>
            </View>
            {/* 
            </ScrollView>
            */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
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
        //backgroundColor: 'pink',
        //flex: 1,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    back_button: {
        width: 50,
        height: Window_Height * .05,
        //borderRadius: 15,
        backgroundColor: 'pink',
        textAlign: 'center',
    },

    //Search Bar
    search_bar: {
        width: Window_Width * 0.45,
        height: Window_Height * 0.05,
        //marginTop: Window_Height * 0.005,
        //marginBottom: Window_Height * 0.030,
        //paddingTop: 10,
        borderRadius: 15,
        backgroundColor: 'pink'
        //backgroundColor: 'white'
    },
    //second container; NOT USING
    second_container: {
        backgroundColor: 'pink',
        //width: Window_Width * .80,
        //height: Window_Height * .80,
        //marginTop: 24,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10, 
        marginBottom: 40,
        padding: 10, 
        //paddingLeft: 10,
        //paddingRight: 10,
        flex: 1,
        alignItems: 'center',
        //By deafault the direction is set to column
        flexDirection: 'column',
        overflow: 'scroll',
    },

    //Building Place Holder
    building_cont: {
        width: Window_Width * .90,
        height: 90,
        borderRadius: 15, 
        backgroundColor: 'pink',
        marginBottom: 25,
    },

    /*
    room_container: {
        width: 300,
        height: 500,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginTop: 48,
    },
    */
});
