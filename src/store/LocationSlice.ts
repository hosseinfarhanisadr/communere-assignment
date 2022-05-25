import { createSlice } from "@reduxjs/toolkit";
import { Location } from "../types";

type LocationState = Location[];

const initialState: LocationState = [];

const LocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.push(action.payload);
    },
    editLocation: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

const { actions, reducer } = LocationSlice;

export const { addLocation, editLocation } = actions;

export default reducer;
