import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';

export const HomeTab = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
});
