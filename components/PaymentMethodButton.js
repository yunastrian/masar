import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import Colors from '../constants/Colors';

export class BarMenuButton extends React.Component {
  render() {
    return (
      <TouchableHighlight 
        onPress={()=>{}}
      >
        <View style={styles.containerButton}>
          <Image
            source={require(this.props.imageUri)}
            style={styles.menuImage}
          />
          <Text style={styles.titleText}>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  containerButton: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'center',
    padding: 5,
    shadowColor: Colors.black,
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  menuImage: {
    height: 50
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
})