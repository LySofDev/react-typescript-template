import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import logger from 'redux-logger';
import { homeReducer } from './home';
import { navReducer } from './nav';

export default createStore(
  combineReducers({
    home: homeReducer,
    nav: navReducer,
    router: routerReducer,
  }),
  applyMiddleware(
    logger
  )
);
