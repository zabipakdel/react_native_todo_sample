import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import todoReducer from '../reducers/todoReducer';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
