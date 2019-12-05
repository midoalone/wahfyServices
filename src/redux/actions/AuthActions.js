import {
    USERNAMECHANGED,
    EMAILCHANGED,
    DATEOFBIRTHDAYCHANGED,
    PHONECHANGED,
    PASSWORDCHANGED,
  } from './types';
  
  export const userNameChanged = text => {
    return {
      type: USERNAMECHANGED,
      payload: text,
    };
  };
  
  export const emailChanged = text => {
    return {
      type: EMAILCHANGED,
      payload: text,
    };
  };
  
  export const phoneChanged = text => {
    return {
      type: PHONECHANGED, 
      payload: text,
    };
  };
  
  export const dateChanged = text => {
    return {
      type: DATEOFBIRTHDAYCHANGED,
      payload: text,
    };
  };
  
  export const passwordChanged = text => {
    return {
      type: PASSWORDCHANGED,
      payload: text,
    };
  };
  