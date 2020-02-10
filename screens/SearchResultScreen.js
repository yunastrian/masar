import React from 'react';
import { FlatList, ScrollView, StyleSheet, View, ListView, Text, Image } from 'react-native';
import ItemBox from '../components/ItemBox';
import Filter from '../components/Filter';

const results = [
  {
    itemImage: 'Untitled.png',
    productName: 'Tas tangan buatan tangan',
    productPriceAfter: '23000',
    productPriceBefore: '26000',
    productDiscount: '40'
  }
]

const filter = [
  {
    filterItem: 'Terkait'
  },
  {
    filterItem: 'Terbaru'
  },
  {
    filterItem: 'Terlaris'
  },
  {
    filterItem: 'Harga'
  }
]

export default class SearchResultScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <FlatList 
          numColumns={4}
          data={filter}
          renderItem={
            ({ item }) => <Filter
                            itemFilter = {item.filterItem} />
          }
        />
        <FlatList 
          numColumns={2}
          data={results}
          renderItem={
            ({ item }) => <ItemBox
                            itemImage = {item.itemImage}
                            productName = {item.productName}
                            productPriceAfter = {item.productPriceAfter}
                            productPriceBefore = {item.productPriceBefore}
                            productDiscount = {item.productDiscount} />
          }
        />
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
  filter: {
    flex: 1,
    fontSize: 15,
    marginHorizontal: 10,
    textAlign: 'center'
  }
});