import {ADDTOCART, INCREMENTCART, DECREMENTCART, REMOVEFROMCART} from './types';

export const addToCart = (item) => {
  return async dispatch => {
    dispatch({
      type: ADDTOCART,
      payload: (item),
    });
  };
};
export const removeFromCart = id => {
  return async dispatch => {
    await dispatch({type: REMOVEFROMCART, payload: id});
  };
};

export const incermentCount = (qty, id) => {
  return async dispatch => {
    await dispatch({
      type: INCREMENTCART,
      payload: (qty, id),
    });
  };
};

export const decermentCount = (qty, id) => {
  return async dispatch => {
    await dispatch({
      type: DECREMENTCART,
      payload: (qty, id),
    });
  };
};

