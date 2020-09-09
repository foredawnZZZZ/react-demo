// import {createStore, applyMiddleware, compose} from 'redux'
// import reducer from './reducer'
// import reduxThunk from  'redux-thunk';

// // 处理redux-thunk的兼容问题
// const composeEnhancers =
//     typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(
//     applyMiddleware(reduxThunk)
// );

// //创建store状态管理对象
// const store = createStore(reducer, enhancer);
// export default store;

import { createStore } from 'redux';
import reducer from './reducer';
const Store = createStore(reducer);
export default Store;