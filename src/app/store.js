import { configureStore } from '@reduxjs/toolkit';
import requestReducer from '../features/requestSlice';
import sessionReducer from '../features/sessionSlice';

export const store = configureStore({
    reducer: {
      request: requestReducer,
      session: sessionReducer,
    },
  });