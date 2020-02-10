import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';

export default class BarMenuButton extends React.Component {
  render() {
    return (
      <TouchableOpacity 
        onPress={()=>{}}
      >
        <View style={styles.containerButton}>
          <Ionicons
            name={this.props.iconName}
            size={80}
            style={styles.menuIcon}
          />
          <View style={styles.containerText}>
            <Text style={styles.titleText}>{this.props.title}</Text>
            <Text style={styles.descriptionText} multiline = {true} ellipsizeMode='tail'>{this.props.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    // borderColor: Colors.grey,
    elevation: 5,
    flexDirection: 'row',
    height: 100,
    padding: 10,
    // shadowColor: Colors.grey,
    // shadowRadius: 5,
    // shadowOpacity: 0.5,
    alignItems: 'center'
  },
  menuIcon: {
    marginRight: 10,
    color: Colors.blue
  },
  containerText: {
    height: '100%'
  },
  dropdownIcon: {

  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkBlue
  },
  descriptionText: {
    fontSize: 12,
    fontWeight: '100'
  }
})