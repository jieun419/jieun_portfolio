import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    toggleOverlay(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const overlayReducer = overlaySlice.reducer;
export const overlayActions = overlaySlice.actions;