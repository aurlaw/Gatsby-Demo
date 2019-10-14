import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from 'redux';
import thunk from 'redux-thunk';

import {counterReducer} from './counter';

const reducers = combineReducers({
    counterReducer
});


const middleware = [
    thunk,
  ];
  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];


const createStore = () => reduxCreateStore(reducers, {}, compose(applyMiddleware(...middleware), ...enhancers));
export default createStore
