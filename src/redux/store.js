import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlise';
import pizza from './slices/pizzasSlise';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});
