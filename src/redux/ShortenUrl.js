import { createSlice } from "@reduxjs/toolkit";

export const ShortenUrlSlice = createSlice({
  name: "ShortenUrl",
  initialState: {
    urls: [],
  },
  reducers: {
    addUrl: (state, action) => {
      state.urls.push(action.payload);
    },
  },
});

export const { addUrl } = ShortenUrlSlice.actions;
export default ShortenUrlSlice.reducer;
