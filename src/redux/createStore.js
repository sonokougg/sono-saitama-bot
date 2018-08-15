import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import reducers from './modules';
import middlewares from './middlewares';

const configureStore = () => {
  const rootReducer = combineReducers(reducers);
  const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
  return createStore(rootReducer, {}, composeEnhancers(applyMiddleware(middlewares)));
};

export default configureStore;
