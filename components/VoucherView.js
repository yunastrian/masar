import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../constants/Colors';

export default class BarMenuButton extends React.Component {
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
    backgroundColor: Colors.blue,
    borderRadius: 10,
    flexDirection: 'column',
    width: 150,
    padding: 10,
    marginRight: 10,
    justifyContent: 'space-between'
  },
  titleText: {
    fontSize: 12,
    fontWeight: '100',
    textAlign: "center",
    color: Colors.white
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: "center",
    color: Colors.white
  }
})