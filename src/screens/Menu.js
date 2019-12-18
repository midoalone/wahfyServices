import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {strings} from '../strings';
import {images} from '../assets';
import Swiper from 'react-native-swiper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart, removeFromCart} from '../redux/actions/CartActions';
import {hScale, vScale, fScale, sWidth} from 'step-scale';
import {getCategories} from '../redux/actions';
import {base_URL} from '../services/API';
import {colors} from '../constants';

class Menu extends Component {
  state = {
    categories: [],
    menuItems: [],
    extras: [],
    screenLoading: true,
  };

  componentDidMount(id) {
    this.getCategories();
    this.getMenuItemsAndExtras(id);
  }

  async getCategories() {
    const {token} = this.props.user.data;
    const getCategories = await fetch(`${base_URL}menu/categories`, {
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const categories = await getCategories.json();

    this.setState({categories: categories.data, screenLoading: false});
  }

  async getMenuItemsAndExtras(id) {
    const {token} = this.props.user.data;
    const catId = id || 1;
    const getMenuItems = await fetch(
      `${base_URL}menu/categories/${catId}/items`,
      {
        method: 'GET',
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    const menuItems = await getMenuItems.json();
    //get extras
    const getExtras = await fetch(
      `${base_URL}menu/categories/${catId}/extras`,
      {
        method: 'GET',
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    const extras = await getExtras.json();
    this.setState({
      menuItems: menuItems.data,
      extras: extras.data,
      screenLoading: false,
    });
  }

  addItemToCart(isExist, item) {
    if (!isExist) {
      this.props.addToCart(item);
    }
  }

  render() {
    const swiperImages = [
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 2,
        image:
          'https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 3,
        image:
          'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      },
    ];

    const type = this.props.navigation.getParam('type', 'takeaway');
    const {
      container,
      bannerContainer,
      bannerStyle,
      itemContainer,
      menuTextStyle,
      itemImageStyle,
      titleStyle,
      menuItemContainer,
      buttonStyle,
      menuImageStyle,
      menuListStyle,
      relatedItemContainer,
      relatedItemImageStyle,
    } = styles;

    const {categories, menuItems, screenLoading} = this.state;
    const {cart} = this.props;

    return (
      <ScrollView
        style={container}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        showsVerticalScrollIndicator={false}>
        {screenLoading ? (
          <ActivityIndicator size="large" color={colors.buttonBG} />
        ) : (
          <>
            <View style={bannerContainer}>
              <Swiper
                width={'100%'}
                height={'25%'}
                autoplay
                autoplayTimeout={3}
                autoplayDirection={true}>
                {swiperImages.map((slide, index) => {
                  return (
                    <Image
                      key={index}
                      resizeMode="cover"
                      style={bannerStyle}
                      source={{uri: slide.image}}
                    />
                  );
                })}
              </Swiper>
            </View>
            <View
              style={{
                height: '18%',
                borderBottomColor: colors.buttonBG,
                borderBottomWidth: 0.5,
              }}>
              <FlatList
                style={{marginTop: 5}}
                contentContainerStyle={{
                  paddingHorizontal: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                renderItem={({item, index}) => {
                  const {id, image, name_en} = item;
                  return (
                    <TouchableOpacity
                      onPress={() => this.getMenuItemsAndExtras(id)}>
                      <Image source={{uri: image}} style={itemImageStyle} />
                      <Text style={titleStyle}>{name_en}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            <View
              style={{width: '100%', marginStart: hScale(10), marginTop: 10}}>
              <Text style={menuTextStyle}>{strings.menu}</Text>
            </View>
            {/* menu list */}
            <FlatList
              style={menuListStyle}
              contentContainerStyle={{paddingHorizontal: hScale(10)}}
              showsVerticalScrollIndicator={false}
              data={menuItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => {
                const {id, image, name_en, price, description_en} = item;
                const isExist = cart.includes(item);
                return (
                  <TouchableOpacity
                    key={id}
                    style={menuItemContainer}
                    onPress={() =>
                      this.props.navigation.navigate('ProductDetails', {item})
                    }>
                    <Image source={{uri: image}} style={menuImageStyle} />

                    <View
                      style={{
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                      }}>
                      <Text style={titleStyle}>{name_en}</Text>
                      <Text style={titleStyle}>
                        {strings.price} {price}
                      </Text>
                      <Text numberOfLines={2} style={{width: hScale(110)}}>
                        {description_en}
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={buttonStyle}
                      onPress={() => this.addItemToCart(isExist, item)}>
                      <Text style={{color: colors.white}}>Add to cart</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                );
              }}
            />
            {/* related list */}
            <View style={{height: vScale(150)}}>
              <Text
                style={{
                  fontSize: fScale(18),
                  fontWeight: '700',
                  marginStart: hScale(10),
                  marginTop: vScale(10),
                }}>
                {strings.relatedOffers}
              </Text>
              <FlatList
                style={{marginVertical: vScale(15)}}
                contentContainerStyle={{paddingHorizontal: hScale(5)}}
                showsHorizontalScrollIndicator={false}
                data={relatedOffers}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                renderItem={({item, index}) => {
                  const {image} = item;
                  return (
                    <TouchableOpacity
                      style={relatedItemContainer}
                      onPress={() => this.setState({selectedIndex: index})}>
                      <Image source={image} style={relatedItemImageStyle} />
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </>
        )}
      </ScrollView>
    );
  }
}

const relatedOffers = [
  {
    id: 1,
    image: images.food_1,
  },
  {
    id: 2,
    image: images.food_3,
  },

  {
    id: 3,
    image: images.food_4,
  },
  {
    id: 4,
    image: images.food_3,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: sWidth,
  },
  bannerContainer: {
    width: '100%',
    height: '25%',
  },
  bannerStyle: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  menuTextStyle: {
    fontSize: fScale(18),
    fontWeight: 'bold',
  },
  itemImageStyle: {
    width: hScale(110),
    height: vScale(80),
    marginHorizontal: hScale(10),
    borderBottomLeftRadius: vScale(15),
    borderBottomRightRadius: vScale(15),
  },
  titleStyle: {
    fontSize: fScale(15),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: vScale(5),
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: vScale(10),
  },
  menuImageStyle: {
    width: hScale(110),
    height: vScale(90),
    borderRadius: hScale(10),
    resizeMode: 'cover',
  },
  buttonStyle: {
    width: hScale(100),
    height: vScale(40),
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hScale(30),
  },
  menuListStyle: {
    marginTop: vScale(5),
    width: sWidth,
    height: vScale(280),
  },
  relatedItemContainer: {},
  relatedItemImageStyle: {
    width: hScale(180),
    height: vScale(80),
    marginHorizontal: hScale(10),
    borderRadius: hScale(15),
  },
});

const mapStateToProps = ({cartReducer, authReducer}) => {
  const {cart, cartCount, categories} = cartReducer;
  const {user} = authReducer;
  return {cart, cartCount, categories, user};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addToCart,
      removeFromCart,
      getCategories,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
