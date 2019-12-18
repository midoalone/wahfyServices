import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {TabNavigator} from './TabNavigator';
import {SideMenu} from '../components/SideMenu';

export const DrawerNav = createDrawerNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
    },
  },
  {
    drawerPosition: 'right',
    drawerWidth: 220,
    contentComponent: SideMenu,
    drawerBackgroundColor: 'transparent',
  },
);
