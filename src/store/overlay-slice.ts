import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  targetName: '',
};

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    toggleOverlay(state) {
      state.isOpen = !state.isOpen;
    },
    targetName(state, actions) {
      state.targetName = actions.payload;
    },
  },
});

export const overlayReducer = overlaySlice.reducer;
export const overlayActions = overlaySlice.actions;