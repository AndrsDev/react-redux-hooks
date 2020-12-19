
import {
  ERROR,
  LOADING,
  SET,
  PostsActionTypes,
  PostsState,
} from './types';

const initialState : PostsState = {
  items: [],
  loading: false,
  error: '',
};

function postReducer(state: PostsState = initialState, action: PostsActionTypes) : PostsState {
  switch (action.type) {

    case SET: 
      return {
        ...state, 
        items: action.payload,
        loading: false,
        error: '',
      }

    case LOADING: 
      return {
        ...state,
        loading: true,
      }

    case ERROR: 
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default: 
      return state;
  }
}

export default postReducer;