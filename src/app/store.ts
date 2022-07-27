import { configureStore } from '@reduxjs/toolkit';
import { beerApi } from '../services/beerApi';
import beerReducer from '../features/beer/beerSlice'

export const store = configureStore({
  reducer: {
    beer: beerReducer,
    [beerApi.reducerPath]: beerApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(beerApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
