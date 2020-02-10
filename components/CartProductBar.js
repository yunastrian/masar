import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../constants/Colors';
import { CurrencyFormat } from '../utils/Format';

export default class CartProductBar extends React.Component {
  render() {
    return (
      <View style={styles.containerBar}>
        <Image 
          style={styles.containerImage}
          source={require('../assets/images/bri.png')}
        />
        <View style={{flex: 1}}>
          <Text style={styles.titleText}>{this.props.name}</Text>
          <Text style={[styles.priceText, styles.text]}>{CurrencyFormat(this.props.price)}</Text>
          <View style={styles.miniButtonContainer}>
            <Ionicons 
              name={'md-trash'}
              style={styles.icon}
              size={30}
              onPress={() => this.props.onPressDelete(this.props.id)}
            />
            <Ionicons 
              name={'md-remove-circle'} 
              style={styles.icon} 
              size={30}
              onPress={() => this.props.onPressAmount(this.props.id, false)}
            />
            <Text style={styles.amountText}>{this.props.amount}</Text>
            <Ionicons 
              name={'md-add-circle'}
              style={styles.icon}
              size={30}
              onPress={() => this.props.onPressAmount(this.props.id, true)}
            />
          </View>
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
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
    elevation: 5
  },
  containerImage: {
    height: 80, 
    width: 80,
    resizeMode : 'contain',
    marginRight: 10
  },
  containerText: {
    height: 50
  },
  priceText: {
    fontSize: 14,
    color: Colors.lightRed,
    fontWeight: 'bold'
  },
  amountText: {
    fontSize: 16,
    marginLeft: 10
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  icon: {
    color: Colors.grey,
    marginLeft: 10
  },
  miniButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
});