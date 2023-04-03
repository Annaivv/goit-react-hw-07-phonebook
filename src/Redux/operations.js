import axios from 'axios';
import {
  fetchingInProgress,
  fetchingError,
  fetchingSuccess,
} from './contactsSlice';

axios.defaults.baseURL = 'https://6429c64d00dfa3b54739fc50.mockapi.io/';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
