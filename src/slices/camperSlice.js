import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCampers = createAsyncThunk(
  'campers/fetch',
  async ({ append, ...filters } = {}, thunkAPI) => {
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

      // Додаткові опції (наприклад: AC, kitchen, etc.) //! подивитись логіку
      Object.entries(filters.options || {}).forEach(([key, value]) => {
        if (typeof value === 'boolean' && value) {
          params.append(key, 'true');
        }

        if (key === 'transmission' && typeof value === 'string') {
          params.append('transmission', value);
        }
      });

      params.append('page', filters.page || 1);
      params.append('limit', filters.limit || 3);

      const api = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${params.toString()}`;
      const res = await fetch(api);

      if (!res.ok) {
        throw new Error('Failed to fetch campers');
      }

      const data = await res.json();

      await new Promise(resolve => setTimeout(resolve, 600));

      return { data: data.items || data, append: append || false };
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
        if (action.payload.append) {
          // додаємо нові кемпери в кінець списку
          state.items = [...state.items, ...action.payload.data];
        } else {
          // замінюємо список (перший завантаження / скидання)
          state.items = action.payload.data;
        }
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
