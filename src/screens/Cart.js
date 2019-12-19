import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {CartCard} from '../components/CartCard';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart, removeFromCart, incermentCount, decermentCount} from '../redux/actions/CartActions';
import {Button} from '../components';
import {strings} from '../strings';
import {vScale} from 'step-scale';
import {colors} from '../constants';
import {EmptyScreen} from './EmptyScreen';
import {images} from '../assets';
import Icon from 'react-native-vector-icons/FontAwesome';

class Cart extends Component {
  state = {
    count: 1,
    totalPrice: 0,
  };

  handleIncrementCount(item) {
    const {count} = this.state;
    if (count) {
      this.setState({count: count + 1});
    }
  }
  handleDecrementCount() {
    const {count} = this.state;
    if (count > 1) {
      this.setState({count: count - 1});
    }
  }
  render() {
    const {count} = this.state;
    const {cart, qty} = this.props;
    const emptyCart = cart.length == 0;

    const cartPrice = cart.map(item => Number(item.price));
    const cartSubTotalPrice = cartPrice.reduce((a, b) => a + b, 0);
    const taxes = cartSubTotalPrice * (5 / 100);
    const cartTotalPrice = cartSubTotalPrice + taxes;

    const {
      container,
      countItemContainer,
      headContainerStyle,
      headTextsStyle,
      imageStyle,
      iconContainer,
      buttonStyle,
    } = styles;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: vScale(20),
        }}>
        {emptyCart ? (
          <EmptyScreen image={images.emptyCart} text={strings.emptyCart} />
        ) : (
          <FlatList
            data={cart}
            style={{
              borderWidth: 0.5,
              borderRadius: 10,
              marginBottom: 10,
            }}
            contentContainerStyle={{
              paddingBottom: vScale(20),
              alignItems: 'center',
              justifyContent: 'center', 
            }}
            ItemSeparatorComponent={() => (
              <View style={{borderBottomWidth: 0.5, borderRadius: 10}} />
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item,index}) => {
              const {id, image, name_en, price, extras, calories} = item;
              return (
                <View style={container} key={`id&${index}${id}`}>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={image} style={imageStyle} />
                    <View style={{marginStart: 10}}>
                      <View style={headContainerStyle}>
                        <Text style={headTextsStyle}>{name_en}</Text>
                        <View style={countItemContainer}>
                          <TouchableOpacity
                            style={iconContainer}
                            onPress={() => this.props.decermentCount()}>
                            <Icon name="minus" size={14} color={colors.black} />
                          </TouchableOpacity>
                          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                            {qty}
                          </Text>
                          <TouchableOpacity
                            style={iconContainer}
                            onPress={() => this.props.incermentCount()}>
                            <Icon name="plus" size={14} color={colors.black} />
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: 8,
                          width: 215,
                          justifyContent: 'flex-end',
                        }}>
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: '500',
                            color: colors.buttonBG,
                          }}>
                          Cal : {calories ? calories * count : calories}
                        </Text>
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: '500',
                            color: 'green',
                            marginStart: 30,
                          }}>
                          price : {price ? price * count : 0}
                        </Text>
                      </View>
                      <View
                        style={{
                          marginVertical: 10,
                          width: 220,
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <View style={headContainerStyle}>
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: '500',
                              marginVertical: 2,
                              color: '#BF2626',
                              flexDirection: 'row',
                            }}>
                            Extra
                          </Text>
                          <View style={countItemContainer}>
                            <TouchableOpacity
                              style={iconContainer}
                              onPress={() => this.handleDecrementCount()}>
                              <Icon
                                name="minus"
                                size={14}
                                color={colors.black}
                              />
                            </TouchableOpacity>
                            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                              {count}
                            </Text>
                            <TouchableOpacity
                              style={iconContainer}
                              onPress={() => this.handleIncrementCount(item)}>
                              <Icon
                                name="plus"
                                size={14}
                                color={colors.black}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            marginVertical: 8,
                            width: 180,
                            alignSelf: 'flex-end',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: '500',
                              color: colors.buttonBG,
                            }}>
                            Cal : 100
                          </Text>
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: '500',
                              color: 'green',
                            }}>
                            price : 600
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
            ListFooterComponent={() => {
              return (
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      width: 260,
                      marginVertical: 10,
                      color: colors.buttonBG,
                      alignSelf: 'center',
                    }}>
                    ----------------------------------------
                  </Text>

                  <View
                    style={{
                      width: 220,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#BF2626',
                      }}>
                      Sub Total :
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#BF2626',
                      }}>
                      {cartSubTotalPrice ? cartSubTotalPrice * count : 0}
                      SR
                    </Text>
                  </View>

                  <View
                    style={{
                      width: 220,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#BF2626',
                      }}>
                      Tax :
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#BF2626',
                      }}>
                      {taxes ? taxes * count : 0} SR
                    </Text>
                  </View>

                  {/* <View
                    style={{
                      width: 220,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#BF2626',
                      }}>
                      Delivery :
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#BF2626',
                      }}>
                      {cartTotalPrice ? cartTotalPrice * count : cartTotalPrice}{' '}
                      SR
                    </Text>
                  </View> */}

                  <View
                    style={{
                      width: 220,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#BF2626',
                      }}>
                      Total :
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#BF2626',
                      }}>
                      {cartTotalPrice ? cartTotalPrice * count : 0} SR
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        )}
        {!emptyCart && (
          <Button
            title={strings.checkout}
            buttonStyle={buttonStyle}
            onPress={() => this.props.navigation.navigate('Checkout')}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '95%',

    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
  },
  countItemContainer: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headContainerStyle: {
    width: 220,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: 90,
    height: 70,
    borderRadius: 10,
  },
  headTextsStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonStyle: {
    marginBottom: vScale(15),
  },
});

const mapStateToProps = ({cartReducer}) => {
  const {cart, qty} = cartReducer;
  return {cart,qty};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addToCart,
      removeFromCart,
      incermentCount, 
      decermentCount
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
