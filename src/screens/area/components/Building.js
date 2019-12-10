import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native'

import Style from '../style';

export default function Building(prop) {
    return (
        <TouchableOpacity style = {{alignItems: 'center'}}>
            <View style = {Style.building_cont}>
                <Text style = {{color: 'white'}}>
                    {prop.name}: {prop.occupany}
                </Text>
            </View>
        </TouchableOpacity>
    );
}