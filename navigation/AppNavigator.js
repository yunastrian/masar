import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainTabNavigator from './MainTabNavigator';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import SearchResultScreen from '../screens/SearchResultScreen';

const HomeStack = createStackNavigator({
  ProductDetail: ProductDetailScreen
})

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Home: HomeStack
  })
);
