import { useDispatch, useSelector } from 'react-redux';
import { FilterBox, FilterInput, FilterLabel } from './Filter.styled';
import { getFilter } from 'Redux/selectors';
import { setFilter } from 'Redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = query => dispatch(setFilter(query));

  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        value={filter}
        onChange={evt => handleFilterChange(evt.target.value)}
      />
    </FilterBox>
  );
};
