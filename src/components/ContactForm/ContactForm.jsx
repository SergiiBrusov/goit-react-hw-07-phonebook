import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { contactsSelector } from '../redux/selectors';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const id = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const addContacts = ({ name, number }) => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addContacts({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit} className={css.form}>
      <Form.Group controlId={id}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+$"
          minLength="3"
          maxLength="16"
          value={name}
          onChange={handleChange}
          className={css.inputName}
          required
        />
      </Form.Group>

      <Form.Group controlId={id}>
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          title="xxx-xx-xx"
          value={number}
          onChange={handleChange}
          className={css.inputName}
          required
        />
      </Form.Group>

      <Button type="submit" className={css.buttonContacts}>
        Add Contact
      </Button>
    </Form>
  );
}
