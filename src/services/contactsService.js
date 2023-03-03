import axios from 'axios';

axios.defaults.baseURL = 'https://63fd06fa677c41587318a9a3.mockapi.io/';

export const getContacts = async () => {
  const { data } = await axios.get('contacts');
  return data;
};

export const addNewContact = async contact => {
  const { data } = await axios.post('contacts', contact);
  return data;
};

export const deleteContactById = async id => {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
};
