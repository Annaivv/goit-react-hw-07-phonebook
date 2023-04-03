import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Field, Form, Input } from './ContactForm.styled';
import { Button } from 'components/Button/Button';
import { addContact } from 'Redux/operations';
import { selectContacts } from 'Redux/selectors';

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
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Field>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={evt => setName(evt.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Field>
      <Field>
        Phone
        <Input
          type="tel"
          name="phone"
          value={phone}
          onChange={evt => setPhone(evt.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Field>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
