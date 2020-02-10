import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

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
        <Text style={styles.titleText}>
          {this.props.title}
        </Text>
        <Text style={styles.descriptionText}>
          {this.props.description}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5
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