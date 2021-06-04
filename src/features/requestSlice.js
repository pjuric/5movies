import { createSlice } from '@reduxjs/toolkit';

export const requestSlice = createSlice({
  name: 'request',
  initialState: {
    requestToken: null,
  },
  reducers: {
    newRequestToken: (state, action) => {
      state.requestToken = action.payload.requestToken;
    },
  },
});

export const { newRequestToken } = requestSlice.actions;

export const selectRequestToken = state => state.request.requestToken;

export default requestSlice.reducer;