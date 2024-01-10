import { configureStore } from "@reduxjs/toolkit";
import hotelData from "./hotelData";

export const store = configureStore({
  reducer: {
    hotelData,
  },
});
