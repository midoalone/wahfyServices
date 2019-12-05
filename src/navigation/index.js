import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AuthNav} from './AuthNav';
import {DrawerNav} from './DrawerNav';
import { TabNavigator } from './TabNavigator';

const rootNavigator = createSwitchNavigator({
  // Tabs: {screen: TabNavigator},
  AuthNav: {screen: AuthNav},
  DrawerNav: {screen: DrawerNav},
});

export default createAppContainer(rootNavigator);
