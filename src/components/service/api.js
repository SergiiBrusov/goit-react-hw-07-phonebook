import axios from 'axios';

const baseContactsURL = axios.create({
  baseURL: 'https://6539829ce3b530c8d9e8779d.mockapi.io/contacts',
});

export const requestContacts = async () => {
  const { data } = await baseContactsURL.get('/contacts');
  return data;
};

export const requestAddContact = async newContact => {
  const { data } = await baseContactsURL.post('/contacts', newContact);
  return data;
};

export const requestDeleteContact = async contactId => {
  const { data } = await baseContactsURL.delete(`/contacts/${contactId}`);
  return data;
};
