import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colours from '../constants/Colours';

export class ItemBox extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={styles.containerImage}
          source={this.props.itemImage}
        />
        <Text style={styles.titleText}>{this.props.productName}</Text>
        <Text style={styles.priceAfterText, styles.text}>Rp{this.props.productPriceAfter}</Text>
        <Text>
          <Text style={styles.priceBeforeText}>Rp{this.props.productPriceBefore}</Text>
          <Text style={styles.discountText}>{this.props.productDiscount}%</Text>
        </Text>
        <Image
          style={styles.starImage}
          source={this.props.starImage}
        />
        <Image
          style={styles.favouriteImage}
          source={this.props.favourite}
        />
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  containerImage: {
    height: 100, 
    aspectRatio: 1,
    style: 'contain'
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  priceAfterText: {
    color: Colours.lightRed
  },
  priceBeforeText: {
    color: Colours.grey
  },
  discountText: {
    color: '#ff0000'
  },
  text: {
    fontSize: 10
  },
  starImage: {
    height: 20, 
    aspectRatio: 1,
  },
  favouriteImage: {
    height: 20, 
    aspectRatio: 1,
  }
});