import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class TitleDescriptionText extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
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
    fontSize: 12,
    fontWeight: '100',
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  container: {
    padding: 5,
  }
})