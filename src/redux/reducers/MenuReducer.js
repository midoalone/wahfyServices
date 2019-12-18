import {GETMENU} from '../actions/types';

const INITIALSTATE = {
  categories: [],
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case GETMENU:
      return {...state, categories: action.payload};
    default:
      return state;
  }
};
