
import {
  ERROR,
  LOADING,
  PostsActionTypes,
  PostsState,
  ADD,
} from './types';

const initialState : PostsState = {
  items: new Map(),
  loading: false,
  error: '',
};

function postReducer(state: PostsState = initialState, action: PostsActionTypes) : PostsState {
  switch (action.type) {

    case ADD: {
      const items = new Map(state.items)
      items.set(
        action.payload.id, 
        action.payload.posts
      )
      
      return {
        ...state, 
        items: items,
        loading: false,
        error: '',
      }
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