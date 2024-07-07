import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'Redux/selectors';
import { setFilter } from 'Redux/filterSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = query => dispatch(setFilter(query.toLowerCase()));

  return (
    <TextField
      type="text"
      value={filter}
      onChange={evt => handleFilterChange(evt.target.value)}
      margin="normal"
      fullWidth
      label="Find contacts by name"
    />
  );
};
