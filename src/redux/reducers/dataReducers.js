import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./dataActions";
const initialState = {
  info: [],
  isLoading: true,
  error: null,
};

export const dataSlice = createSlice({
  name: "DATA",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.info = action.payload;
    });
    builder.addCase(getData.rejected, (state) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const dataReducer = dataSlice.reducer;
export default dataReducer;
