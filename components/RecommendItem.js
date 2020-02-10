import React from 'react';
import { Image, StyleSheet, Text, View, PropTypes } from 'react-native';

export default class RecommendItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 30,
                  height: 30}}
          source={require('../Untitled.png')}
        />
        <Text style={styles.titleText}>{this.props.recommendName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 2,
    marginVertical: 4,
    paddingBottom: 4,
    backgroundColor: '#fff',
    width: 116,
    justifyContent: 'center',
    alignItems: 'center',
    height: 116,
    borderRadius: 4,
    borderColor: '#D3D3D3',
    borderWidth: 1
  },
  titleText: {
    fontSize: 16,
    paddingTop: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});