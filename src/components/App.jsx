import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material';
import { fetchContacts } from 'Redux/operations';
import { selectError, selectIsLoading } from 'Redux/selectors';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm';
import { Title } from './Title';
import { ContactsSection } from './ContactsSection';

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
      <ContactsSection />
      {isLoading && !error && <b>Request in progress...</b>}

      <GlobalStyle />
    </Container>
  );
};
