import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Input, Button} from '../components/common';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signup} from '../redux/actions';
import {colors} from '../constants';
import {strings} from '../strings';
import {isEmail, isPhoneNumber} from '../constants/validator';

class Signup extends Component {
  state = {
    fullName: '',
    email: '',
    phoneNo: '',
    age: '',
    password: '',
    error: '',
    buttonLoading: false
  };

  validateSignupInputs({
    fullNameError,
    emailError,
    phoneNoError,
    passwordError,
  }) {
    if (fullNameError) {
      this.setState({error: 'fullname'});
    } else if (emailError) {
      this.setState({error: 'email'});
    } else if (phoneNoError) {
      this.setState({error: 'phone'});
    } else if (passwordError) {
      this.setState({error: 'password'});
    } else this.register();
  }

  register() {
    const {fullName, email, phone, password} = this.state;
    const {navigation} = this.props;
    this.props.signup({
      name: fullName,
      email,
      phone,
      password,
      navigation,
    });
  }

  render() {
    const {
      inputsContainer,
      welcomeBackText,
      termsAndConditionsStyle,
      termsContainer,
    } = styles;
    const {
      fullName,
      email,
      phoneNo,
      password,
      error,
      age,
      buttonLoading
    } = this.state;

    const { loading } = this.props

    const emailError = email.length == 0 || !isEmail(email);
    const isEmailError = error === 'email';

    const fullNameError = fullName.length == 0;
    const isNameError = error === 'fullname';

    const phoneNoError = phoneNo.length == 0 || !isPhoneNumber(phoneNo);
    const isPhoneNoError = error === 'phone';

    const passwordError = password.length == 0 || password.length < 6;
    const isPasswordError = error === 'password';

    const {
      emailErrorText,
      nameErrorText,
      phoneNoErrorText,
      passwordErrorText,
      birthdayErrorText,
    } = strings.errorMessages;

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
            placeholder={strings.fullName}
            placeholderTextColor={colors.placeholder}
            inputStyle={{fontSize: 18}}
            value={fullName}
            onChangeText={fullName => this.setState({fullName, error: ''})}
            errorMessage={isNameError && nameErrorText}
          />
          <Input
            placeholder={strings.email}
            placeholderTextColor={colors.placeholder}
            inputStyle={{fontSize: 18}}
            value={email}
            onChangeText={email => this.setState({email, error: ''})}
            errorMessage={isEmailError && emailErrorText}
          />
          <Input
            placeholder={strings.phone}
            placeholderTextColor={colors.placeholder}
            inputStyle={{fontSize: 18}}
            value={phoneNo}
            keyboardType="phone-pad"
            onChangeText={phoneNo => this.setState({phoneNo, error: ''})}
            errorMessage={isPhoneNoError && phoneNoErrorText}
          />
          <Input
            placeholder={strings.age}
            placeholderTextColor={colors.placeholder}
            inputStyle={{fontSize: 18}}
            value={age}
            onChangeText={age => this.setState({age, error: ''})}
          />
          <Input
            placeholder={strings.password}
            placeholderTextColor={colors.placeholder}
            inputStyle={{fontSize: 18}}
            secureTextEntry
            value={password}
            onChangeText={password => this.setState({password, error: ''})}
            errorMessage={isPasswordError && passwordErrorText}
          />

          <Button
            title={strings.signup}
            loading={buttonLoading}
            buttonStyle={{width: '85%'}}
            onPress={() =>
              this.validateSignupInputs({
                fullNameError,
                emailError,
                phoneNoError,
                passwordError,
              })
            }
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signup,
    },
    dispatch,
  );
};
export default connect(null, mapDispatchToProps)(Signup);
