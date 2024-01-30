import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import signupSlice from '@/redux/slices/signUpSlice';

import userSlice from '../slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'signup'],
};

const rootReducer = combineReducers({
  user: userSlice,
  signup: signupSlice,
});

const persistedReducer = persistReducer<any>(persistConfig, rootReducer);

export function makeStore() {
  return configureStore({
    reducer: persistedReducer,
  });
}

export const store = makeStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
