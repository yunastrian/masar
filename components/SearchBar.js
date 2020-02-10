import React, { Component } from 'react';
import { StackNavigator, cre } from 'react-navigation';
import { Alert, Button, TextInput, View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import SearchResultScreen from '../screens/SearchResultScreen';
import { createStackNavigator } from 'react-navigation-stack';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const SearchResultStack = createStackNavigator(
  {
    SearchResult: SearchResultScreen,
  },
  config
);

SearchResultStack.path = '';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      q: ''
    };
  }
  
  onLogin() {
    const { q } = this.state;
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.q}
          // onChangeText={(q) => this.setState({ q }, this.onLogin.bind(this))}
          onChangeText={(q) => this.setState({ q })}
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
    padding: 15,
    width: 323,
    height: 40,
    padding: 2,
    backgroundColor: 'white'
  }
});
