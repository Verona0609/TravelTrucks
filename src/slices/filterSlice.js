import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  options: [],
  vehicleType: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
    },
    toggleOption(state, action) {
      const option = action.payload;
      if (state.options.includes(option)) {
        state.options = state.options.filter(item => item !== option);
      } else {
        state.options.push(option);
      }
    },
    resetFilters(state) {
      (state.location = ''), (state.options = []), (state.vehicleType = '');
    },
  },
});

export const { setLocation, setVehicleType, toggleOption, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
