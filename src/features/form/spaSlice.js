import { createSlice } from '@reduxjs/toolkit';

export const spaSlice = createSlice({
  name: 'spa',
  initialState: {
    id: "",
    firstname: "",
    lastname: "",
    gen: "Male",
    age: "",
    nationality: "Thai",
    phone: "",
    phone_code: "+66"
  },
  reducers: {
    toEdit: (state, action) => {
      return action.payload;
    }
  },
});

export const { toEdit } = spaSlice.actions;
export const spa = state => state.spa;
export default spaSlice.reducer;
