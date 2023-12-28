/* eslint-disable consistent-return */
import { createSlice } from '@reduxjs/toolkit';

// import { getAllUsers } from '@/api/user';

// export const fetchUsers = createAsyncThunk(
//   'users/getAllUsers',
//   async (_thunkApi: any) => {
//     try {
//       const response: User[] = await getAllUsers();
//       return response;
//     } catch (e) {
//       console.log(e);
//     }
//   },
// );

const initialState = {
  users: [],
} as any;

const removeUser = (state: any, action: any) => {
  const updateFavMovieList = state.users.filter(
    (user: User) => user.id !== action.payload,
  );
  // eslint-disable-next-line no-param-reassign
  state.users = updateFavMovieList;
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: { removeUser },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchUsers.fulfilled, (state, action) => {
  //     // state.users.push(...action.payload);
  //   });
  // },
});

export default userSlice.reducer;
