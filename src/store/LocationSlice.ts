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
  },
});

const { actions, reducer } = LocationSlice;

export const { addLocation } = actions;

export default reducer;
