import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Input, Button} from '../components/common';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  userNameChanged,
  emailChanged,
  phoneChanged,
  dateChanged,
  passwordChanged,
} from '../redux/actions/AuthActions';
import {colors} from '../constants';
import {strings} from '../strings';

class Signup extends Component {
  onNameChanged(text) {
    this.props.userNameChanged(text);
  }
  onEmailChanged(text) {
    this.props.emailChanged(text);
  }
  onPhoneChanged(text) {
    this.props.phoneChanged(text);
  }
  onDateChanged(text) {
    this.props.dateChanged(text);
  }
  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }
  render() {
    const {
      inputsContainer,
      welcomeBackText,
      termsAndConditionsStyle,
      termsContainer,
    } = styles;
    const {userName, email, password, dateOfBirthDay, phone} = this.props;
    return (
      <ScrollView
        style={{
          flex: 1,
          alignIterms: 'center',
        }}
        showsVerticalScrollIndicator={false}>
        <KeyboardAwareScrollView
          contentContainerStyle={inputsContainer}
          behavior="padding">
          <Text style={welcomeBackText}>{strings.createAccount}</Text>
          <Input
            placeholder={strings.userName}
            placeholderTextColor={colors.placeholder}
            value={userName}
            onChangeText={this.onNameChanged.bind(this)}
          />
          <Input
            placeholder={strings.email}
            placeholderTextColor={colors.placeholder}
            value={email}
            onChangeText={this.onEmailChanged.bind(this)}
          />
          <Input
            placeholder={strings.phone}
            placeholderTextColor={colors.placeholder}
            value={phone}
            onChangeText={this.onPhoneChanged.bind(this)}
          />
          <Input
            placeholder={strings.date}
            placeholderTextColor={colors.placeholder}
            value={dateOfBirthDay}
            onChangeText={this.onDateChanged.bind(this)}
          />
          <Input
            placeholder={strings.password}
            placeholderTextColor={colors.placeholder}
            secureTextEntry
            value={password}
            onChangeText={this.onPasswordChanged.bind(this)}
          />

          <Button
            title={strings.signup}
            buttonStyle={{width: '85%'}}
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <View style={termsContainer}>
            <Text style={termsAndConditionsStyle}>{strings.byClicking}</Text>
            <Text style={termsAndConditionsStyle}>{strings.terms}</Text>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputsCard: {
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  inputsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeBackText: {
    color: colors.black,
    fontSize: 25,
    marginTop: 70,
    marginBottom: 40,
    fontWeight: '600',
    textAlign: 'center',
  },
  loginToAccountText: {
    color: colors.black,
    fontSize: 14,
    marginTop: 15,
  },
  termsContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  termsAndConditionsStyle: {
    color: colors.black,
    fontSize: 12,
  },
});

const mapStateToProps = ({authReducer}) => {
  const {userName, email, password, dateOfBirthDay, phone} = authReducer;
  return {userName, email, password, dateOfBirthDay, phone};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      userNameChanged,
      emailChanged,
      phoneChanged,
      dateChanged,
      passwordChanged,
    },
    dispatch,
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
