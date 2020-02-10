import { createStackNavigator } from 'react-navigation-stack';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const ProductDetailStack = createStackNavigator({ 
    ProductDetail: ProductDetailScreen 
});

export default ProductDetailStack;