import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <div className={css.wrap}>
      <p>Find contacts by name</p>
      <TextField
        variant="outlined"
        label="Name"
        placeholder={'Enter name'}
        type="text"
        onChange={handleFilterChange}
      />
    </div>
  );
};
