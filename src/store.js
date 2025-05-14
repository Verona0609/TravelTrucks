import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './slices/camperSlice.js';
import filtersReducer from './slices/filterSlice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
});
