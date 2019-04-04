import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Aprendendo React</Text>
        <Text style={styles.textAutor}>Jefferson Railson </Text>
        <View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      margin: 15,
      
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 15,
        
      },
    h1: {
        fontSize: 20,
        margin: 20,
        fontWeight: 'bold',
        color: 'orange'
    },
    text:{
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    
    },
    textAutor:{
        fontSize: 20,
        margin: 10,
        textDecorationLine: 'underline'
        
    
    }

});