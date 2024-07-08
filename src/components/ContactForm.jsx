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
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [nameHelperText, setNameHelperText] = useState('');
  const [phoneHelperText, setPhoneHelperText] = useState('');
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
    return regex.test(input);
  };

  const handleInput =
    (setter, regex, errorSetter, helperTextSetter, errorMessage) => evt => {
      const value = evt.target.value;
      if (value === '' || validateInput(regex, value)) {
        setter(value);
        errorSetter(false);
        helperTextSetter('');
      } else {
        errorSetter(true);
        helperTextSetter(errorMessage);
      }
    };

  const handleNameChange = handleInput(
    setName,
    regexName,
    setNameError,
    setNameHelperText,
    'Name may contain only letters, apostrophe, dash and spaces'
  );

  const handlePhoneChange = handleInput(
    setPhone,
    regexTel,
    setPhoneError,
    setPhoneHelperText,
    'Phone number must contain only digits and dashes'
  );

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
          error={nameError}
          value={name}
          onChange={handleNameChange}
          helperText={nameHelperText}
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
          error={phoneError}
          value={phone}
          onChange={handlePhoneChange}
          helperText={phoneHelperText}
        />
        <ButtonTemplate type="submit" fullWidth variant="contained">
          Add contact
        </ButtonTemplate>
      </Box>
    </SectionLayout>
  );
};
