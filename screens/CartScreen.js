import React from 'react';
import { 
  ScrollView, 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CartProductBar from '../components/CartProductBar';
import Colors from '../constants/Colors';

export default class LinksScreen extends React.Component {
  state = {
    carts: [
      {
        name: 'testes',
        products: [
          {
            id: '1',
            name: 'Tas',
            price: 1000,
            amount: 1,
            imageUri: '../assets/images/robot-dev.png'
          },
          {
            id: '2',
            name: 'Tas',
            price: 1000,
            amount: 1,
            imageUri: '../assets/images/robot-dev.png'
          }
        ]
      }
    ]
  }

  handleDelete = (id) => {
    const { carts } = this.state

    const mapCarts = carts.reduce((result, shop) => {
      shop.products = shop.products.reduce((result2, item) => {
        if (item.id === id) {
          return result2
        } else {
          result2.push(item)
          return result2
        }
      }, []);
      if (shop.products.length === 0) {
        return result
      } else {
        result.push(shop)
        return result
      }
    }, []);

    // call api

    this.setState({carts: mapCarts})
  }

  handleChange = (id, isAdd) => {
    const { carts } = this.state

    const mapCarts = carts.reduce((result, shop) => {
      shop.products = shop.products.reduce((result2, item) => {
        if (item.id === id) {
          if (item.amount === 1 && !isAdd) {
            return result2
          } else {
            item.amount += isAdd ? 1 : -1
            result2.push(item)
            return result2
          }
        } else {
          result2.push(item)
          return result2
        }
      }, []);
      if (shop.products.length === 0) {
        return result
      } else {
        result.push(shop)
        return result
      }
    }, []);

    console.log(mapCarts);

    // call api

    this.setState({carts: mapCarts})
  }

  render() {
    const { carts } = this.state

    return (
      <ScrollView style={styles.container}>
        {carts && carts.map((shop, key) => {
          return (
            <View style={styles.shopContainer}>
              <Text style={styles.shopNameText}>{shop.name}</Text>
              {shop.products && shop.products.map((item, key) => {
                return (
                  <CartProductBar
                    id={item.id}
                    style={styles.item}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    imageUri={item.imageUri}
                    onPressAmount={this.handleChange}
                    onPressDelete={this.handleDelete}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.lightGrey2,
    paddingHorizontal: 15
  },
  item: {
    marginVertical: 4
  },
  shopContainer: {
    padding: 10,
    paddingBottom: 5,
    backgroundColor: '#e0f2ff',
    borderRadius: 10,
    elevation: 5
  },
  shopNameText: {
    fontSize: 16,
    marginBottom: 5
  }
});