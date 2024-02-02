import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import signupReducer from '@/redux/features/signUpSlice';

import authReducer from '../features/authSlice';
import userReducer from '../features/userSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'signup'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  signup: signupReducer,
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
