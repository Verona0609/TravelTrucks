import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './slices/camperSlice.js';
import filtersReducer from './slices/filterSlice.js';
import camperByIdReducer from './slices/camperIdSlice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    camperById: camperByIdReducer,
  },
});
