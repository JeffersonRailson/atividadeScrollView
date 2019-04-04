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
          {this.props.texto}
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