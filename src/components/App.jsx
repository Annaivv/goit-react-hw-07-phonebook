import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import { fetchContacts } from 'Redux/operations';
import { selectError, selectIsLoading } from 'Redux/selectors';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container sx={{ marginTop: 8 }}>
      <Title component="h2" variant="h2">
        Phonebook
      </Title>
      <ContactForm />
      <Typography component="h4" variant="h4" sx={{ color: '#1976d2' }}>
        Contacts
      </Typography>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
      <GlobalStyle />
    </Container>
  );
};
