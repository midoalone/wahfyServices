import {createStackNavigator} from 'react-navigation-stack'
import {Cart} from '../screens/Cart'

export const CartTab = createStackNavigator({
    Cart: {screen: Cart}
})