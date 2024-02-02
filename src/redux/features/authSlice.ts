import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TLogin = {
  user: null,
  apiKey: '',
  apiSecret: '',
  jwt: '',
  loading: false,
  success: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<Partial<TLogin>>) => {
      state.isAuthenticated = true;
      state.jwt = action.payload.jwt;
    },
    // setLogin: (state, action) => {
    //   state.user = action.payload.user;
    //   state.jwt = action.payload.jwt;
    //   state.apiSecret = action.payload.apiSecret;
    //   state.apiKey = action.payload.apiKey;
    // },
    setLogout: (state) => {
      state.user = null;
      state.jwt = '';
    },
  },
});

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;
