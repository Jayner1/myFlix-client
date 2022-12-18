<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = "";

export const visibilityFilterSlice = createSlice({
  name: "visibilityFilter",
  initialState: { value: initialStateValue },
  reducers: {
    filter: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { filter } = visibilityFilterSlice.actions;

=======
import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = "";

export const visibilityFilterSlice = createSlice({
  name: "visibilityFilter",
  initialState: { value: initialStateValue },
  reducers: {
    filter: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { filter } = visibilityFilterSlice.actions;

>>>>>>> 4a952d312500b67f164d060421a59facccc8e3c2
export default visibilityFilterSlice.reducer;