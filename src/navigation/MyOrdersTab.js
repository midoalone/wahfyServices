import {createStackNavigator} from 'react-navigation-stack';
import {MyOrders} from '../screens/MyOrders';

export const MyOrdersTab = createStackNavigator({
  MyOrders: {screen: MyOrders},
});
