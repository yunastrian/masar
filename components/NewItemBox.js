import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colours from '../constants/Colours';

export class NewItemBox extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={styles.containerImage}
          source={this.props.itemImage}
        />
        <Text style={styles.titleText}>{this.props.productName}</Text>
        <Text style={styles.priceText, styles.text}>Rp{this.props.productPrice}</Text>
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
  priceText: {
    color: Colours.lightRed
  },
  text: {
    fontSize: 10
  }
});