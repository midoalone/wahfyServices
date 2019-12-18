import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
export const persistor = persistStore(store);
