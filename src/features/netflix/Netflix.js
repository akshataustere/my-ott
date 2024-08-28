import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  netflixState: {
    status: "idle",
    data: null,
    error: null,
  },
};

// Action
// export const fetchMovies = createAsyncThunk(
//   "netflix/fetchMovies",
//   async () => {
//   const response = await axios.get(
//     `https://api.themoviedb.org/3/discover/tv?api_key=6525c1dfdc587fe24221acfae32719b3&with_networks=213`
//   );
//   return response.data;
// });

//action
export const fetchMovies = createAsyncThunk("fetch/fetchMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/tv?api_key=6525c1dfdc587fe24221acfae32719b3&with_networks=213"
  );

  return response.data;
});

// Slice
export const netflixSlice = createSlice({
  name: "netflixMovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.netflixState.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.netflixState.status = "success";
        state.netflixState.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.netflixState.status = "failed";
        state.netflixState.error = action.error.message;
      });
  },
});

// Selector
export const selectNetflix = (state) => state.netflixMovies.netflixState;

export default netflixSlice.reducer;
