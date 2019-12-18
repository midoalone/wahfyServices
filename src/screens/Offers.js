import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {OfferCard} from '../components/OfferCard';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getOffers} from '../redux/actions/OfferActions';

class Offers extends Component {
  componentDidMount() {
    const {token} = this.props.user.data;
    this.props.getOffers({token});
  }
  render() {
    const {offers} = this.props;
    return (
      <FlatList
        style={{paddingTop: 20}}
        data={offers[0]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <OfferCard
              item={item}
              onPress={() =>
                this.props.navigation.navigate('OffersMenu', {
                  offerId: item.id,
                  serviceType: item.service_type,
                  offerType: item.offer_type
                })
              }
            />
          );
        }}
      />
    );
  }
}

const mapStateToProps = ({offersReducer, authReducer}) => {
  const {offers} = offersReducer;
  const {user} = authReducer;
  return {offers, user};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getOffers,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
