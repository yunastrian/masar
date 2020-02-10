import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../constants/Colors';
import { CurrencyFormat } from '../utils/Format';

export default class PurchaseDetailBar extends React.Component {
  render() {
    return (
      <View style={styles.containerBar}>
        <Image 
          style={styles.containerImage}
          // source={{uri: this.props.urlImage}}
          source={require('../assets/images/bri.png')}
        />
        <View style={styles.containerText}>
          <Text style={styles.titleText}>{this.props.productName}</Text>
          <Text style={styles.text}>
            <Text style={styles.priceText}>{CurrencyFormat(this.props.productPrice)}</Text>
            <Text> x {this.props.productAmount}</Text> 
          </Text>
          <Text style={[styles.priceText, styles.text]}>{CurrencyFormat(this.props.subPrice)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerBar: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    flex: 1,
    padding: 5
  },
  containerImage: {
    height: 80, 
    width: 80, 
    resizeMode: 'contain',
    marginRight: 10
  },
  containerText: {
    flex: 1
  },
  priceText: {
    color: Colors.lightRed
  },
  text: {
    fontSize: 14,
    alignSelf: 'flex-end'
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
});