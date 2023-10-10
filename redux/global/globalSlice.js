import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isKeyboardOpen: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleKeyboard: (state) => {
      state.isKeyboardOpen = !state.isKeyboardOpen;
    },
  },
});

export const { toggleKeyboard } = globalSlice.actions;
export default globalSlice.reducer;
