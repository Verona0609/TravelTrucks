import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './slices/camperSlice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});
