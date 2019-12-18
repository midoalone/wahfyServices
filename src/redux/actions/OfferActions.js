import {base_URL} from '../../services/API';
import {GETOFFERS, GETOFFERSMENU} from './types';

export const getOffers = ({token}) => async dispatch => {
  const request = await fetch(`${base_URL}offers`, {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const offers = await request.json();
  try {
    if (offers) {
      dispatch({type: GETOFFERS, payload: offers.data.data});
    }
  } catch (error) {
    alert(error.message);
  }
};

export const getOffersMenu = ({token, id,type}) => async dispatch => {
  const request = await fetch(`${base_URL}offers/${id}?now/type=${type}`, {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const offersMenu = await request.json();
  try {
    if (offersMenu) {
      dispatch({type: GETOFFERSMENU, payload: offersMenu.data});
    }
  } catch (error) {
    alert(error.message);
  }
};
