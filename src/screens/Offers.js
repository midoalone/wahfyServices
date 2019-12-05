import React, {Component} from 'react';
import { FlatList} from 'react-native';
import {OfferCard} from '../components/OfferCard';
import {images} from '../assets';

export class Offers extends Component {
  render() {
    return (
      <FlatList
        style={{marginTop: 50}}
        data={offersData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <OfferCard item={item} />;
        }}
      />
    );
  }
}

const offersData = [
  {
    image: images.food_3,
    offerName: 'سبانخ جبن',
    price: '200',
    description:
      'سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ',
    type: 'Take away',
  },
  {
    image: images.food_2,
    offerName: 'سبانخ جبن',
    price: '200',
    description:
      'سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ',
    type: 'Take away',
  },
  {
    image: images.food_4,
    offerName: 'سبانخ جبن',
    price: '200',
    description:
      'سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ',
    type: 'Delivery',
  }, {
    image: images.food_1,
    offerName: 'سبانخ جبن',
    price: '200',
    description:
      'سبانخ سبانخ سبانخ سبانخ سبانخ  سبانخ سبانخ  سبانخ سبانخ  سبانخ',
    type: 'Delivery',
  },
];

