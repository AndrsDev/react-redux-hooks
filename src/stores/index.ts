import { combineReducers } from 'redux';
import userReducer from 'stores/users/reducer';

const rootReducer = combineReducers({
  user: userReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>