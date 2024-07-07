import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  Box,
  Container,
  CssBaseline,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { Field, Form, Input } from './ContactForm.styled';
import { ButtonTemplate } from 'components/Button/Button';
import { addContact } from 'Redux/operations';
import { selectContacts } from 'Redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const storedContacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const theme = createTheme();

  const handleSubmit = evt => {
    evt.preventDefault();
    const existingContact = storedContacts.filter(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    existingContact.length
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({ name, phone }));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h4" variant="h4" sx={{ color: '#1976d2' }}>
            Add new contact
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            autoComplete="off"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              type="text"
              id="name"
              label="Name"
              autoFocus
              value={name}
              onChange={evt => setName(evt.target.value)}
              helperText="Name may contain only letters, apostrophe, dash and spaces"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              type="tel"
              id="phone"
              label="Phone number"
              autoFocus
              value={phone}
              onChange={evt => setPhone(evt.target.value)}
              helperText="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ButtonTemplate type="submit" fullWidth>
              Add contact
            </ButtonTemplate>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    // <Form onSubmit={handleSubmit} autoComplete="off">
    //   <Field>
    //     Name
    //     <Input
    //       type="text"
    //       name="name"
    //       value={name}
    //       onChange={evt => setName(evt.target.value)}
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       required
    //     />
    //   </Field>
    //   <Field>
    //     Phone
    //     <Input
    //       type="tel"
    //       name="phone"
    //       value={phone}
    //       onChange={evt => setPhone(evt.target.value)}
    //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //       required
    //     />
    //   </Field>
    //   <Button type="submit">Add contact</Button>
    // </Form>
  );
};
