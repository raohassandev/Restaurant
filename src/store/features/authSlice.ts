import { loginThunkAction, registerThunkAction } from "../thunk/userThunkActios";

import { createSlice } from "@reduxjs/toolkit";

interface AuthSlice {
  token?: string;
  user?: User;
  loading?: boolean;
  error?: Error;
}

const initialState: AuthSlice = {
  token: null,
  user: null,
  loading: false,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.error = null;
      state.token = null;
      state.user = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerThunkAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerThunkAction.fulfilled, (state, action) => {
      state.token = action.payload.token || null;
      state.user = action.payload.data;
      state.loading = false;
      state.error = null;
      console.log(action);
    });
    builder.addCase(registerThunkAction.rejected, (state, action) => {
      state.error = action.payload as any;
      state.loading = false;
      state.token = null;
      state.user = null;
    });
    ////Login
    builder.addCase(loginThunkAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginThunkAction.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(loginThunkAction.rejected, (state, action) => {
      state.error = action.payload as any;
      state.loading = false;
      state.token = null;
      state.user = null;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice;
