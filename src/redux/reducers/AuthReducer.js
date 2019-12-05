import {
  USERNAMECHANGED,
  EMAILCHANGED,
  DATEOFBIRTHDAYCHANGED,
  PHONECHANGED,
  PASSWORDCHANGED,
} from '../actions/types';

const INITIALSTATE = {
  userName: '',
  email: '',
  password: '',
  dateOfBirthDay: '',
  phone: '',
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case USERNAMECHANGED:
      return {...state, userName: action.payload};
    case EMAILCHANGED:
      return {...state, email: action.payload};
    case DATEOFBIRTHDAYCHANGED:
      return {...state, dateOfBirthDay: action.payload};
    case PHONECHANGED:
      return {...state, phone: action.payload};
    case PASSWORDCHANGED:
      return {...state, password: action.payload};
    default:
      return state;
  }
};
