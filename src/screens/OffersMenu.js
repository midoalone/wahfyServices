import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {hScale, vScale, sWidth, fScale} from 'step-scale';
import {getOffersMenu} from '../redux/actions/OfferActions';
import {addToCart} from '../redux/actions/CartActions';
import {bindActionCreators} from 'redux';
import {colors} from '../constants';
import {strings} from '../strings';

class OffersMenu extends Component {
  componentDidMount() {
    const {token} = this.props.user.data;
    const {navigation} = this.props;
    const type = this.props.navigation.getParam('serviceType');
    const id = navigation.getParam('offerId');
    this.props.getOffersMenu({token, id, type});
  }

  addItemToCart(isExist, item) {
    if (!isExist) {
      this.props.addToCart(item);
    }
  }

  render() {
    const {
      menuListStyle,
      menuItemContainer,
      menuImageStyle,
      titleStyle,
      buttonStyle,
    } = styles;
    const {cart, offersMenu} = this.props;
    const offerType = this.props.navigation.getParam('offerType');
    const type = offerType == 'discount';
    console.warn('offerType', offerType);
    return (
      // <View style={{height: '100%', backgroundColor: 'green'}}>
        <FlatList
          style={menuListStyle}
          contentContainerStyle={{paddingHorizontal: hScale(10)}}
          showsVerticalScrollIndicator={false}
          data={offersMenu}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            console.log('asdasdasdasd', item.details)
            return (
              <>
                {type ? (
                  <FlatList
                    data={item.details ? item.details.items: []}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item}) => {
                      const {
                        id,
                        image,
                        name_en,
                        offer_price,
                        description,
                      } = item;
                      return (
                        <View key={id} style={menuItemContainer}>
                          <Image
                            source={image != null && {uri: image}}
                            style={menuImageStyle}
                          />

                          <View
                            style={{
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                            }}>
                            <Text style={titleStyle}>{name_en}</Text>
                            <Text style={titleStyle}>
                              {strings.price} {offer_price}
                            </Text>
                            <Text
                              numberOfLines={2}
                              style={{width: hScale(110)}}>
                              {description}
                            </Text>
                          </View>

                          <TouchableOpacity
                            style={buttonStyle}
                            onPress={() => {
                              this.addItemToCart(isExist, item);
                              this.props.navigation.navigate('Cart');
                            }}>
                            <Text
                              style={{
                                color: colors.white,
                                textAlign: 'center',
                              }}>
                              Add to cart
                            </Text>
                          </TouchableOpacity>
                        </View>
                      );
                    }}
                  />
                ) : (
                  <>
                    <View style={{flex:1}}>
                      <Text>buy</Text>
                      <FlatList
                        data={item.details ?item.details.buy_items: []}
                        listKey={(item, index) => `>>>${item.id}${index}`}
                        renderItem={({item}) => {
                          const {
                            id,
                            image,
                            name_en,
                            price,
                            description,
                          } = item;
                          console.log('buy_items ', item);
                          return (
                            <View key={id} style={menuItemContainer}>
                              <Image
                                source={image != null && {uri: image}}
                                style={menuImageStyle}
                              />
                              <View
                                style={{
                                  alignItems: 'flex-start',
                                  justifyContent: 'flex-start',
                                }}>
                                <Text style={titleStyle}>{name_en}</Text>
                                <Text style={titleStyle}>
                                  {strings.price} {price}
                                </Text>
                                <Text
                                  numberOfLines={2}
                                  style={{width: hScale(110)}}>
                                  {description}
                                </Text>
                              </View>

                              <TouchableOpacity
                                style={buttonStyle}
                                onPress={() => {
                                  this.addItemToCart(isExist, item);
                                  this.props.navigation.navigate('Cart');
                                }}>
                                <Text
                                  style={{
                                    color: colors.white,
                                    textAlign: 'center',
                                  }}>
                                  Add to cart
                                </Text>
                              </TouchableOpacity>
                            </View>
                          );
                        }}
                      />
                    </View>

                    <View style={{flex:1}}>
                      <Text>get</Text>
                      <FlatList
                       data={item.details ? item.details.get_items : []}
                        listKey={(item, index) => `@=>${index.toString()}`}
                        renderItem={({item}) => {
                          const {
                            id,
                            image,
                            name_en,
                            offer_price,
                            description,
                          } = item;
                          console.warn('get_items ', item);
                          return (
                            <View key={id} style={menuItemContainer}>
                              <Image
                                source={image != null && {uri: image}}
                                style={menuImageStyle}
                              />
                              <View
                                style={{
                                  alignItems: 'flex-start',
                                  justifyContent: 'flex-start',
                                }}>
                                <Text style={titleStyle}>{name_en}</Text>
                                <Text style={titleStyle}>
                                  {strings.price} {offer_price}
                                </Text>
                                <Text
                                  numberOfLines={2}
                                  style={{width: hScale(110)}}>
                                  {description}
                                </Text>
                              </View>

                              <TouchableOpacity
                                style={buttonStyle}
                                onPress={() => {
                                  this.addItemToCart(isExist, item);
                                  this.props.navigation.navigate('Cart');
                                }}>
                                <Text
                                  style={{
                                    color: colors.white,
                                    textAlign: 'center',
                                  }}>
                                  Add to cart
                                </Text>
                              </TouchableOpacity>
                            </View>
                          );
                        }}
                      />
                    </View>
                  </>
                )}
              </>
            );
          }}
        />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  menuListStyle: {
    marginTop: vScale(15),
    width: sWidth,
    height: vScale(280),
  },
  titleStyle: {
    fontSize: fScale(15),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: vScale(5),
  },
  menuItemContainer: {
    width: '95%',
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: '#cfcfcf',
    borderRadius: 10,
    alignSelf: 'center',
  },
  menuImageStyle: {
    width: hScale(110),
    height: vScale(90),
    borderRadius: hScale(10),
    resizeMode: 'cover',
  },
  buttonStyle: {
    width: hScale(70),
    height: vScale(40),
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: hScale(10),
    position: 'absolute',
    zIndex: 1,
    end: 10,
    bottom: 10,
  },
  menuListStyle: {
    marginTop: vScale(5),
    width: sWidth,
    height: vScale(280),
  },
});

const mapStateToProps = ({offersReducer, authReducer, cartReducer}) => {
  const {offersMenu} = offersReducer;
  const {user} = authReducer;
  const {cart} = cartReducer;
  return {user, offersMenu, cart};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getOffersMenu,
      addToCart,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersMenu);
