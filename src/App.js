import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import Post from "./Post";

export default class App extends React.Component {


  render() {
    return (
      <ScrollView style={styles.container}>
        <Post/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  contentContainer: {
    paddingVertical: 20
  }
});
