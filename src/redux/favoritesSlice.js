import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      console.log(state);

      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const selectFavorites = (state) => state.favorites.items;

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
