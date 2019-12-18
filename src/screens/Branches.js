import React, {Component} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../constants';
import {hScale, vScale} from 'step-scale';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBranches} from '../redux/actions/BranchesAction';
import {BranchCard} from '../components/BranchCard';

class Branches extends Component {
  state = {
    selectedAddressId: null,
  };

  componentDidMount() {
    const {token} = this.props.user.data;
    this.props.getBranches({token});
  }

  render() {
    const {selectedAddressId} = this.state;
    const {branches} = this.props;
    const isEmptyAddresses = branches.length == 0;
    return (
      <>
        {isEmptyAddresses ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color={colors.buttonBG} />
          </View>
        ) : (
          <FlatList
            style={{paddingVertical: vScale(10)}}
            data={branches[0]}
            extraData={this.props}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              const isSelected = index == selectedAddressId;
              return (
                <BranchCard
                  item={item}
                  isSelected={isSelected}
                  onPress={() =>
                    this.props.navigation.navigate('Menu', {branchItem: item})
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

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: vScale(130),
    borderWidth: 0.5,
    borderColor: '#b8b3b3',
    alignSelf: 'center',
    marginTop: vScale(10),
    paddingVertical: vScale(15),
  },
  headContainer: {
    flexDirection: 'row',
    marginStart: hScale(15),
    alignItems: 'center',
  },
  selectionContainer: {
    width: hScale(25),
    height: hScale(25),
    borderRadius: hScale(12.5),
    borderWidth: 1,
    borderColor: '#b8b3b3',
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: hScale(10),
  },
  selectedView: {
    width: hScale(15),
    height: hScale(15),
    borderRadius: hScale(7.5),
    backgroundColor: colors.buttonBG,
  },
  iconContainer: {
    width: hScale(22),
    height: hScale(22),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    end: hScale(15),
  },
  addressContainer: {
    width: '90%',
    height: vScale(80),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: hScale(20),
  },
  buttonStyle: {
    width: '90%',
    height: vScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: vScale(15),
  },
});

const mapStateToProps = ({branchesReducer, authReducer}) => {
  const {branches} = branchesReducer;
  const {user} = authReducer;
  return {branches, user};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getBranches,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Branches);
