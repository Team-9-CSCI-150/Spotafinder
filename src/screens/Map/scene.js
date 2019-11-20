import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
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
                        Science 1
                    </Text>
                </View>
                <View style = {styles.building_cont}>
                    <Text>
                        Science 2
                    </Text>
                </View>
                <View style = {styles.building_cont}>
                    <Text>
                        Food Court
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}