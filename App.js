import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ProductDetails from './src/screens/ProductDetails';

const navigator = createStackNavigator(
{
 Search: SearchScreen,
 Details: ProductDetails
}, 
{
  initialRouteName: 'Search',
  defaultNavigationOptions:
  {
    title: 'Product Listing Page'
  }
}
);

export default createAppContainer(navigator);