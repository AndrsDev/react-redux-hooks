import { createStore, applyMiddleware, combineReducers } from 'redux';
import userReducer from 'stores/users/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: userReducer,
})

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer, //Reducers,
  {}, // Preloaded State, 
  composeEnhancers(
    applyMiddleware(thunk)
  ),
)

export default store;
export type RootState = ReturnType<typeof rootReducer>