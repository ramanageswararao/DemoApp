import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import {NetInfo} from 'react-native';
import reducers from '../reducer';
import middlewares from '../sagas';
import {applyMiddleware, createStore, compose} from 'redux';
import {offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const customConfig = {
  ...offlineConfig,
  effect: (effect, action) => {
    return axios.post(effect.url, action.payload && action.payload.content);
  },
};

const sagaMiddlewares = createSagaMiddleware();

export const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddlewares), offline(customConfig)),
);

sagaMiddlewares.run(middlewares);
