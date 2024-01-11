import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  pageCounte: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log('action setCategoryId', action);
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPageCounte(state, action) {
      state.pageCounte = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setPageCounte } = filterSlice.actions;

export default filterSlice.reducer;
