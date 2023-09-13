import { configureStore } from '@reduxjs/toolkit';

import { overlayReducer } from './overlay-slice';
const store = configureStore({
  reducer: {
    overlay: overlayReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;