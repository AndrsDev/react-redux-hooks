import { User } from "models/user";

// STATE type
export interface UsersState {
  items: User[],
  loading: boolean,
  error: string,
}

// Action types
export const SET_USERS = 'SET_USERS';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

interface SetUsersAction {
  type: typeof SET_USERS,
  payload: User[]
}

interface LoadingAction {
  type: typeof LOADING,
}

interface ErrorAction {
  type: typeof ERROR,
  payload: string,
}

export type UsersActionTypes = SetUsersAction | LoadingAction | ErrorAction;