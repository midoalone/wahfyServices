import React, {Component} from 'react';
import {FlatList, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants';
import {strings} from '../strings';
import {AddressCard} from '../components';

export class MyAddresses extends Component {
  state = {
    addressesData: [],
    selectedAddressId: null,
  };
  static navigationOptions = ({navigation}) => ({
    headerStyle: {backgroundColor: 'orange'},
    headerTintColor: colors.white,
    headerTitle: strings.myAddresses,
  });

  render() {
    const {buttonStyle} = styles;
    const {selectedAddressId} = this.state;
    const isEmptyAddresses = addressesData.length == 0;
    return (
      <>
        {isEmptyAddresses ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 25, color: '#b0adad'}}>
              {strings.noAddresses}
            </Text>
            <TouchableOpacity style={buttonStyle}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="plus" size={14} color={colors.buttonBG} />
                <Text
                  style={{
                    fontSize: 15,
                    color: colors.buttonBG,
                    marginStart: 5,
                  }}>
                  {strings.addNewAddress}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            style={{marginVertical: 30}}
            data={addressesData}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              const isSelected = index == selectedAddressId;
              return (
                <AddressCard
                  item={item}
                  isSelected={isSelected}
                  onPress={() => {
                    this.setState({selectedAddressId: index});
                    this.props.navigation.navigate('Menu');
                  }}
                />
              );
            }}
            ListFooterComponent={
              <TouchableOpacity
                style={buttonStyle}
                onPress={() => this.props.navigation.navigate('AddAddress')}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="plus" size={14} color={colors.buttonBG} />
                  <Text
                    style={{
                      fontSize: 15,
                      color: colors.buttonBG,
                      marginStart: 5,
                    }}>
                    {strings.addNewAddress}
                  </Text>
                </View>
              </TouchableOpacity>
            }
          />
        )}
      </>
    );
  }
}

const addressesData = [
  {
    id: 1,
    address:
      'E-210, App innovation, Sector 74, industrial area, Phase, Mohali, India, 160002',
    name: 'Salah Salem',
  },
  {
    id: 2,
    address:
      'E-210, App innovation, Sector 74, industrial area, Phase, Mohali, India, 160002',
    name: 'Salah Salem',
  },
  {
    id: 3,
    address:
      'E-210, App innovation, Sector 74, industrial area, Phase, Mohali, India, 160002',
    name: 'Salah Salem',
  },
  {
    id: 4,
    address:
      'E-210, App innovation, Sector 74, industrial area, Phase, Mohali, India, 160002',
    name: 'Salah Salem',
  },
  {
    id: 5,
    address:
      'E-210, App innovation, Sector 74, industrial area, Phase, Mohali, India, 160002',
    name: 'Salah Salem',
  },
  {
    id: 6,
    address:
      'E-210, App innovation, Sector 74, industrial area, Phase, Mohali, India, 160002',
    name: 'Salah Salem',
  },
  {
    id: 7,
    address:
      'E-210, App innovation, Sector 74, industrial area, Phase, Mohali, India, 160002',
    name: 'Salah Salem',
  },
  {
    id: 8,
    address:
      'E-210, App innovation, Sector 74, industrial area, Phase, Mohali, India, 160002',
    name: 'Salah Salem',
  },
];

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 130,
    borderWidth: 0.5,
    borderColor: '#b8b3b3',
    alignSelf: 'center',
    marginTop: 10,
    paddingVertical: 15,
  },
  headContainer: {
    flexDirection: 'row',
    marginStart: 15,
    alignItems: 'center',
  },
  selectionContainer: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: '#b8b3b3',
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 10,
  },
  selectedView: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: colors.buttonBG,
  },
  iconContainer: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    end: 15,
  },
  addressContainer: {
    width: '90%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonStyle: {
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 15,
  },
});
