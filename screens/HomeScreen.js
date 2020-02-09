import React from 'react';
import { FlatList, ScrollView, StyleSheet, View, ListView, Text, Image } from 'react-native';
import NewItemBox from '../components/NewItemBox';
import Promotions from '../components/Promotions';

const results = [
  {
    itemImage: 'Untitled.png',
    productName: 'Tas mustardo buatan tangan',
    productPriceAfter: '23000',
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
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.promo}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 4,
    backgroundColor: 'rgb(235,235,235)'
  },
  newArr: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 4,
    paddingTop: 4,
    marginBottom: -20
  },
  more: {
    textAlign: 'right',
    paddingRight: 4
  },
  promo: {
    margin: 5
  }
});