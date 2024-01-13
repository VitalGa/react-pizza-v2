import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItem(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const { setItem } = pizzaSlice.actions;

export default pizzaSlice.reducer;
