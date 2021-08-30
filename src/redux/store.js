import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];
const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleWares))
    : applyMiddleware(...middleWares);
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

export default store;
