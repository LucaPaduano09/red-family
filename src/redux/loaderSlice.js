import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loading: true,
  },
  reducers: {
    update: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
});

export const { update } = loaderSlice.actions;
export default loaderSlice.reducer;
