import { Post } from "models/post";

// STATE type
export interface PostsState {
  items: Map<number, Post[]>,
  loading: boolean,
  error: string,
}

// Action type values MUST BE UNIQUE among all other reducers;

export const ADD = 'ADD_POSTS';
export const LOADING = 'LOADING_POSTS';
export const ERROR = 'ERROR_POSTS';


interface AddActionPayload {
  id: number,
  posts: Post[],
}

interface AddAction {
  type: typeof ADD,
  payload: AddActionPayload
}

interface LoadingAction {
  type: typeof LOADING,
}

interface ErrorAction {
  type: typeof ERROR,
  payload: string,
}

export type PostsActionTypes = (
  AddAction | 
  LoadingAction | 
  ErrorAction
);