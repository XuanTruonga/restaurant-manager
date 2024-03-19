import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from 'services/authService';

export const getCurrentUser = createAsyncThunk('get/auth', async () => {
  const res = await authService.verifyToken();
  return res.data;
});
const SliceAuth = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isAuthenticated: false,
    isInitialized: false
  },
  reducers: {
    actionSetUserCur: (state, action) => {
      const { user } = action?.payload?.data;
      return { ...state, user: user, isAuthenticated: true, isInitialized: true };
    },
    actionLogout: (state, _) => {
      state.isAuthenticated = false;
      state.isInitialized = false;
      state.user = null;
      localStorage.removeItem('authToken');
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      console.log(1);
      state.isAuthenticated = true;
      state.isInitialized = true;
      state.user = action.payload;
    });

    builder.addCase(getCurrentUser.rejected, (state) => {
      console.log(2);
      state.isAuthenticated = false;
      state.isInitialized = true;
    });
  }
});

export const { actionSetUserCur, actionLogout } = SliceAuth.actions;
export default SliceAuth;
