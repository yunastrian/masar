import React from 'react';
import { Icon } from 'expo';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Colors from '../constants/Colors';

export default class IconTopButton extends React.Component {
  render() {
    return (
      <TouchableHighlight 
        onPress={()=>{}}
      >
        <View style={styles.containerButton}>
          <Icon.Ionicons 
            name={this.props.iconName}
            style={styles.menuIcon}
          />
          <Text style={styles.titleText}>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'column',
    height: 70,
    width: 80,
    padding: 5,
    shadowColor: Colors.black,
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  menuIcon: {
    height: 40,
    width: 40
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
})