import React from 'react';
import { View, Text, Image, Button,StyleSheet,ScrollView } from 'react-native';


export default class menu extends React.Component {
   render() {
   return (
     <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.headText}>Header</Text>
       </View>
       <ScrollView style={styles.content}>
         <Button title="Awesome Button" />
         </ScrollView>
       <View style={styles.footer}>
         <Text style={styles.footerText}>I am the footer</Text>
       </View>
     </View>
   );
 }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  header: {
    backgroundColor: "#c0392b",
    height: 60,
    paddingTop: 10,
    

  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  },
  content: {
    backgroundColor: "white",
    padding: 20,
  },
  footer: {
    backgroundColor: "#c0392b",
    height: 70
  },
  footerText: {
    color: "#fff",
    fontSize: 16
  }
 });
