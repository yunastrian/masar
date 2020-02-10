import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      q: ''
    };
  }
  
  onLogin() {
    const { q } = this.state;
    if (q == '') {

    } else {
      Alert.alert('Credentials', `${q}`);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.q}
          onChangeText={(q) => this.setState({ q }, this.onLogin.bind(this))}
          placeholder={'Cari..'}
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c9ad1'
  },
  input: {
    borderRadius: 4,
    paddingLeft: 4,
    width: 300,
    height: 40,
    padding: 2,
    backgroundColor: 'white'
  }
});
