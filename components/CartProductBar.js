import React from 'react';
import { Icon } from 'expo';
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
      <View>
        <Image 
          style={styles.containerImage}
          source={require(this.props.urlImage)}
        />
        <View>
          <Text style={styles.titleText}>{this.props.name}</Text>
          <Text style={styles.priceText, styles.text}>{CurrencyFormat(this.props.price)}</Text>
          <View style={styles.miniButtonContainer}>
            <Icon.Ionicons 
              name={'trash'}
              style={styles.icon}
              onPress={this.props.onPressDelete(this.props.key)}
            />
            <Icon.Ionicons 
              name={'remove-circle'} 
              style={styles.icon} 
              onPress={this.props.onPressAmount(this.props.key, false)}
            />
            <Text style={styles.text}>{this.props.amount}</Text>
            <Icon.Ionicons 
              name={'add-circle'}
              style={styles.icon}
              onPress={this.props.onPressAmount(this.props.key, true)}
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
    fontSize: 12
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  icon: {
    height: 12,
    width: 12,
    color: Colors.grey
  },
  miniButtonContainer: {
    flexDirection: 'row'
  }
});