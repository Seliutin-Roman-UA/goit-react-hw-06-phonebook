import { contactReducer, filterReducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';



export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});