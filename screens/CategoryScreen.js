import React from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import BarMenuButton from '../components/BarMenuButton';

const categories = [
  {
    title: 'Lukisan',
    description: 'Klasisme, Romantisme, Realisme, Naturalisme',
    iconName: 'color-palette'
  }
]

export default function CategoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={
          ({ item }) => <BarMenuButton
                          title = {item.title}
                          description = {item.description}
                          iconName = {item.iconName} />
        }
        keyExtractor = {item => item.title}
      />
    </ScrollView>
  );
}

CategoryScreen.navigationOptions = {
  title: 'Kategori',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
