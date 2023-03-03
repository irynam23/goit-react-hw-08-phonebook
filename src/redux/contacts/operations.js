import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsAPI } from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await ContactsAPI.getContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const newContact = await ContactsAPI.addContact(contact);

      return newContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const deletedContact = await ContactsAPI.deleteContact(id);

      return deletedContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
