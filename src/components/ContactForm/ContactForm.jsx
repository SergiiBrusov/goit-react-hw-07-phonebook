import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../redux/operations';
import { selectError, selectItems } from '../redux/selectors';

import 'bootstrap/dist/css/bootstrap.min.css';

export function ContactForm() {
  const error = useSelector(selectError);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectItems);
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
    <>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="container mt-4">
        <div className="form-group">
          <label htmlFor={id}>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor={id}>Number</label>
          <input
            type="tel"
            name="number"
            className="form-control"
            value={number}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Contact
        </button>
      </form>
    </>
  );
}
