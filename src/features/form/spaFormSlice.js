import { createSlice, current } from '@reduxjs/toolkit';

export const spaFormSlice = createSlice({
  name: 'spaForm',
  initialState: [],
  reducers: {
    getFromList: (state, action) => {
      console.log(state, action);
    },
    addToList: (state, action) => {
      state.push(action.payload);
    },
    deleteFromList: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { getFromList, addToList, deleteFromList } = spaFormSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const spaList = state => state.spaForm;

export default spaFormSlice.reducer;
