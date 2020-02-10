import { createStackNavigator } from 'react-navigation';
import SearchResultScreen from '../screens/SearchResultScreen';

const SearchResultStack = createStackNavigator({ 
    SearchResult: SearchResultScreen 
});

export default SearchResultStack;