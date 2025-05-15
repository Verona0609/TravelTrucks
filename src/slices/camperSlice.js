import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 🔄 Асинхронне завантаження даних з API
//асинхронний запит до сервера
export const fetchCampers = createAsyncThunk('campers/fetch', async () => {
  const api = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

  const res = await fetch(api);
  const data = await res.json();
  return data;
});

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
        state.items = action.payload.items;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
