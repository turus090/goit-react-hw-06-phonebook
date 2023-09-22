import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers/contacts';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
