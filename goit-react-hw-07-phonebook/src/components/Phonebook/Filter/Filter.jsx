import { useSelector, useDispatch } from 'react-redux';
import { Input, Span } from './Filter.styled';
import { setFilter } from 'redux/filterContacts';
import { getFilterContacts } from 'redux/filterContacts';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContacts);
  return (
    <label htmlFor="filter">
      <Span>Find contacts by name</Span>
      <Input
        onChange={event =>
          dispatch(setFilter(event.target.value.toLowerCase()))
        }
        type="filter"
        value={filter}
        name="filter"
      />
    </label>
  );
};
