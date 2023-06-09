import { createSlice, current } from '@reduxjs/toolkit';
import { loadState, saveState } from './SpaLocalStorage';

export const spaFormSlice = createSlice({
  name: 'spaForm',
  initialState: loadState() || [],
  reducers: {
    addToList: (state, action) => {
      let formValue = action.payload;
      if (formValue.id) {
        let index = state.map(st => st.id).indexOf(formValue.id)
        state[index] = formValue;
        saveState(current(state));
      } else {
        var uniqid = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now();
        state.push({ ...formValue, id: uniqid });
        saveState(current(state));
      }
    },
    deleteFromList: (state, action) => {
      let ids = action.payload;
      if (ids && ids.length > 0) {
        state = state.filter(function (st) { return !ids.includes(st.id); });
        saveState(state);
        return state;
      }
    }
  },
});

export const { getFromList, addToList, deleteFromList } = spaFormSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const spaList = state => {
  return state.spaForm
};

export default spaFormSlice.reducer;
