import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import logger from 'redux-logger';
import { homeReducer } from './home';

export default createStore(
  combineReducers({
    home: homeReducer,
    router: routerReducer
  }),
  applyMiddleware(
    logger
  )
);
