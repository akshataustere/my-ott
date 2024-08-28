import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import netflixReducer from '../features/netflix/Netflix';
import authSlice from '../features/auth/auth';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    netflixMovies: netflixReducer,
    auth: authSlice,
  },
});
