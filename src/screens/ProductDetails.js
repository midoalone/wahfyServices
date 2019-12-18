import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {images} from '../assets';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/color';
import {strings} from '../strings';
import Carousel from 'react-native-snap-carousel';
import {Button} from '../components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart, removeFromCart} from '../redux/actions/CartActions';
import {hScale, vScale, fScale, sWidth} from 'step-scale';
import Toast from 'react-native-simple-toast';
import {base_URL} from '../services/API';
import AsyncStorage from '@react-native-community/async-storage';

class ProductDetails extends Component {
  state = {
    toping: false,
    extraToping: [],
    count: 1,
    productItem: {
      image: null,
      name_en: '',
      price: 0,
      calories: 0,
    },
  };

  addItemToCart(isExist, item) {
    
    if (!isExist) {
      console.warn('item cart', item);
      this.props.addToCart(item);
    }
  }

  removeFromCart(isExist, item) {
    if (isExist) {
      this.props.removeFromCart(item.id);
    }
  }

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
    const {toping, count} = this.state;
    const item = this.props.navigation.getParam('item');
    const {image, name_en, price, calories, category} = item;
    // console.warn('itemitem', price);

    
    const {cart} = this.props;
    const isExist = cart.includes(item);
    const {
      headContainer,
      itemNameStyle,
      productImageStyle,
      addContainer,
      plusMinStyle,
      topingContainer,
      addTopingText,
      topingImage,
      confirmButtonStyle,
      countItemContainer,
      iconContainer,
    } = styles;
    return (
      <View style={{flex: 1}}>
        <View style={headContainer}>
          <Text numberOfLines={1} style={[itemNameStyle, {width: hScale(200)}]}>
            {name_en}
          </Text>
          <Text
            style={[
              itemNameStyle,
              {fontSize: fScale(14), justifyContent: 'flex-end'},
            ]}>
            {strings.price} {price ? price * count : price} SR
          </Text>
        </View>
        {/* image, add and minus section */}
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            width: '100%',
            height: vScale(140),
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={image} style={productImageStyle} />
          </View>
          <View style={countItemContainer}>
            <TouchableOpacity
              style={iconContainer}
              onPress={() => this.handleDecrementCount()}>
              <Icon name="minus" size={14} color={colors.black} />
            </TouchableOpacity>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{count}</Text>
            <TouchableOpacity
              style={iconContainer}
              onPress={() => this.handleIncrementCount()}>
              <Icon name="plus" size={14} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignSelf: 'center', marginTop: vScale(35)}}>
          <Text style={{color: '#BF2626'}}>
            {strings.calories} {calories ? calories * count : calories}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: hScale(10),
            marginVertical: vScale(20),
          }}
          onPress={() => this.setState({toping: !toping})}>
          <View style={topingContainer}>
            <Icon
              name={toping ? 'minus' : 'plus'}
              size={fScale(16)}
              color={colors.white}
            />
          </View>
          <Text style={addTopingText}>Add Extra</Text>
        </TouchableOpacity>

        {/* add topings section */}
        {toping && (
          <Carousel
            sliderWidth={sWidth}
            itemWidth={hScale(200)}
            ref={c => {
              this._carousel = c;
            }}
            style={{
              marginHorizontal: hScale(5),
              alignSelf: 'center',
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={category.extras}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              const {name_en, image, price, calories} = item;
              return (
                <View
                  style={{
                    alignItems: 'center',
                    marginHorizontal: hScale(10),
                  }}>
                  <Image source={image} style={topingImage} />
                  <Text style={addTopingText}>{name_en}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: hScale(150),
                    }}>
                    <Text style={addTopingText}>
                      {strings.price} {price}
                    </Text>
                    <Text style={addTopingText}>cal: {calories}</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      alignSelf: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginHorizontal: hScale(10),
                      marginTop: vScale(10),
                    }}
                    onPress={() => this.addItemToCart(isExist, item)}>
                    <View style={topingContainer}>
                      <Icon
                        name={'plus'}
                        size={fScale(16)}
                        color={colors.white}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        )}
        <Button
          title={strings.addTocart}
          buttonStyle={confirmButtonStyle}
          onPress={() => {
            this.addItemToCart(isExist, item);
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headContainer: {
    width: '100%',
    height: vScale(60),
    marginTop: vScale(25),
    paddingHorizontal: hScale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemNameStyle: {
    width: hScale(110),
    fontSize: fScale(20),
    fontWeight: '700',
    color: '#BF2626',
  },
  productImageStyle: {
    width: hScale(140),
    height: hScale(140),
    borderRadius: hScale(70),
  },
  addContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: -20,
  },
  plusMinStyle: {
    width: hScale(35),
    height: hScale(35),
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topingContainer: {
    width: hScale(35),
    height: hScale(35),
    borderRadius: hScale(17.5),
    backgroundColor: colors.buttonBG,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTopingText: {
    fontSize: fScale(16),
    color: '#BF2626',
    marginVertical: vScale(5),
  },
  topingImage: {
    width: hScale(80),
    height: hScale(80),
    borderRadius: hScale(40),
  },
  confirmButtonStyle: {
    width: '80%',
    height: vScale(45),
    backgroundColor: colors.buttonBG,
    position: 'absolute',
    zIndex: 1,
    bottom: vScale(20),
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
});

const mapStateToProps = ({cartReducer}) => {
  const {cart, cartCount} = cartReducer;
  return {cart, cartCount};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addToCart,
      removeFromCart,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
