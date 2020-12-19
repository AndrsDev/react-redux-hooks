import { Post } from "models/post";

// STATE type
export interface PostsState {
  items: Post[],
  loading: boolean,
  error: string,
}

// Action type values MUST BE UNIQUE among all other reducers;
export const SET = 'SET_POSTS';
export const LOADING = 'LOADING_POSTS';
export const ERROR = 'ERROR_POSTS';

interface SetAction {
  type: typeof SET,
  payload: Post[]
}

interface LoadingAction {
  type: typeof LOADING,
}

interface ErrorAction {
  type: typeof ERROR,
  payload: string,
}

export type PostsActionTypes = SetAction | LoadingAction | ErrorAction;