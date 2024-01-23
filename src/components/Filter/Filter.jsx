import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';
import { filterSelector } from '../redux/selectors';

export const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <div>
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
