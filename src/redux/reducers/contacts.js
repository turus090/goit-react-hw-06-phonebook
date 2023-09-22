import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: 1,
      name: 'John',
      phone: '123-456',
    },
  ],
};

export const setContactAC = createAction('contacts/set', contactCandidate => {
  return {
    payload: contactCandidate,
  };
});

export const deleteContactAC = createAction('contacts/delete', idCandidate => ({
  payload: idCandidate,
}));

export const testAC = createAction('contacts/test');

const contactsReducer = createReducer(initialState, builder => {});

export default contactsReducer;
