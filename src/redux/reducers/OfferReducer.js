import {GETOFFERS, GETOFFERSMENU} from '../actions/types';

const INITIALSTATE = {
  offers: [],
  offersMenu: [],
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case GETOFFERS:
      return {
        ...state,
        offers: [...state.offers, action.payload],
      };
    case GETOFFERSMENU:
      return {
        ...state,
        offersMenu: [...state.offersMenu, action.payload],
      };
    default:
      return state;
  }
};
