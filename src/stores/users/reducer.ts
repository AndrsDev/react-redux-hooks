
import {
  ERROR,
  LOADING,
  SET_USERS,
  UsersActionTypes,
  UsersState,
} from './types';

const initialState : UsersState = {
  items: [],
  loading: false,
  error: '',
};

function userReducer(state: UsersState = initialState, action: UsersActionTypes) : UsersState {
  switch (action.type) {

    case SET_USERS: 
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

export default userReducer;