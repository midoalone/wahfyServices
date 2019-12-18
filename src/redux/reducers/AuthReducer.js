import {
  START_LOADING,
  LOGINSUCCESS,
  LOGINFAILED,
  REGISTERSUCCESS,
  REGISTERFAILED,
} from '../actions/types';

const INITIALSTATE = {
  user: null,
  loading: false,
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case START_LOADING:
      return {...state, loading: true};
    case LOGINSUCCESS:
      return {...state, loading: false, user: action.payload};
    case LOGINFAILED:
      return {...state, loading: false};
    case REGISTERSUCCESS:
      return {...state, loading: false, user: action.payload};
    case REGISTERFAILED:
      return {...state, loading: false};
    default:
      return state;
  }
};
