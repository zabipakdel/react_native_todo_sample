import { combineReducers } from 'redux';

// import counterReducer from './counterReducer';
// import testReducer from './testReducer';

// export default combineReducers({
//   counterReducer,
//   testReducer
// });

import todoReducer from './todoReducer';
export default combineReducers({ todoReducer });
