import {
  SET_USERS,
  UsersActionTypes,
} from './types';

export const getAll = () => async (dispatch: (action: UsersActionTypes) => void) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/')
  const users = await response.json();
  
  dispatch({
    type: SET_USERS,
    payload: users
  })
}