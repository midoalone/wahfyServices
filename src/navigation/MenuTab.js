import React from 'react'
import {createStackNavigator} from 'react-navigation-stack';
import Menu from '../screens/Menu';
import { DrawerIcon } from '../components/DrawerIcon';


export const MenuTab = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: ({navigation}) => ({
      headerRight: <DrawerIcon navigation={navigation} />,
      headerStyle: {
        backgroundColor: 'transparent'
      }
    }),
  },
});
