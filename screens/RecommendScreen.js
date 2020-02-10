import React from 'react';
import { FlatList, ScrollView, StyleSheet, View, ListView, Text, Image } from 'react-native';
import RecommendItem from '../components/RecommendItem';
import Colors from '../constants/Colors';

export default class RecommendScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.newArr}>Apa yang ingin kamu cari?</Text>
        <Text style={styles.more}>Lihat semua</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <RecommendItem recommendName='Mantab'/>
          <RecommendItem recommendName='Mantab'/>
          <RecommendItem recommendName='Mantab'/>
        </ScrollView>
        <Text style={styles.newArr}>Barang yang cocok untukmu</Text>
        <Text style={styles.more}>Lihat semua</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <RecommendItem recommendName='Mantab'/>
          <RecommendItem recommendName='Mantab'/>
          <RecommendItem recommendName='Mantab'/>
        </ScrollView>
        <Text style={styles.newArr}>Populer di sekitarmu</Text>
        <Text style={styles.more}>Lihat semua</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <RecommendItem recommendName='Mantab'/>
          <RecommendItem recommendName='Mantab'/>
          <RecommendItem recommendName='Mantab'/>
        </ScrollView>
      </ScrollView>
    );
  }
}

RecommendScreen.navigationOptions = {
  title: 'Rekomendasi',
  headerStyle: {
    backgroundColor: '#4c9ad1'
  },
  headerTitleStyle: {
    color: 'white',
    fontWeight: 'bold'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 4,
    paddingLeft: 15,
    paddingRight: 15,
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
    paddingRight: 4,
    color: Colors.lightBlue
  },
});