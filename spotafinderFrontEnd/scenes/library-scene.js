import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import NavigatorService from '../navigators/navigator-service';


export default function Libary() {

    return (
        <View > 
            <Button 
                title = "Library"
                color = "blue"
                height= "10px"
                onPress = {() => NavigatorService.navigation('Home', {Home: 'Home'})}
                
            />

        <View style={styles.libraryFloors}>

   
           <Button className="Button"
            title = "Floor One"
            color = "red"
            flexDirection = "row"
            >
           
           </Button>

        <Button 
            title = "Floor Two"
            color = "red"

           />

        <Button 
            title = "Floor Three"
            color = "red"

           />
    </View>
    </View>

            
        
    );

    
}

const styles = StyleSheet.create({
    libraryFloors: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

});
