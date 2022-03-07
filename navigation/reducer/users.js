import {createReducer} from 'redux-act';

import {setUsers} from '../actions';

const userReducer = createReducer(
  {
    [setUsers]: (state, payload) => payload,
  },
  [],
);

export default userReducer;
