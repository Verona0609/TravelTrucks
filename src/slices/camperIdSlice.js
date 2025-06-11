import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCamperById = createAsyncThunk(
  'camper/fetchById',
  async (id, thunkAPI) => {
    try {
      const api = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`;
      const res = await fetch(api);
      if (!res.ok) throw new Error('Failed to fetch camper');
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const camperByIdSlice = createSlice({
  name: 'camperById',
  initialState: {
    camper: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearCamper: state => {
      state.camper = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamperById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.camper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCamper } = camperByIdSlice.actions;
export default camperByIdSlice.reducer;
