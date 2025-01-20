import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    page: 1,
    limit: 4,
    location: null,
    AC: null,
    transmission: null,
    kitchen: null,
    TV: null,
    bathroom: null,
    form: 'panelTruck',
  },
  reducers: {
    setPage: (state, action) => {
      console.log(action.payload);

      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setAC: (state, action) => {
      state.AC = action.payload || null;
    },
    setTransmission: (state, action) => {
      state.transmission = action.payload ? 'automatic' : null;
    },
    setKitchen: (state, action) => {
      state.kitchen = action.payload || null;
    },
    setTV: (state, action) => {
      state.TV = action.payload || null;
    },
    setBathroom: (state, action) => {
      state.bathroom = action.payload || null;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    resetFilters: (state) => {
      state.page = 1;
      state.limit = 4;
      state.location = null;
    },
  },
});

export const {
  setPage,
  setLimit,
  setLocation,
  setAC,
  setTransmission,
  setKitchen,
  setTV,
  setBathroom,
  setForm,
  resetFilters,
} = filtersSlice.actions;

export const selectFilters = (state) => state.filters;

export default filtersSlice.reducer;
