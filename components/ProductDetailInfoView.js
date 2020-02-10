import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../constants/Colors';

export default class ProductDetailInfoView extends React.Component {
  render() {
    return (
      <View style={styles.containerView}>
        <Text style={styles.titleText}>
          {this.props.title}
        </Text>
        <Text style={styles.descriptionText}>
          {this.props.description}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'column',
    height: 50,
    width: 70,
    padding: 5,
    shadowColor: Colors.black,
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  titleText: {
    fontSize: 10,
    fontWeight: '100',
    textAlign: "center"
  },
  descriptionText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: "center"
  }
})