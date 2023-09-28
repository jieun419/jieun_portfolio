import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPosition: '',
};

const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    PositionStyle(state, actions) {
      state.isPosition = actions.payload;
    },
  },
});

export const positionReducer = positionSlice.reducer;
export const positionActions = positionSlice.actions;