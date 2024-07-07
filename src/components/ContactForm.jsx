import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { ButtonTemplate } from 'components/Button';
import { addContact } from 'Redux/operations';
import { selectContacts } from 'Redux/selectors';
import { SectionLayout } from './SectionLayout';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const storedContacts = useSelector(selectContacts);
  const dispatch = useDispatch();

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
    <SectionLayout text="Add new contact">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
    </SectionLayout>
  );
};

// regexName = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
// regexTel = '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}';
