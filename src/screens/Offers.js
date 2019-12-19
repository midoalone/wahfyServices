import React, {Component} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {OfferCard} from '../components/OfferCard';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getOffers} from '../redux/actions/OfferActions';
import {colors} from '../constants';

class Offers extends Component {
  componentDidMount() {
    const {token} = this.props.user.data;
    this.props.getOffers({token});
  }
  render() {
    const {offers, loading} = this.props;
    return (
      <>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={colors.buttonBG}
            style={{marginTop: 15}}
          />
        ) : (
          <FlatList
            style={{paddingTop: 20}}
            data={offers[1]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <OfferCard
                  item={item}
                  onPress={() =>
                    this.props.navigation.navigate('OffersMenu', {
                      offerId: item.id,
                      serviceType: item.service_type,
                      offerType: item.offer_type,
                    })
                  }
                />
              );
            }}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = ({offersReducer, authReducer}) => {
  const {offers, loading} = offersReducer;
  const {user} = authReducer;
  return {offers, user, loading};
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
