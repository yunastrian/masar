import React from 'react';
import { 
  ScrollView, 
  StyleSheet,
  Image,
  
} from 'react-native';

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

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
