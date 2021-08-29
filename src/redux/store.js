import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleWares = [];
const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleWares))
    : applyMiddleware(...middleWares);
const store = createStore(rootReducer, enhancer);

export default store;
