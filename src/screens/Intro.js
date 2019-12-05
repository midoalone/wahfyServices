import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {images} from '../assets';
import {strings} from '../strings';
import {colors} from '../constants';
import {Button} from '../components/common';

export class Intro extends Component {
  render() {
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
    width: '100%',
    height: '100%',
  },
  textsContainer: {
    marginTop: 50,
    marginStart: 30,
  },
  introTextStyle: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.white,
  },
  setLocationText: {
    fontSize: 15,
    marginTop: 5,
  },
  buttonsContainer: {
    marginTop: 250,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
