import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class TitleDescriptionText extends React.Component {
  render() {
    return (
      <View>
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