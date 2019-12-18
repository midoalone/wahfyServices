import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {images} from '../assets';
import {strings} from '../strings';
import {colors} from '../constants';
import {Button} from '../components/common';
import {sWidth, sHeight, fScale, vScale, hScale} from 'step-scale';
import {connect} from 'react-redux';

class Intro extends Component {
  render() {
    const {user} = this.props;
    if (user) {
      this.props.navigation.navigate('Home');
    }
    const {
      imageStyle,
      textsContainer,
      introTextStyle,
      setLocationText,
      buttonsContainer,
    } = styles;
    return (
      <ImageBackground source={images.food} style={imageStyle}>
        <View style={textsContainer}>
          <Text style={introTextStyle}>{strings.delivered}</Text>
          <Text style={introTextStyle}>{strings.fastFood}</Text>
          <Text style={introTextStyle}>{strings.toYour}</Text>
          <Text style={introTextStyle}>{strings.door}</Text>
          <Text style={[introTextStyle, setLocationText]}>
            {strings.setLocation}
          </Text>
          <Text style={[introTextStyle, setLocationText]}>
            {strings.resturant}
          </Text>
        </View>
        <View style={buttonsContainer}>
          <Button
            title={strings.login}
            onPress={() => this.props.navigation.navigate('Login')}
          />
          <Button
            title={strings.facebook}
            buttonStyle={{backgroundColor: '#4267B2'}}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    width: sWidth,
    height: sHeight,
  },
  textsContainer: {
    marginTop: vScale(50),
    marginStart: hScale(30),
  },
  introTextStyle: {
    fontSize: fScale(40),
    fontWeight: '700',
    color: colors.white,
  },
  setLocationText: {
    fontSize: fScale(15),
    marginTop: vScale(5),
  },
  buttonsContainer: {
    marginTop: vScale(250),
    height: vScale(120),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const mapStateToProps = ({authReducer}) => {
  const {user} = authReducer;
  return {user};
};

export default connect(mapStateToProps, null)(Intro);
