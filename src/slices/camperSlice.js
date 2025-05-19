import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCampers = createAsyncThunk(
  'campers/fetch',
  async (filters = {}, thunkAPI) => {
    try {
      const params = new URLSearchParams();

      // Фільтр за місцем розташування
      if (filters.location) {
        params.append('location', filters.location);
      }

      // Фільтр за типом транспорту (vehicleType → form)
      if (filters.vehicleType) {
        params.append('form', filters.vehicleType);
      }

      // Додаткові опції (наприклад: AC, kitchen, etc.)
      filters.options?.forEach(option => {
        const key = option.charAt(0).toLowerCase() + option.slice(1);
        params.append(key, true);
      });

      const api = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${params.toString()}`;
      const res = await fetch(api);

      if (!res.ok) {
        throw new Error('Failed to fetch campers');
      }

      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 🧩 Slice для кемперів
const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Функція для очищення кемперів (наприклад, перед новим фільтром)
    resetCampers: state => {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
