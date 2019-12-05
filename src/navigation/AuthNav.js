import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import {Intro} from '../screens/Intro';
import {strings} from '../strings';
import Menu from '../screens/Menu';
import {MyAddresses} from '../screens/MyAddresses';
import DrawerIcon from '../components/DrawerIcon';
import AddAddress from '../screens/AddAddress';

export const AuthNav = createStackNavigator(
  {
    Intro: {
      screen: Intro,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        headerTitle: strings.signup,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: strings.home,
      },
    },
    MyAddresses: {
      screen: MyAddresses,
    },
    Menu: {
      screen: Menu,
      navigationOptions: {
        header: null,
      },
    },
    AddAddress: {
      screen: AddAddress
    }

    // VerifingNumber: {
    //   screen: VerifyingNumber,
    //   navigationOptions: {
    //     headerTitle: strings.verifyingNumber,
    //   },
    // },
    // phoneVerification: {
    //   screen: PhoneVerification,
    //   navigationOptions: {
    //     headerTitle: strings.phoneVerification,
    //   },
    // },
  },
  {
    defaultNavigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
);
