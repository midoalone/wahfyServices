import {base_URL} from '../../services/API';
import {
  START_LOADING,
  LOGINSUCCESS,
  LOGINFAILED,
  REGISTERSUCCESS,
  REGISTERFAILED,
} from './types';
import AsyncStorage from '@react-native-community/async-storage';

export const login = ({email, password, navigation}) => async dispatch => {
  const formData = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };
    dispatch({type: START_LOADING});
    const request = await fetch(`${base_URL}auth/login`, formData);
    const user = await request.json();

    try {
      if (user) {
        // await AsyncStorage.setItem('@TOKEN',JSON.stringify(user.data.token))
        dispatch({type: LOGINSUCCESS, payload: user});
        navigation.navigate('Home');
      } else {
        dispatch({type: LOGINFAILED});
      }
    } catch (error) {
      console.log(error);
    }
};

export const signup = ({
  name,
  email,
  phone,
  password,
  navigation,
}) => async dispatch =>  {
  const formData = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      password,
    }),
  };
    const request = await fetch(`${base_URL}auth/register`, formData);
    dispatch({type: START_LOADING});
    console.log('requestrequest', request)

    const user = await request.json();
    try {
      if (user) {
        dispatch({type: REGISTERSUCCESS, payload: user});
        navigation.navigate('Home');
      } else {
        dispatch({type: REGISTERFAILED});
      }
    } catch (error) {
      alert(error);
    }
};
