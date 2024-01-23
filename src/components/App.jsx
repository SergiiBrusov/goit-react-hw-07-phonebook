import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  const contacts = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    const strContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', strContacts);
  }, [contacts]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Phonebook</h1>
      <ContactForm />
      <h2 className="mt-4 mb-3">Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
