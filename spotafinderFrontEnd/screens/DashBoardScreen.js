import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";


class DashBoardScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Dashboard</Text>
            </View>
        );
    }
}
export default DashBoardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});