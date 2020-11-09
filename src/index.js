import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '././store/reducer';
import reportWebVitals from './reportWebVitals';


const logger = store => {
  return next => {
    return action => {
      console.log('Dispatching middleware', action);
      const result = next(action);
      console.log('Middleware next state', store.getState());
      return result;
    }
  }
}
const store = createStore(reducer, applyMiddleware(logger, thunk));


ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
