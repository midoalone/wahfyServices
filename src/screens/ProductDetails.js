import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {images} from '../assets';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/color';
import {strings} from '../strings';

const discription =
  'سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ';

export class ProductDetails extends Component {
  state = {
    toping: false,
  };
  render() {
    const {toping} = this.state;

    const {
      headContainer,
      itemNameStyle,
      productImageStyle,
      addContainer,
      plusMinStyle,
      topingContainer,
      addTopingText,
      topingImage,
    } = styles;
    return (
      <View style={{flex: 1}}>
        <View style={headContainer}>
          <Text numberOfLines={1} style={itemNameStyle}>
            Pizza
          </Text>
          <Text style={[itemNameStyle, {fontSize: 14}]}>
            {strings.price} 200
          </Text>
        </View>
        {/* image, add and minus section */}
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            width: '100%',
            height: 180,
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={images.food} style={productImageStyle} />
          </View>
          <View style={addContainer}>
            <TouchableOpacity style={plusMinStyle}>
              <Icon name="plus" size={16} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                plusMinStyle,
                {backgroundColor: colors.white, borderWidth: 0.2},
              ]}>
              <Icon name="minus" size={16} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
            marginVertical: 20,
          }}
          onPress={() => this.setState({toping: !toping})}>
          <View style={topingContainer}>
            <Icon
              name={toping ? 'minus' : 'plus'}
              size={16}
              color={colors.white}
            />
          </View>
          <Text style={addTopingText}>Add Toping</Text>
        </TouchableOpacity>

        {/* add topings section */}
        {toping && (
          <View style={{height: 210}}>
            <FlatList
              style={{marginHorizontal: 5}}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={topingData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => {
                const {icon, title, image, calNum} = item;
                return (
                  <View
                    style={{
                      alignItems: 'center',
                      marginHorizontal: 10,
                    }}>
                    <Image source={image} style={topingImage} />
                    <Text style={addTopingText}>
                      {strings.calories} {calNum}
                    </Text>
                    <TouchableOpacity
                      style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 10,
                        marginTop: 10,
                      }}>
                      <View style={topingContainer}>
                        <Icon
                          name={'plus'}
                          size={16}
                          color={colors.white}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        )}
        <View style={{paddingHorizontal: 20}}>
          <Text style={{lineHeight: 21, fontSize: 14, color:'#7d7c7c'}}>{discription}</Text>
        </View>
      </View>
    );
  }
}

const topingData = [
  {icon: 'plus', title: 'Add Toping', image: images.food, calNum: '90'},
  {icon: 'plus', title: 'Add Toping', image: images.food_3, calNum: '100'},
  {icon: 'plus', title: 'Add Toping', image: images.food_4, calNum: '30'},
  {icon: 'plus', title: 'Add Toping', image: images.food_5, calNum: '120'},
];

const styles = StyleSheet.create({
  headContainer: {
    width: '100%',
    height: 60,
    marginTop: 25,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemNameStyle: {
    width: 80,
    fontSize: 20,
    fontWeight: '700',
    color: '#9c9c9c',
  },
  productImageStyle: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  addContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
  },
  plusMinStyle: {
    width: 35,
    height: 35,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topingContainer: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: 'gray',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTopingText: {
    fontSize: 16,
    color: '#9c9c9c',
    marginVertical: 5,
  },
  topingImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});
