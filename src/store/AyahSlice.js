import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FetchData from "./FetchData";
const AyahSlice = createSlice({
  name: "AyahData",
  initialState: {
    Arabic: "",
    VerseNo: "",
    Translation: "",
    fetching: false,
  },
  reducers: {
    MarkFetching: (state) => {
      state.fetching = true;
    },
    MarkFetchingEnded: (state) => {
      state.fetching = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FetchData.pending, (state, action) => {
      state.fetching = true;
    });
    builder.addCase(FetchData.fulfilled, (state, action) => {
      const RandomKey = action.payload[0];
      const ArabicVerse = action.payload[1];
      const TranslationVerse = action.payload[2];
      state.Arabic = ArabicVerse;
      state.VerseNo = RandomKey;
      state.Translation = TranslationVerse;
      state.fetching = false;
    });
  },
});
export const AyahSliceActions = AyahSlice.actions;
export default AyahSlice;
