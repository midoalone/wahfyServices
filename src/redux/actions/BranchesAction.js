import {base_URL} from '../../services/API';
import {GETBRANCHES} from './types';

export const getBranches = ({token}) => async dispatch => {
  const request = await fetch(`${base_URL}branches`, {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const branches = await request.json();
  try {
    if (branches) {
      dispatch({type: GETBRANCHES, payload: branches.data});
    }
  } catch (error) {
    alert(error.message);
  }
};
