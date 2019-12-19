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
        cart: [
          ...state.cart,
          state.cart.map(item =>
            item.id == action.payload ? [...state.cart, action.payload] : '',
          ),
        ],
      };
    // get the current state.cart to new var as a backup
    // find the target element and store it in new variable
    // modify that target element
    // replace that element in state backup variable
    // replace the current state cart with the new one just modified
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
