import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from 'stores/users/reducer';
import postReducer from './posts/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer, 
})

const composeEnhancers = composeWithDevTools({serialize: true});

const store = createStore(
  rootReducer, //Reducers,
  {}, // Preloaded State, 
  composeEnhancers(
    applyMiddleware(thunk)
  ),
)

export default store;
export type RootState = ReturnType<typeof rootReducer>