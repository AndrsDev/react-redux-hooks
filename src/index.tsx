import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers  from 'stores';
import thunk from 'redux-thunk';

const store = createStore(
  reducers, //Reducers,
  {}, // Initial State,
  applyMiddleware(thunk),
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);