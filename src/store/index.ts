import { configureStore } from '@reduxjs/toolkit';

import { overlayReducer } from './overlay-slice';
import { positionReducer } from './position-slice';
import { filteringReducer } from './filtering-slice';

const store = configureStore({
  reducer: {
    overlay: overlayReducer,
    position: positionReducer,
    filteringKeyword: filteringReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
