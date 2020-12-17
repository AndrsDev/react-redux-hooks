const INITIAL_STATE = {
  users: []
};

function userReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'set_users': return {...state, users: action.payload}
    default: return state;
  }
}

export default userReducer;