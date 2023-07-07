import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCountryByName = createAsyncThunk(
  "@@details/load-country-by-name",
  (name, { extra: { client, api } }) => {}
);
export const loadNeighborsByBorder = createAsyncThunk(
  "@@details/load-neighbors",
  (borders, { extra: { client, api } }) => {
    return client.get(api.filterByCode(borders));
  }
);
const initialState = {
  currentCountry: null,
  neighbors: [],
  status: "idle",
  error: null,
};
const detailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
      state.neighbors = action.payload.data.map((country) => country.name);
    });
  },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;

//selectors
export const selectCurrentCountry = (state) => state.details.currentCountry;
export const selectDetails = (state) => state.details;
export const selectNeighbors = (state) => state.details.neighbors;
