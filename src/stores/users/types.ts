import { User } from "models/user";

// STATE type
export interface UsersState {
  items: User[]
}


// Action types
export const SET_USERS = 'SET_USERS';

interface SetUsersAction {
  type: typeof SET_USERS
  payload: User[]
}

export type UsersActionTypes = SetUsersAction;
