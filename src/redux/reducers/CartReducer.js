import {
  ADDTOCART,
  REMOVEFROMCART,
  INCREMENTCART,
  DECREMENTCART,
} from '../actions/types';

const initialState = {
  cart: [],
  qty: 1,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      return {
        ...state,
        cart: [...state.cart, {id: action.payload.id, qty: action.payload.id + 1}],
      };
    case REMOVEFROMCART:
      return {
        ...state,
        cart: state.cart.filter(element => element.id != action.payload),
      };
    case INCREMENTCART:
      return {...state, qty: state.qty + 1};
    case DECREMENTCART:
      return {...state, qty: state.qty - 1};
    default:
      return state;
  }
};
