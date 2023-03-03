import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const UserAPI = {
  async register(formData) {
    const { data } = await axios.post(`users/signup`, formData);
    setAuthHeader(data.token);
    return data;
  },
  async login(formData) {
    const { data } = await axios.post(`users/login`, formData);
    setAuthHeader(data.token);
    return data;
  },
  async getUserDetails() {
    const { data } = await axios.get(`/users/current`);
    return data;
  },
  async logOut() {
    const { data } = await axios.post(`/users/logout`);
    clearAuthHeader();
    return data;
  },
};

export const ContactsAPI = {
  async getContacts() {
    const { data } = await axios.get(`/contacts`);
    return data;
  },
  async addContact(contactData) {
    const { data } = await axios.post(`/contacts`, contactData);
    return data;
  },
  async deleteContact(contactId) {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
  },
};
