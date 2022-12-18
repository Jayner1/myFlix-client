<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: "movies",
  initialState: { value: [] },
  reducers: {
    setMovies: (state, action) => {
      state.value = action.payload
    }
  }
});
export const { setMovies } = moviesSlice.actions;

=======
import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: "movies",
  initialState: { value: [] },
  reducers: {
    setMovies: (state, action) => {
      state.value = action.payload
    }
  }
});
export const { setMovies } = moviesSlice.actions;

>>>>>>> 4a952d312500b67f164d060421a59facccc8e3c2
export default moviesSlice.reducer;