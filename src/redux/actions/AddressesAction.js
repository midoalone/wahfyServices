import {base_URL, post_request} from '../../services/API';
import {GETADDRESS, NEWADDRESS, DELETEADDRESS} from './types';

export const newAddress = ({
  name,
  street,
  building_number,
  floor_number,
  landmark,
  city_id,
  area_id,
  navigation,
  token
}) => async dispatch => {
  const addressData = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      street,
      building_number,
      floor_number,
      landmark,
      city_id,
      area_id,
    }),
  };
  const request = await fetch(`${base_URL}address`, addressData);
  const address = await request.json();
  try {
    if (address) {
      dispatch({type: NEWADDRESS, payload: address});
      navigation.navigate('Menu');
    }
  } catch (error) {
    console.log(err);
  }
};

export const getAddresses = () => async dispatch => {
  
  const {token} = this.props.user.data;
  const request = await fetch(`${base_URL}address`, {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const myAddresses = await request.json();
  try {
    if (myAddresses.data) {
      dispatch({type: GETADDRESS, payload: myAddresses.data});
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteAddress = id => {
  return async(dispatch)=>{
await dispatch({type:DELETEADDRESS,payload:id})
  }
};
