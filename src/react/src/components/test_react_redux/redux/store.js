import {createStore,applyMiddleware} from 'redux';

import rootReducer from './rootReducer.js';
import middleware from './middleware.js';

// 官方建议一个store多个reducer
// middleware也是用于分发action的,在这里执行的顺序是在组件的reducer之前,在组件的action之后。
const store = createStore(rootReducer,applyMiddleware(middleware));

export default store;