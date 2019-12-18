import {base_URL} from '../../services/API';
import {GETMENU} from './types';
import AsyncStorage from '@react-native-community/async-storage';

export const getCategories = () => {
//   const token = AsyncStorage.getItem('@TOKEN');
  const getMenuResult = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      //   Authorization: token ? `Bearer ${JSON.parse(token)}` : '',
    },
  };

  return async dispatch => {
    const request = await fetch(`${base_URL}menu/categories`, getMenuResult);
    const categories = await request.json();

    try {
      if (categories) {
        dispatch({type: GETMENU, payload: categories});
      }
    } catch (error) {
      console.log(error);
    }
  };
};
