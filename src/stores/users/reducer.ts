
import {
  ERROR,
  LOADING,
  SET,
  UsersActionTypes,
  UsersState,
} from './types';

const initialState : UsersState = {
  items: [],
  itemsIndexById: new Map(),
  loading: false,
  error: '',
};

function userReducer(state: UsersState = initialState, action: UsersActionTypes) : UsersState {
  switch (action.type) {


    case SET: {
      const users = action.payload;
      const map = users.reduce((list: Map<number, number>, user, index) => {
        list.set(user.id, index)
        return list
      }, new Map())
      
      return {
        ...state, 
        items: users,
        itemsIndexById: map,
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

export default userReducer;