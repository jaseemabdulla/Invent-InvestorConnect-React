import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slice/userSlice';
import partnerReducer from './slice/partnerSlice'
import adminReducer from './slice/adminSlice'


const persistConfig = { key: 'root', storage, version: 1 };

const reducer = combineReducers({
    userReducer,
    partnerReducer,
    adminReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer:persistedReducer
  })

const persistor = persistStore(store) 

export {store, persistor}