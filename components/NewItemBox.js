import React from 'react';
import { Image, StyleSheet, Text, View, PropTypes } from 'react-native';
import Colors from '../constants/Colors';
import { CurrencyFormat } from '../utils/Format';

export default class NewItemBox extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{flex: 1,
                  width: 140,
                  height: 140, borderRadius: 8}}
          source={require('../Untitled.png')}
        />
        <Text style={styles.titleText}>{this.props.productName}</Text>
        <Text style={styles.priceAfterText}>{CurrencyFormat(this.props.productPriceAfter)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 8,
    marginVertical: 4,
    paddingBottom: 2,
    backgroundColor: '#fff',
    width: 140,
    borderRadius: 8,
    borderColor: '#D3D3D3',
    borderWidth: 1
  },
  titleText: {
    fontSize: 16,
    paddingTop: 4,
    paddingLeft: 4,
    paddingRight: 4,
    fontWeight: 'bold'
  },
  priceAfterText: {
    fontSize: 16,
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 4,
    color: '#FF5C49',
    fontWeight: 'bold'
  }
});