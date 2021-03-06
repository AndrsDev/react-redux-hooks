import { User } from 'models/user';
import {
  ERROR,
  LOADING,
  SET,
  UsersActionTypes,
} from './types';

export const getAllUsers = () => async (dispatch: (action: UsersActionTypes) => void) => {
  dispatch({
    type: LOADING,
  })
  try{
    const response: Response = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok) throw new Error(`Couldn't fetch users.`)

    const users: User[] = await response.json();
    dispatch({
      type: SET,
      payload: users
    })

  } catch (e) {
    dispatch({
      type: ERROR,
      payload: e.message,
    })
  } 
}