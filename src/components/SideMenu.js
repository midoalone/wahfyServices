import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants';

export class SideMenu extends Component {
  render() {
    const {itemContainer, screenNameText} = styles;
    const drawerData = [
      {screenName: 'Home', screenIcon: 'home', screen: 'Home'},
      {screenName: 'Menu', screenIcon: 'home', screen: 'Menu'},
      {screenName: 'Offers', screenIcon: 'tag', screen: 'Offers'},
      {screenName: 'Branches', screenIcon: 'globe'},
      {screenName: 'Logout', screenIcon: 'arrow-left'},
    ];
    return (
        <FlatList
        style={{backgroundColor: 'rgba(81, 90, 90,0.7)' , marginTop: 60}}
          data={drawerData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            const {screenName, screenIcon, screen} = item;
            return (
              <TouchableOpacity
                style={itemContainer}
                onPress={() => this.props.navigation.navigate(screen)}>
                <Icon name={screenIcon} size={20} color={colors.white} />
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
    width: 200,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginStart: 30,
    alignSelf: 'center',
  },
  screenNameText: {
    fontSize: 17,
    color: colors.white,
    marginStart: 20,
  },
});
