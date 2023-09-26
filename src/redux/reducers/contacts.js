import { createAction, createReducer, nanoid } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: 1,
      name: 'John',
      phone: '123-456',
    },
  ],
};

export const createContactAC = createAction(
  'contacts/create',
  contactCandidate => {
    return {
      payload: contactCandidate,
    };
  }
);

export const deleteContactAC = createAction('contacts/delete', idCandidate => ({
  payload: idCandidate,
}));

export const testAC = createAction('contacts/test');

const contactsReducer = createReducer(initialState, builder => {
  builder.addCase(createContactAC, (state, action) => {
    state.list = [
      ...state.list,
      {
        ...action.payload,
        id: nanoid(),
      },
    ];
  });
  builder.addCase(deleteContactAC, (state, action) => {
    state.list = state.list.filter(contact => contact.id !== action.payload);
  });
});

export default contactsReducer;
