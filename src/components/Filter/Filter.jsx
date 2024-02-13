import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';
import { selectError, selectFilter } from '../redux/selectors';

export const Filter = () => {
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <div>
      {error && 'something went wrong'}
      <h3>Find contacts by name</h3>
      <input
        type="filter"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
