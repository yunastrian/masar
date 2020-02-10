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
      <View>
        <Image 
          style={styles.containerImage}
          source={require(this.props.urlImage)}
        />
        <View>
          <Text style={styles.titleText}>{this.props.productName}</Text>
          <Text>
            <Text style={styles.priceText, styles.text}>{CurrencyFormat(this.props.productPrice)}</Text>
            <Text style={styles.text}>x {this.props.productAmount}</Text> 
          </Text>
          <Text style={styles.priceText, styles.text}>{CurrencyFormat(this.props.subPrice)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerBar: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    height: 50
  },
  containerImage: {
    height: 50, 
    aspectRatio: 1,
    style: 'contain'
  },
  containerText: {
    height: 50
  },
  priceText: {
    color: Colors.lightRed
  },
  text: {
    fontSize: 10
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
});