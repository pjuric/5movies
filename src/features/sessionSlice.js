import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    sessionId: null,
  },
  reducers: {
    newSession: (state, action) => {
      state.sessionId = action.payload.sessionId;
    },
  },
});

export const { newSession } = sessionSlice.actions;

export const selectSession = state => state.session.sessionId;

export default sessionSlice.reducer;