import { configureStore } from '@reduxjs/toolkit';
import spaSlice from '../features/form/spaSlice';
import spaFormReducer from '../features/form/spaFormSlice';

export default configureStore({
  reducer: {
    spa: spaSlice,
    spaForm: spaFormReducer,
  },
});
