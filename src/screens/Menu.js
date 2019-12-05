import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {strings} from '../strings';
import {images} from '../assets';
import Swiper from 'react-native-swiper';
import { colors } from '../constants';

class Menu extends Component {
  state = {
    selectedIndex: 0,
    banner: [],
  };
  render() {
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

    const {selectedIndex, banner} = this.state;
    return (
      <ScrollView style={container} showsVerticalScrollIndicator={false}>
        <View style={bannerContainer}>
          <Swiper width={'100%'} autoplay autoplayTimeout={3}>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQvqd6ZrUYZpmj4-q3gJqa-XVE6asbrOs8xu9jUSt4rlnf8Bie',
              }}
              style={{width: '100%', height: '100%'}}
            />
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzK_ML0TCZoGgPQbpjtgHoYSNrxKjo2pIwg0qbexQxvUGvgX-7',
              }}
              style={{width: '100%', height: '100%'}}
            />
            {/* {banner.map((slide, index) => {
              return (
                <Image
                  key={index}
                  resizeMode="cover"
                  style={bannerStyle}
                  source={images.food}
                />
              );
            })} */}
          </Swiper>
        </View>
        <View style={{height: 120}}>
          <FlatList
            style={{marginTop: 5}}
            contentContainerStyle={{paddingHorizontal: 5}}
            showsHorizontalScrollIndicator={false}
            data={_data}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            renderItem={({item, index}) => {
              const {image, title} = item;
              return (
                <TouchableOpacity
                  onPress={() => this.setState({selectedIndex: index})}>
                  <Image source={image} style={itemImageStyle} />
                  <Text style={titleStyle}>{title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{width: '100%', marginStart: 10}}>
          <Text style={menuTextStyle}>{strings.menu}</Text>
        </View>
        {/* menu list */}
        <FlatList
          style={menuListStyle}
          contentContainerStyle={{paddingHorizontal: 10}}
          showsHorizontalScrollIndicator={false}
          data={_data[selectedIndex].subCategory}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            const {image, title, price, discription} = item;
            return (
              <View style={menuItemContainer}>
                <Image source={image} style={menuImageStyle} />
                <View
                  style={{
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                  }}>
                  <Text style={titleStyle}>{title}</Text>
                  <Text style={titleStyle}>
                    {strings.price} : {price}
                  </Text>
                  <Text numberOfLines={2} style={{width: 110}}>
                    {discription}
                  </Text>
                </View>

                <TouchableOpacity
                  style={buttonStyle}
                  onPress={() => alert('Added to cart')}>
                  <Text style={{color: colors.white}}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        {/* related list */}
        <View style={{height: 150}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              marginStart: 10,
              marginTop: 10,
            }}>
            {strings.relatedOffers}
          </Text>
          <FlatList
            style={{marginVertical: 15}}
            contentContainerStyle={{paddingHorizontal: 5}}
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
      </ScrollView>
    );
  }
}

const _data = [
  {
    id: 1,
    image: images.food_1,
    title: 'food1',
    subCategory: [
      {
        image: images.food_1,
        title: 'سبانخ',
        price: 630,
        discription:
          'سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ',
      },
      {
        image: images.food_1,
        title: 'سبانخ',
        price: 630,
        discription:
          'سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ',
      },
      {
        image: images.food_1,
        title: 'سبانخ',
        price: 630,
        discription:
          'سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ',
      },
      {
        image: images.food_1,
        title: 'سبانخ',
        price: 630,
        discription:
          'سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ',
      },
      {
        image: images.food_1,
        title: 'سبانخ',
        price: 630,
        discription:
          'سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ',
      },
      {
        image: images.food_1,
        title: 'سبانخ',
        price: 630,
        discription:
          'سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ',
      },
      {
        image: images.food_1,
        title: 'سبانخ',
        price: 630,
        discription:
          'سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ',
      },
      {
        image: images.food_1,
        title: 'سبانخ',
        price: 630,
        discription:
          'سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ',
      },
    ],
  },
  {
    id: 2,
    image: images.food_1,
    title: 'food2',
    subCategory: [
      {image: images.food, title: 'سبانخ', price: 630},
      {image: images.food, title: 'سبانخ', price: 630},
      {image: images.food, title: 'سبانخ', price: 630},
      {image: images.food, title: 'سبانخ', price: 630},
      {image: images.food, title: 'سبانخ', price: 630},
      {image: images.food, title: 'سبانخ', price: 630},
      {image: images.food, title: 'سبانخ', price: 630},
      {image: images.food, title: 'سبانخ', price: 630},
    ],
  },
  {
    id: 3,
    image: images.food_1,
    title: 'food3',
    subCategory: [
      {image: images.food_2, title: 'سبانخ', price: 630},
      {image: images.food_2, title: 'سبانخ', price: 630},
      {image: images.food_2, title: 'سبانخ', price: 630},
      {image: images.food_2, title: 'سبانخ', price: 630},
      {image: images.food_2, title: 'سبانخ', price: 630},
      {image: images.food_2, title: 'سبانخ', price: 630},
      {image: images.food_2, title: 'سبانخ', price: 630},
      {image: images.food_2, title: 'سبانخ', price: 630},
    ],
  },
  {
    id: 4,
    image: images.food_1,
    title: 'food4',
    subCategory: [
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
    ],
  },
];

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
    width: '100%',
  },
  bannerContainer: {
    width: '100%',
    height: 236,
    marginBottom: 10,
  },
  bannerStyle: {
    width: '100%',
    height: 216,
    borderRadius: 13,
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  menuTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemImageStyle: {
    width: 110,
    height: 80,
    marginHorizontal: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  menuImageStyle: {
    width: 110,
    height: 90,
    borderRadius: 10,
  },
  buttonStyle: {
    width: 100,
    height: 40,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  menuListStyle: {
    marginTop: 5,
    width: '100%',
    height: 280,
  },
  relatedItemContainer: {},
  relatedItemImageStyle: {
    width: 180,
    height: 80,
    marginHorizontal: 10,
    borderRadius: 15,
  },
});

export default Menu;
