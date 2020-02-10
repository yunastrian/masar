import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import BarMenuButton from '../components/BarMenuButton';
import Colors from '../constants/Colors';

const categories = [
  {
    title: 'Lukisan',
    description: 'Klasisme, Romantisme, Realisme, Naturalisme',
    iconName: 'color-palette'
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
