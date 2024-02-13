import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { deleteContact } from '../redux/operations';
import { selectItems, selectFilter, selectError } from '../redux/selectors';

import 'bootstrap/dist/css/bootstrap.min.css';

export const ContactsList = () => {
  const error = useSelector(selectError);
  const contacts = useSelector(selectItems);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = useMemo(() => {
    if (filter === '') return contacts;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <div className="container mt-4">
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group">
        {filteredContacts.map(contact => (
          <li
            key={contact.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {contact.name}: {contact.number || contact.phone}
            </span>
            <button
              onClick={() => dispatch(deleteContact(contact.id))}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
