import { createStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage'

import authSlice from './authSlice'
import userSlice from './userSlice';

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducer = combineReducers({
    auth: authSlice.reducer,
    user: userSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

        // eslint-disable-next-line
export default () => {
    const store = createStore(persistedReducer);
    const persistor = persistStore(store)
    return { store, persistor}
};