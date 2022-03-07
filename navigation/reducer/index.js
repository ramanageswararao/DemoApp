import {combineReducers} from 'redux';

import userReducer from './users';
import connectionReducer from './connectionReducer';

const rootReducer = combineReducers({
  users: userReducer,
 addToDo:connectionReducer
});

export default rootReducer;
