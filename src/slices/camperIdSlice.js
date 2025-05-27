import { createAsyncThunk } from '@reduxjs/toolkit';

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
