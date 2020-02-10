import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Colors from '../constants/Colors';

export default class TitleDescriptionButton extends React.Component {
  onPressButton = () => {
    // navigation
  }

  render() {
    return (
      <TouchableHighlight 
        style={styles.container}
        onPress={this.onPressButton}
      >
        <View>
          <Text style={styles.titleText}>
            {this.props.title}
          </Text>
          <Text style={styles.descriptionText}>
            {this.props.description}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.lightGrey2,
    paddingHorizontal: 15
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: "left"
  },
  descriptionText: {
    fontSize: 10,
    fontWeight: '100',
    textAlign: "left"
  }
})