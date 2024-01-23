import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import { useMemo } from 'react';
import { contactsSelector, filterSelector } from '../redux/selectors';
import { ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './ContactList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const filteredContacts = useMemo(() => {
    if (filter === '') return contacts;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <div>
      <ListGroup>
        {filteredContacts.map(contact => (
          <ListGroup.Item key={contact.id} className={css.listItem}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <Button
              variant="danger"
              onClick={() => dispatch(deleteContact(contact.id))}
              className={css.buttonFilter}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
