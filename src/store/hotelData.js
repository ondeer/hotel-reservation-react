import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  hotelData: [],
}

export const hotelDataSlice = createSlice({
  name: 'hotelData',
  initialState,
  reducers: {
    setHotelData: (state , action) => {
      state.hotelData = action.payload;
    },
  },
})

export const { setHotelData } = hotelDataSlice.actions;

export default hotelDataSlice.reducer;