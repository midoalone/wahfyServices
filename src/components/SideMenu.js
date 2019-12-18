import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants';
import {hScale, vScale, fScale} from 'step-scale';

export class SideMenu extends Component {
  render() {
    const {itemContainer, screenNameText} = styles;
    const drawerData = [
      {screenName: 'Home', screenIcon: 'home', screen: 'Home'},
      {screenName: 'Menu', screenIcon: 'home', screen: 'Menu'},
      {screenName: 'Offers', screenIcon: 'tag', screen: 'Offers'},
      {screenName: 'Branches', screenIcon: 'globe', screen: 'Branches'},
      {screenName: 'MyAddresses', screenIcon: 'globe', screen: 'MyAddresses'},
      {screenName: 'Languages', screenIcon: 'globe', screen: 'Languages'},
      {screenName: 'Profile', screenIcon: 'globe', screen: 'Profile'},
      {screenName: 'Logout', screenIcon: 'arrow-left'},
    ];
    return (
      <FlatList
        style={{backgroundColor: 'rgba(81, 90, 90,0.7)', marginTop: vScale(90)}}
        data={drawerData}
        // contentContainerStyle={{marginTop: vScale(90)}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          const {screenName, screenIcon, screen} = item;
          return (
            <TouchableOpacity
              style={itemContainer}
              onPress={() => this.props.navigation.navigate(screen)}>
              <Icon name={screenIcon} size={fScale(20)} color={colors.white} />
              <Text style={screenNameText}>{screenName}</Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    width: hScale(200),
    height: vScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginStart: hScale(30),
    alignSelf: 'center',
  },
  screenNameText: {
    fontSize: fScale(17),
    color: colors.white,
    marginStart: hScale(20),
  },
});
