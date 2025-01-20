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
    total: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    clearItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.meta.arg.page > 1) {
          state.items.push(...action.payload.items);
        } else {
          state.items = action.payload.items;
        }
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearItems } = campersSlice.actions;

export const selectCampers = (state) => state.campers.items;
export const selectTotal = (state) => state.campers.total;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;

export default campersSlice.reducer;
