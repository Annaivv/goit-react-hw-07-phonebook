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
  const [error, setError] = useState(false);
  const storedContacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const regexName =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  const regexTel = /^[\d-]+$/;

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

  const validateInput = (regex, input) => {
    const validated = regex.test(input);
    if (!validated) {
      alert('Input not valid');
      return;
    } else {
      console.log(validated);
      return validated;
    }
  };

  const handleNameChange = evt => {
    const validatedName = validateInput(regexName, evt.target.value);
    if (validatedName) {
      setName(evt.target.value);
    }
  };

  const handlePhoneChange = evt => {
    const validatedTel = validateInput(regexTel, evt.target.value);
    if (validatedTel) {
      setPhone(evt.target.value);
    }
  };

  return (
    <SectionLayout text="Add new contact">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
          onChange={handleNameChange}
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
          onChange={handlePhoneChange}
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
