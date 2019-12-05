import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {TabNavigator} from './TabNavigator';
import {SideMenu} from '../components/SideMenu';
import {HomeTab} from './HomeTab';

export const DrawerNav = createDrawerNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
    },
    HomeTab: {screen: HomeTab},
  },
  {
    drawerPosition: 'right',
    drawerWidth: 150,
    contentComponent: SideMenu,
    drawerBackgroundColor: 'transparent',
  },
);
