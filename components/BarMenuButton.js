import React from 'react';
import { Icon } from 'expo';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Colours from '../constants/Colours';

export class BarMenuButton extends React.Component {
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
          <View style={styles.containerText}>
            <Text style={styles.titleText}>{this.props.title}</Text>
            <Text style={styles.descriptionText}>{this.props.description}</Text>
          </View>
          <Icon.Ionicons
            name='arrow-dropdown-circle'
            size={15}
            style={styles.dropdownIcon}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: Colours.white,
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    height: 70,
    padding: 5,
    shadowColor: Colours.black,
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  menuIcon: {
  },
  containerText: {
    height: '100%'
  },
  dropdownIcon: {

  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  descriptionText: {
    fontSize: 10,
    fontWeight: '100'
  }
})