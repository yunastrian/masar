import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';

export default class IconTopButton extends React.Component {
  render() {
    return (
      <TouchableOpacity 
        onPress={()=>{}}
      >
        <View style={styles.containerButton}>
          <Ionicons 
            name={this.props.iconName}
            style={styles.menuIcon}
            size={30}
          />
          <Text style={styles.titleText}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'column',
    height: 70,
    width: 160,
    padding: 5,
    // shadowColor: Colors.black,
    // shadowRadius: 5,
    // shadowOpacity: 0.5,
    justifyContent: 'center'
  },
  menuIcon: {
    alignSelf:"center"
  },
  titleText: {
    fontSize: 10,
    fontWeight: 'bold',
    alignSelf: "center"
  },
})