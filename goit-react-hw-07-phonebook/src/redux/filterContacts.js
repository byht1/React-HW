import { createSlice } from '@reduxjs/toolkit';

export const filterContacts = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterContacts.actions;

export const getFilterContacts = state => state.filter.value;
