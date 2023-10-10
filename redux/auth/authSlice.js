import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
  user: null,
  error: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
};

// Signing up user
export const signup = createAsyncThunk(
  'auth/signup',
  async (user, thunkAPI) => {
    try {
      const data = await authService.signup(user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);

// Signin in user
export const signin = createAsyncThunk(
  'auth/signin',
  async (user, thunkAPI) => {
    try {
      const data = await authService.signin(user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);

export const getUserFromAsyncStorage = createAsyncThunk(
  'auth/getUser',
  async (_, thunkAPI) => {
    const user = await AsyncStorage.getItem('@user');
    if (user == null) {
      return thunkAPI.rejectWithValue(null);
    }
    return JSON.parse(user);
  }
);

// logout user
export const logout = createAsyncThunk('auth/logout', () => {
  authService.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
        state.user = null;
      })
      .addCase(signin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(signin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(getUserFromAsyncStorage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserFromAsyncStorage.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserFromAsyncStorage.rejected, (state) => {
        state.user = null;
        state.isLoading = false;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
