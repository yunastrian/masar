import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import BarMenuButton from '../components/BarMenuButton';
import Colors from '../constants/Colors';

const categories = [
  {
    title: 'Lukisan',
    description: 'Klasisme, Romantisme, Realisme, Naturalisme',
    iconName: 'md-color-palette'
  },
  {
    title: 'Perabotan',
    description: 'Kursi, meja, karpet, keset',
    iconName: 'md-bed'
  },
  {
    title: 'Fashion Wanita',
    description: 'Tas, jaket, cincin, gelang, kalung',
    iconName: 'md-basket'
  },
  {
    title: 'Hiasan Rumah',
    description: 'Vas, bunga palsu, lampu hias, kreasi rotan, patung',
    iconName: 'md-rose'
  }
]

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <BarMenuButton
            title = {item.title}
            description = {item.description}
            iconName = {item.iconName} 
          />
        )}
        keyExtractor = {item => item.title}
      />
    </View>
  );
}

CategoryScreen.navigationOptions = {
  title: 'Kategori',
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
    paddingTop: 15,
    backgroundColor: Colors.lightGrey2,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 5
  },
});
