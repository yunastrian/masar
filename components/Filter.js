import React from 'react';
import { Image, StyleSheet, Text, View, PropTypes } from 'react-native';

export default class Filter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{this.props.itemFilter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 4,
    paddingBottom: 2,
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#1A6FBF'
  },
  titleText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 2
  }
});