import React from 'react';
import { Image, StyleSheet, Text, View, PropTypes } from 'react-native';

export default class Promotions extends React.Component {
  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.props.colour}]}>
        <Text style={styles.titleText}>{this.props.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 320,
    height: 150,
    margin: 4,
    alignSelf: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  }
});