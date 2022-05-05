import { configureStore } from '@reduxjs/toolkit'

import authSlice from './authSlice'
import trendingSlice from './trendingSlice';
import newReleasesSlice from './newReleasesSlice';
export const store = configureStore({
    reducer: {
        auth: authSlice,
        trending: trendingSlice,
        newReleases: newReleasesSlice,
    }
})
// const persistConfig = {
//     key: "root",
//     version: 1,
//     storage,
// };

// const reducer = combineReducers({
//     auth: authSlice.reducer,
//     user: userSlice.reducer,
//     trending: trendingSlice.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, reducer);

//         // eslint-disable-next-line
// export default () => {
//     const store = createStore(persistedReducer);
//     const persistor = persistStore(store)
//     return { store, persistor}
// };