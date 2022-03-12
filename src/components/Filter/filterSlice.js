import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchText(state, action) {
      state.search = action.payload;
    },
    searchStatus(state, action) {
      state.status = action.payload;
    },
    searchPriority(state, action) {
      state.priority = action.payload;
    },
  },
});
