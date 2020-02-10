import React from 'react';
import { Image, StyleSheet, Text, View, PropTypes } from 'react-native';

export default class ItemBox extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{flex: 1,
                  width: 170,
                  height: 170, borderRadius: 8}}
          source={require('../Untitled.png')}
          //source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
        />
        <Text style={styles.titleText}>{this.props.productName}</Text>
        <Text style={styles.priceAfterText}>Rp{this.props.productPriceAfter}</Text>
        <Text style={styles.discount}>
          <Text style={styles.priceBeforeText}>Rp{this.props.productPriceBefore}</Text>
          <Text style={styles.discountText}> -{this.props.productDiscount}%</Text>
        </Text>
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
    borderRadius: 8,
    borderColor: '#D3D3D3',
    borderWidth: 1
  },
  titleText: {
    fontSize: 16,
    paddingLeft: 4,
    fontWeight: 'bold'
  },
  priceAfterText: {
    fontSize: 16,
    paddingLeft: 4,
    color: '#FF5C49',
    fontWeight: 'bold'
  },
  discount: {
    paddingLeft: 4
  },
  priceBeforeText: {
    color: '#9F9F9F',
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid'
  },
  discountText: {
    color: '#ff0000'
  }
});