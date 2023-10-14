import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  isImgOpen: false,
  targetName: '',
  targetId: 0,
};

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    toggleOverlay(state) {
      state.isOpen = !state.isOpen;
    },
    toggleImgOverlay(state) {
      state.isImgOpen = !state.isImgOpen;
    },
    targetName(state, actions) {
      state.targetName = actions.payload;
    },
    targetId(state, actions) {
      state.targetId = actions.payload;
    },
  },
});

export const overlayReducer = overlaySlice.reducer;
export const overlayActions = overlaySlice.actions;
