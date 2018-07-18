import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import logger from 'redux-logger';
import { homeReducer } from './home';
import { navReducer } from './nav';
import { flashReducer } from './flash';

export default createStore(
  combineReducers({
    flash: flashReducer,
    home: homeReducer,
    nav: navReducer,
    router: routerReducer,
  }),
  applyMiddleware(
    logger
  )
);
