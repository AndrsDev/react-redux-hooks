
import {
  SET_USERS,
  UsersActionTypes,
  UsersState,
} from './types';

const initialState : UsersState = {
  items: []
};

function userReducer(state: UsersState = initialState, action: UsersActionTypes) : UsersState {
  switch (action.type) {
    case SET_USERS: 
      return {
        ...state, 
        items: action.payload
      }

    default: 
      return state;
  }
}

export default userReducer;