import {call, takeEvery, put} from '@redux-saga/core/effects';

import {getUsers, setUsers} from '../actions/index';
import userApi from '../api/user';

function* onGetUsers() {
  const users = yield call(userApi.getUsers);
  yield put(setUsers(users));
}

function* onGetUsersFork() {
  yield takeEvery(getUsers, onGetUsers);
}

export default onGetUsersFork();
