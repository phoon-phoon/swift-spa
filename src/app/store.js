import { configureStore } from '@reduxjs/toolkit';
import spaFormReducer from '../features/form/spaFormSlice';

export default configureStore({
  reducer: {
    spaForm: spaFormReducer,
  },
});
