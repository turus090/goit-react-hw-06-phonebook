import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: 1,
      name: 'John',
      phone: '123-456',
    },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContact: (state, action) => {
      state.list = [
        ...state.list,
        {
          ...action.payload,
          id: nanoid(),
        },
      ];
    },
    deleteContact: (state, action) => {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { createContact, deleteContact, changeFilter } =
  contactsSlice.actions;

export default contactsSlice.reducer;
