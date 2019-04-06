import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHead}>
          <Text style={styles.h1}>{this.props.descricao}</Text>
          <Text style={styles.textAutor}>{this.props.autor}</Text>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>_____________________________________________</Text>
        </View>
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
    marginTop: 100,
    marginBottom: 100,
    marginRight: 20,
    marginLeft: 20,
  },

  containerHead: {
    margin: 15
  },

  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },

  text: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 30,
    margin: 25

  },
  textAutor: {
    fontSize: 16,
  }

});