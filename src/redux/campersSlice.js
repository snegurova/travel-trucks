import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (filters) => {
    const response = await axios.get(
      'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers',
      { params: filters }
    );
    return response.data;
  }
);

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default campersSlice.reducer;
