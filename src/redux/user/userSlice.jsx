import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, logOut, refreshUser } from './operations';

const initialState = {
  userData: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',

  initialState: initialState,

  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.isLoggedIn = true;
        state.userData.name = action.payload.user.name;
        state.userData.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.isLoggedIn = true;
        state.userData.name = action.payload.user.name;
        state.userData.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(logOut.fulfilled, state => {
        state.status = 'idle';
        state.isLoggedIn = false;
        state.userData.name = null;
        state.userData.email = null;
        state.token = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.isLoggedIn = true;
        state.userData.name = action.payload.name;
        state.userData.email = action.payload.email;
      })
      .addCase(logIn.pending, pendingHandler)
      .addCase(register.pending, pendingHandler)
      .addCase(logOut.pending, pendingHandler)
      .addCase(refreshUser.pending, pendingHandler)
      .addCase(logIn.rejected, rejectHandler)
      .addCase(register.rejected, rejectHandler)
      .addCase(logOut.rejected, rejectHandler)
      .addCase(refreshUser.rejected, rejectHandler),
});

function pendingHandler(state) {
  state.error = null;
  state.status = 'pending';
}
function rejectHandler(state, action) {
  state.error = action.payload;
  state.status = 'rejected';
}

export const userReducer = userSlice.reducer;
