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
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.lightBlue2,
    flexDirection: 'column',
    width: 105,
    padding: 5,
  },
  titleText: {
    fontSize: 12,
    fontWeight: '100',
    textAlign: "center"
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: "center"
  }
})