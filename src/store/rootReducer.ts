import { combineReducers } from "@reduxjs/toolkit";
import locationReducer from "./LocationSlice";

export default combineReducers({
  location: locationReducer,
});
