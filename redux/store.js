import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './global/globalSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
