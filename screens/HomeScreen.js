import React from 'react';
import { FlatList, ScrollView, StyleSheet, View, ListView, Text, Image, Button } from 'react-native';
import NewItemBox from '../components/NewItemBox';
import Promotions from '../components/Promotions';
import SearchBar from '../components/SearchBar';
import Colors from '../constants/Colors';

const results = [
  {
    itemImage: 'Untitled.png',
    productName: 'Tas mustardo buatan tangan',
    productPriceAfter: 23000,
  },
  {
    itemImage: 'Untitled.png',
    productName: 'Tas mustard dengan pegangan',
    productPriceAfter: '223000',
  },
  {
    itemImage: 'Untitled.png',
    productName: 'Tas mustard dengan pegangan',
    productPriceAfter: '223000',
  },
  {
    itemImage: 'Untitled.png',
    productName: 'Tas mustard dengan pegangan',
    productPriceAfter: '223000',
  },
  {
    itemImage: 'Untitled.png',
    productName: 'Tas mustard dengan pegangan',
    productPriceAfter: '223000',
  },
  {
    itemImage: 'Untitled.png',
    productName: 'Tas mustard dengan pegangan',
    productPriceAfter: '223000',
  },
  {
    itemImage: 'Untitled.png',
    productName: 'Tas mustard dengan pegangan',
    productPriceAfter: '223000',
  }
]

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      <Button onPress = {() => this.props.navigation.navigate('SearchResult')}
                          title = 'Detail'
                        />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.promo2}
      >
        <Promotions content='Promo Gajian Diskon Hingga 90%' colour='#d45656'/>
        <Promotions content='Promo Merdeka Diskon Hingga 45%' colour='#3c4d85'/>
      </ScrollView>
      <Text style={styles.more}>Lihat semua</Text>
      <Image
        style={{margin: 16.5,
                resizeMode: 'contain'}}
        source={require('../coba.png')}
      />
      <Text style={styles.newArr}>Barang Baru</Text>
      <Text style={styles.more}>Lihat semua</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.promo}
      >
        <NewItemBox 
          productName = {results[0].productName}
          productPriceAfter = {results[0].productPriceAfter}
        />
        <NewItemBox 
          productName = {results[0].productName}
          productPriceAfter = {results[0].productPriceAfter}
        />
        <NewItemBox 
          productName = {results[0].productName}
          productPriceAfter = {results[0].productPriceAfter}
        />
        <NewItemBox 
          productName = {results[0].productName}
          productPriceAfter = {results[0].productPriceAfter}
        />
      </ScrollView>
     
      <Text style={styles.newArr}>Pencarian Populer</Text>
      <Text style={styles.more}>Lihat semua</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.promo}
      >
        <NewItemBox 
          productName = {results[0].productName}
          productPriceAfter = {results[0].productPriceAfter}
        />
        <NewItemBox 
          productName = {results[0].productName}
          productPriceAfter = {results[0].productPriceAfter}
        />
        <NewItemBox 
          productName = {results[0].productName}
          productPriceAfter = {results[0].productPriceAfter}
        />
        <NewItemBox 
          productName = {results[0].productName}
          productPriceAfter = {results[0].productPriceAfter}
        />
      </ScrollView>
    </ScrollView>
    );
  }
}

HomeScreen.navigationOptions = {
  headerTitle: props => <SearchBar />,
  headerStyle: {
    backgroundColor: '#4c9ad1',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 4,
    backgroundColor: 'rgb(235,235,235)'
  },
  newArr: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
    paddingTop: 4,
    marginBottom: -20
  },
  more: {
    textAlign: 'right',
    paddingRight: 15,
    color: Colors.lightBlue
  },
  promo: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15
  },
  promo2: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10
  }
});