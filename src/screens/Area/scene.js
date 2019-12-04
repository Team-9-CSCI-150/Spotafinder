import { 
    View, 
    TextInput, 
    Button, 
    Text, 
    ScrollView 
} from 'react-native';

import React from './node_modules/react';
import Style from './style';

export default function Area(){
    return(
        <ScrollView style = {Style.container}>
            {/*Fresno State Title*/}
            <Text style = {Style.map_txt}>
                Fresno State
            </Text>
            <View style = {Style.shortcuts}>
                <View style = {Style.back_button}>
                {/*Back Button*/}
                <Button
                    title = 'Back'
                    onPress = {() => NavigatorService.navigation('Library', {Library: 'Library'})}
                />
                </View>
                {/*Search Bar*/}
                <TextInput
                    style = {Style.search_bar}
                    placeholder = 'Search'
                    //onChangeText = {userName => inputName(userName)}
                    textAlign = 'center'
                />
            </View>
            <View style = {{alignItems: 'center'}}> 
                <View style = {Style.building_cont}>
                    <Text>
                        Library
                    </Text>
                </View>
                <View style = {Style.building_cont}>
                    <Text>
                        Engineering East
                    </Text>
                </View>
                <View style = {Style.building_cont}>
                    <Text>
                        Engineering West
                    </Text>
                </View>
                <View style = {Style.building_cont}>
                    <Text>
                        IT
                    </Text>
                </View>
                <View style = {Style.building_cont}>
                    <Text>
                        McKee Fisk
                    </Text>
                </View>
                <View style = {Style.building_cont}>
                    <Text>
                        Science 1
                    </Text>
                </View>
                <View style = {Style.building_cont}>
                    <Text>
                        Science 2
                    </Text>
                </View>
                <View style = {Style.building_cont}>
                    <Text>
                        Food Court
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}