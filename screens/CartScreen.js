import React from 'react';
import { 
  FlatList, 
  ScrollView, 
  StyleSheet,
} from 'react-native';
import CartProductBar from '../components/CartProductBar';

export default class CategoryScreen extends React.Component {
  state = {
    carts:[]
  }

  handleDelete = (id) => {
    const { carts } = this.state

    const filteredCarts = carts.filter(item => item.id !== id);

    // call api

    this.setState({carts: filteredCarts})
  }

  handleChange = (id, isAdd) => {
    const { carts } = this.state

    const mapCarts = carts.map(item => {
      if (item.id === id) {
        item.amount += isAdd ? 1 : -1
      }
    });

    // call api

    this.setState({carts: mapCarts})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={this.state.carts}
          renderItem={
            ({ item }) => <CartProductBar
                            style={styles.item}
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            amount={item.amount}
                            imageUri={item.imageUri}
                            onPressAmount={this.handleChange}
                            onPressDelete={this.handleDelete}
                          />
          }
          keyExtractor = {item.id}
        />
      </ScrollView>
    );
  }
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
  item: {
    marginVertical: 4
  }
});
