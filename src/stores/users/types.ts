import { User } from "models/user";


// STATE type
export interface UsersState {
  items: User[],
  itemsIndexById: Map<any, number>,
  loading: boolean,
  error: string,
}

// Action type values MUST BE UNIQUE among all other reducers;
export const SET = 'SET_USERS';
export const LOADING = 'LOADING_USERS';
export const ERROR = 'ERROR_USERS';

interface SetAction {
  type: typeof SET,
  payload: User[]
}

interface LoadingAction {
  type: typeof LOADING,
}

interface ErrorAction {
  type: typeof ERROR,
  payload: string,
}

export type UsersActionTypes = SetAction | LoadingAction | ErrorAction;